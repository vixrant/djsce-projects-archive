import React, { useState } from 'react';

import Form from './Form';
import Info from './Info';

const PatientPage: React.FC = () => {
  const [current, setCurrentToken] = useState<string | undefined>();

  if(!current) {
    return <Form onSubmit={setCurrentToken} />;
  }

  return <Info currentPerson={current} reset={() => setCurrentToken(undefined)} />;
};

export default PatientPage;
