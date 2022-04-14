import React from "react";

import styled from "styled-components";
import LogInCard from "../../containers/Auth/LogInCard";

const LogInPageContainer = styled.div`
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
`;

const LogInPage: React.FC = () => {
  return (
    <LogInPageContainer className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <LogInCard testing/>
    </LogInPageContainer>
  );
};

export default LogInPage;
