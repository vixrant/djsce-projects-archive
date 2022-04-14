import { Col, Container, Row } from 'reactstrap';
import { CircleLoader } from 'react-spinners';
import { useQuery } from '@apollo/client';
import { GET_REPORTS } from '../gql/queries';
import Map from './Map';
import Problems from './Problems';

const Dashboard =
  () => {
    const { loading, error, data } = useQuery(GET_REPORTS, {
      pollInterval: 10000,
    });

    if(error) {
      return JSON.stringify(error);
    }

    if(loading) {
      return (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <CircleLoader size={128} />
        </div>
      );
    }

    return (
      <Container fluid className="vh-100 vw-100 bg-light">
        <Row>
          <Col sm={9} className="p-0">
            <div id="map-container">
              <Map reports={data.reports} />
            </div>
          </Col>
          <Col sm={3} className="text-center" style={{ zIndex: 1000, }}>
            <Problems reports={data.reports} />
          </Col>
        </Row>
      </Container>
    );
  };

export default Dashboard;
