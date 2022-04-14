import React, { useMemo } from 'react';

import { ModalProps, Modal, ModalBody, ModalHeader, ListGroupItem, ListGroup } from 'reactstrap';

type PrescriptionType = {
  docId: string,
  userId: string,
  date: any,
  medicines: {
    name: string,
    repeats: string,
    notes: string,
    endDate: any,
  }[],
}

const PresInfo: React.FC<ModalProps & PrescriptionType> = function PresInfo(props) {
  const title = useMemo(() => {
    if(!props.date) {
      return <span hidden></span>;
    }

    let x = new Date(1970, 0, 1);
    x.setSeconds(props.date.seconds);
    return x.toDateString();
  }, [props.date]);

  return (
    <Modal {...props}>
      <ModalHeader>
        Prescription - {title}
      </ModalHeader>
      <ModalBody>
        <ListGroup>
          {props.medicines.map(m => {
            const x = new Date(1970, 0, 1);
            x.setSeconds(m.endDate.seconds);

            return (
              <ListGroupItem>
                <div>
                  {m.name} - {m.repeats}
                </div>
                <div>
                  End intake on - {x.toDateString()}
                </div>
                {m.notes && (
                  <div>
                    Notes: {m.notes}
                  </div>
                )}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </ModalBody>
    </Modal>
  );
};

export default PresInfo;
