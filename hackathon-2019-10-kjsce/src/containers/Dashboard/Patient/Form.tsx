import React from 'react';

import {
  Container,
  Input,
  Label,
} from 'reactstrap';

import { useInput } from '../../../util';

type FormProps = {
  onSubmit: (s: string) => void,
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const phoneNumberInput = useInput();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(phoneNumberInput.value) {
      onSubmit(phoneNumberInput.value);
    }
  };

  return (
    <Container fluid className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <form onSubmit={onFormSubmit}>
        <Label for="phoneNumberInput">Enter patient phone number</Label>
        <Input
          name="phoneNumberInput"
          size="lg"
          placeholder="PHONE NUMBER"
          {...phoneNumberInput as any}
        />
      </form>
    </Container>
  );
};

export default Form;
