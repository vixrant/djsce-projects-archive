import React, { useState } from "react";

import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import { Card, CardHeader, CardBody, Input, Button } from "reactstrap";
import { useInput } from "../../util";
import { useFirebase } from "../../util/firebase";

const LogInCard: React.FC<{ testing?: boolean }> = ({ testing }) => {
  const [otpSent, setOtpSent] = useState(false);
  const history = useHistory();

  const phoneNumberInput = useInput();
  const otpInput = useInput();

  const firebase = useFirebase();

  const onLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otpSent && otpInput.value) {
      const cr: firebase.auth.ConfirmationResult = (window as any)
        .confirmationResult;
      cr.confirm(otpInput.value)
        .then(r => {
          history.push("/dashboard");
        })
        .catch(e => {
          alert(JSON.stringify(e));
        });
    }

    const appVerifier = (window as any).recaptchaVerifier;
    const phoneNumber = phoneNumberInput.value;

    if (phoneNumber) {
      firebase
        .auth()
        .signInWithPhoneNumber("+91" + phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          (window as any).confirmationResult = confirmationResult;
          setOtpSent(true);
          if(testing) {
            confirmationResult.confirm("123456");
            alert("Testing done");
          }
        })
        .catch(function(error) {
          alert(JSON.stringify(error));
        });
    }
  };

  return (
    <Card>
      <CardHeader className="text-center border-0">
        <h4 className="m-0">Log In</h4>
      </CardHeader>
      <CardBody tag="form" onSubmit={onLogin} className="d-flex flex-column">
        <Input
          className="border-radius-50 my-1"
          placeholder="Enter Phone Number"
          type="tel"
          size="lg"
          disabled={otpSent}
          {...(phoneNumberInput as any)}
        />

        {otpSent && (
          <Input
            className="border-radius-50 my-1"
            placeholder="Enter OTP"
            type="number"
            {...(otpInput as any)}
          />
        )}

        <Button
          id="login-button"
          color="primary"
          type="submit"
          className="rounded-pill my-1"
        >
          Log In
        </Button>
        <Button
          tag={Link}
          to="/signup"
          outline
          color="info"
          className="rounded-pill my-1"
        >
          Sign Up
        </Button>
      </CardBody>
    </Card>
  );
};

export default LogInCard;
