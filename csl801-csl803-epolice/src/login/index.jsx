import { Link } from "react-router-dom";
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap"
import logo from './logo.png';

const Login =
    () => {
        return (
            <div className="d-flex flex-column vh-100 vw-100 justify-content-center align-items-center"
                style={{  
                    backgroundImage: "url(" + "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Card className="shadow-lg p-4">
                    <CardBody>
                        <div className="text-center">
                            <img src={logo} alt="logo"></img>
                            <h3 className="font-emp fw-bolder">Login to e-BMC</h3>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="abc@bmc.gov.in" />
                            </FormGroup>
                            <FormGroup className="mt-2">
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="*****" />
                            </FormGroup>
                            <Button tag={Link} to="/" block className="w-100 mt-2">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>

                <Card className="shadow mt-2">
                    <CardBody className="text-muted text-center h6">
                        For technical support, contact:
                        <br></br>
                        {"{Vikrant, Siddharth, Vimal}"}@djsce.ac.in
                    </CardBody>
                </Card>
            </div>
        );
    };

export default Login;
