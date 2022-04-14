import React, { useState, useCallback } from "react";

import { useList, useToggle } from "react-use";
import classnames from "classnames";
import { useInput } from "../../util";
import { useFirebase } from "../../util/firebase";
import { useFirebaseUser } from "../../util/firebase/extras";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Row,
  Col,
} from "reactstrap";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectSearchBox,
  connectHits
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "2KPEBQNUMT",
  "e06a322469fe746fead40c6df7e668e5"
);

type Medicine = {
  name: string;
  repeats: string;
  endDate?: Date;
  notes?: string;
};

type ExtraAddMedicineModalProps = {
  onAdd: (m: Medicine) => void;
};

// -----------

const MedicineBox: React.FC<Medicine & { onRemove: () => void }> = ({
  name,
  repeats
}) => (
  <ListGroupItem>
    {name} - {repeats}
  </ListGroupItem>
);

const MySearchBox = connectSearchBox(({ currentRefinement, refine }) => (
  <Input
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
));

const MyHitsBox: any = connectHits(({ hits, onClick, current }: any) => {
  return hits.map((h: any) => (
    <ListGroupItem
      onClick={() => onClick(h.brand_name[0])}
      className={classnames({
        "bg-warning": h.brand_name[0] === current
      })}
    >
      {h.brand_name[0]}
    </ListGroupItem>
  ));
});

const AddMedicineModal: React.FC<
  ModalProps & ExtraAddMedicineModalProps
> = props => {
  const onClick = () => {
    props.onAdd({
      name: medicine,
      repeats: `${morning === true ? 1 : 0}-${noon === true ? 1 : 0}-${
        evening === true ? 1 : 0
      }`,
      notes: notes.value,
      endDate: new Date(enddate.value || Date.now() + 30000),
    });
    if (props.toggle) {
      props.toggle();
    }
  };

  const [medicine, setMedicine] = useState("-");
  const notes = useInput("");
  const enddate = useInput();

  const [morning, mToggle] = useToggle(false);
  const [noon, nToggle] = useToggle(false);
  const [evening, eToggle] = useToggle(false);

  return (
    <Modal {...props}>
      <ModalHeader>Add Medicine</ModalHeader>
      <ModalBody>
        <Label>Select medicine</Label>
        <InstantSearch indexName="dev_medicines" searchClient={searchClient}>
          <MySearchBox />
          <ListGroup flush>
            <MyHitsBox onClick={setMedicine} current={medicine} />
          </ListGroup>
        </InstantSearch>

        <FormGroup check className="mt-4 container">
          <Row>
            <h1>{medicine}</h1>
          </Row>
          <Row>
            <Col>
              <Label check>
                <Input type="checkbox" onClick={mToggle} />
                Morning
              </Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label check>
                <Input type="checkbox" onClick={nToggle} />
                Noon
              </Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label check>
                <Input type="checkbox" onClick={eToggle} />
                Evening
              </Label>
            </Col>
          </Row>
        </FormGroup>

        <Label>End date:</Label>
        <Input type="date" {...enddate} />

        <Label for="exampleNumber">Notes:</Label>
        <Input
          {...notes}
          type="textarea"
          id="exampleNumber"
          placeholder="Please Enter Extra Notes Here"
        />
      </ModalBody>
      <ModalFooter>
        <Button disabled={!medicine || medicine === "-"} onClick={onClick}>
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// -----------

const PrescriptionModal: React.FC<ModalProps> = props => {
  const [medicines, medActions] = useList<Medicine>([]);
  const firebase = useFirebase();
  const user = useFirebaseUser();

  const [isAddModalOpen, toggle] = useToggle(false);

  const onAddClick = (e: any) => {
    e.preventDefault();
    toggle();
  };

  const onSubmit = useCallback(() => {
    if(user) {
      const m = {
        docId: user.uid,
        userId: (props as any).patient.id,
        medicines,
        date: new Date(),
      };

      firebase.firestore()
      .collection("Prescription")
      .add(m)
      .then(() => {
        props.onDone();
      });
    }
  }, [user, medicines]);

  return (
    <Modal {...props}>
      <ModalHeader>Fill Prescription</ModalHeader>
      <ModalBody className="d-flex flex-column">
        <ListGroup>
          {medicines.map((m, i) => (
            <MedicineBox {...m} onRemove={() => medActions.remove(i)} />
          ))}
        </ListGroup>

        <Button
          onClick={onAddClick}
          type="submit"
          color="primary"
          className="my-2"
        >
          + Add Medicine
        </Button>
        <AddMedicineModal
          isOpen={isAddModalOpen}
          toggle={toggle}
          onAdd={(m: Medicine) => medActions.push(m)}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={onSubmit}>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};

export default PrescriptionModal;
