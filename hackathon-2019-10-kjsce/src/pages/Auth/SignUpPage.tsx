import React, { useEffect } from "react";

import styled from "styled-components";
import SignUpCard from "../../containers/Auth/SignUpCard";

import firebase from "../../util/firebase";

const SignUpPageContainer = styled.div`
  background-color #ee9617;
  background-image linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
`;

const SignUpPage: React.FC = () => {
  useEffect(() => {
    firebase.auth().signOut();
  }, []);

  return (
    <SignUpPageContainer className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <SignUpCard />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
