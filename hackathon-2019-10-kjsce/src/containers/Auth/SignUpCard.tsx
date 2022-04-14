import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Card, CardHeader, CardBody, Input, Button } from "reactstrap";
import { useInput } from "../../util";
import { useFirebase } from "../../util/firebase";

const SignUpCard: React.FC = () => {
  const [otpSent, setOtpSent] = useState(false);
  const history = useHistory();

  const nameInput = useInput();
  const phoneNumberInput = useInput();
  const specialityInput = useInput();
  const experienceInput = useInput();
  const addressInput = useInput();
  const otpInput = useInput();

  const firebase = useFirebase();

  const onSignup = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otpSent && otpInput.value) {
      const cr: firebase.auth.ConfirmationResult = (window as any)
        .confirmationResult;
      cr.confirm(otpInput.value)
        .then(r => {
          if (r.user) {
            return firebase
              .firestore()
              .collection("Doctors")
              .doc(r.user.uid)
              .set({
                name: nameInput.value,
                speciality: specialityInput.value,
                address: addressInput.value,
                initialYear: new Date(experienceInput.value as string),
                workingHours: "9:00am-5:00pm"
              });
          }
        })
        .then(() => {
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
        })
        .catch(function(error) {
          alert(JSON.stringify(error));
        });
    }
  };

  return (
    <Card className="w-50">
      <CardHeader className="text-center border-0">
        <h4 className="m-0">Sign Up</h4>
      </CardHeader>
      <CardBody tag="form" onSubmit={onSignup} className="d-flex flex-column">
        <Input
          className="border-radius-50 my-1"
          placeholder="Enter your name"
          size="lg"
          {...(nameInput as any)}
        />

        <Input
          className="border-radius-50 mt-3 mb-1"
          placeholder="Enter your speciality"
          size="lg"
          {...(specialityInput as any)}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter the year you started your practice"
          type="number"
          size="lg"
          {...(experienceInput as any)}
        />

        <Input
          className="border-radius-50 my-1"
          placeholder="Enter your clinic address"
          size="lg"
          {...(addressInput as any)}
        />

        <Input
          className="border-radius-50 mt-3 mb-1"
          placeholder="Enter Phone Number"
          type="tel"
          size="lg"
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

        <Button color="danger" type="submit" className="rounded-pill my-1">
          Sign Up
        </Button>
        <Button
          tag={Link}
          to="/login"
          outline
          color="warning"
          className="rounded-pill my-1"
        >
          Log In
        </Button>
      </CardBody>
    </Card>
  );
};

export default SignUpCard;
