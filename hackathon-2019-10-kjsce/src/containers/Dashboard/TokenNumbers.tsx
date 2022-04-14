import React, { useState, useEffect } from 'react';

import {
  Container,
  Col,
} from 'reactstrap';

import styled from 'styled-components';

import Token from '../../components/Token';
import { useFirebase } from '../../util/firebase';
import { useFirebaseUser } from '../../util/firebase/extras';

const HorizonalScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

type TokenType = {
  attended: boolean,
  date: Date,
  docId: string,
  symptoms: string,
  tokenNo: number,
  userId: string,
};

const TokenNumbers: React.FC = () => {
  const firebase = useFirebase();
  const user = useFirebaseUser();

  const [currentPeople, setCurrentPeople] = useState<string | null>(null);
  const [tokens, setTokens] = useState<TokenType[]>([]);

  useEffect(() => {
    if(user) {
      firebase.firestore()
      .collection("Appointments")
      .where("docId", "==", user.uid)
      .where("attended", "==", false)
      .onSnapshot((res) => {
        const active = res.docs.map(t => t.data()) as TokenType[];
        setTokens(active.filter(t => !t.attended).sort((a, b) => a.tokenNo - b.tokenNo));
      });
    }
  }, [user]);

  useEffect(() => {
    firebase.firestore()
    .collection('Doctors')
    .doc("hellorashmi")
    .onSnapshot(doc => {
      if(doc.exists) {
        const x: any = doc.data();
        setCurrentPeople(x.patientCount);
      }
    })
  }, []);

  return (
    <>
      <Col sm={4} className="border-right border-black d-flex align-items-center justify-content-around">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h2>{tokens.length}</h2>
          <span className="text-center">Tokens remaining</span>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <h2>{currentPeople}</h2>
          <span className="text-center">People in waiting room</span>
        </div>
      </Col>

      <Col sm={8} className="px-0">
        <Container fluid style={{
          maxHeight: '70vh',
          overflow: 'auto',
        }}>
          <HorizonalScroll>
            {tokens.map(t => <Token number={t.tokenNo} />)}
          </HorizonalScroll>
        </Container>
      </Col>
    </>
  );
};

export default TokenNumbers;
