import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap';
import { PacmanLoader } from 'react-spinners';
import { useCallback } from 'react';
import { useBoolean, useGeolocation } from 'react-use';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useInput } from '../utils';
import { CREATE_REPORT } from '../gql/queries';

const FormPage =
() => {
    const phone = useInput();
    const subject = useInput();
    const area = useInput();
    const description = useInput();
    const loc = useGeolocation();
    const history = useHistory();
    const [loading, toggle] = useBoolean(false);
    const [createReport, _] = useMutation(CREATE_REPORT);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        toggle();
        createReport({
            variables: {
                area: area.value,
                category: subject.value,
                lat: loc.latitude,
                lng: loc.longitude,
                text: description.value,
            }
        }).then(({ data, errors }) => {
            if (errors) {
                alert(errors.map((er) => er.message).join(' || '))
                return;
            }
            toggle();
            history.push('/');
        });
    }, [createReport, area.value, subject.value, loc.latitude, loc.longitude, description.value]);

    return (
        <div className="vh-100 vw-100 justify-content-center align-items-center d-flex flex-column bg-primary">
            <Card className="p-5 shadow-lg">
                <Form onSubmit={onSubmit} className="p-5">
                    <div className="text-center">
                        <h1>cloudFIR</h1>
                        <h3>Submit a grievance</h3>
                    </div>

                    <FormGroup className="d-flex flex-column">
                        <Label>Enter your phone number</Label>
                        <Input value={phone.value} onChange={phone.onChange} type="tel" pattern="[0-9]{10}" className="my-2"></Input>

                        <Label>Area</Label>
                        <Input value={area.value} onChange={area.onChange} className="my-2"></Input>

                        <Label>Subject</Label>
                        <Input value={subject.value} onChange={subject.onChange} className="my-2"></Input>

                        <Label>Description</Label>
                        <Input value={description.value} onChange={description.onChange} type="textarea" className="my-2"></Input>

                        <Label>Geolocation recorded...</Label>
                        {loc.loading && <PacmanLoader />}
                        {loc.error ? loc.error.message : <span className="text-muted fs-6 fw-lighter">{loc.latitude}, {loc.longitude}</span>}

                        <Button block disabled={loc.loading || loc.error || loading} type="submit" className="w-100 my-2" color="danger">Submit Grievance</Button>

                        {loading && <PacmanLoader />}
                    </FormGroup>
                </Form>            
            </Card>
        </div>
    );
}

export default FormPage;
