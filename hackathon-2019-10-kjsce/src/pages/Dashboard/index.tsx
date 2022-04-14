import React, { useEffect } from 'react';

import { Container, Row, Col } from 'reactstrap';

import TokenNumbers from '../../containers/Dashboard/TokenNumbers';

import PatientInfo from '../../containers/Dashboard/Patient';
import { useFirebaseUser } from '../../util/firebase/extras';

const Dashboard: React.FC = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="border-bottom border-black">
        <TokenNumbers />
      </Row>

      <Row className="bg-aqua h-75">
        <Col className="py-1">
          <PatientInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
