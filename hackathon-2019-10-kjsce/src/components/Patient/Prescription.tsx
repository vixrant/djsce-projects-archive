import React, { useMemo } from 'react';

import { useToggle } from 'react-use';

import styled from 'styled-components';

import PresInfo from './PresInfo';

const PrescriptionContainer = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  font-weight: bolder;
  font-size: 1.5rem;
  color: white;
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

type PrescriptionProps = {
  prescription?: any,
};

const Prescription: React.FC<PrescriptionProps> = ({ prescription }) => {
  const [info, toggle] = useToggle(false);
  const title = useMemo(() => {
    let x = new Date(1970, 0, 1);
    x.setSeconds(prescription.date.seconds);
    return x.toDateString();
  }, [prescription.date]);

  return (
    <PrescriptionContainer onClick={toggle}>
      {title}
      <PresInfo isOpen={info} {...prescription} toggle={toggle} />
    </PrescriptionContainer>
  );
};

export default Prescription;
