import React from "react";
import { Query } from "react-apollo";
import {
  Col,
  Spinner,
  CardDeck,
  Card,
  CardText,
  CardTitle,
  Row,
  Container,
  Badge
} from "reactstrap";
import { useGeolocation } from "react-use";
import { useHistory } from "react-router-dom";
import * as queries from "../../graphql/queries/index";
import TestGoogleMap from "./TestGoogleMaps";

const RestaurantDonationNearby = () => {
  var dateobjISO = new Date().toISOString();
  console.log(dateobjISO);
  const routeHistory = useHistory();

  const variables = {
    delivery_by_time: dateobjISO // To check that the current time is less than the expiration time
  };

  const onCardClick = donationRequestId => {
    routeHistory.push("/donation/" + donationRequestId);
  };

  return (
    <Container>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "2rem" }}
      >
        <h3>Restaurants Nearby</h3>
      </div>
      <Query query={queries.DONATION_REQUEST} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Spinner />;
          }
          if (error) {
            alert(error);
          }

          console.log(data);
          return (
            <CardDeck>
              {data.donation_request.map(donation => {
                return (
                  <Card
                    tag="a"
                    onClick={() => onCardClick(donation.id)}
                    style={{
                      cursor: "pointer",
                      margin: "2rem",
                      width: "20rem"
                    }}
                    body
                    outline
                    color="primary"
                  >
                    <Row>
                      <Col>
                        <TestGoogleMap
                          lat={donation.latitude}
                          lng={donation.longitude}
                          placeName={donation.donor.name}
                        />
                      </Col>
                      <Col>
                        <CardText>
                          <h4>
                            <Badge style={{ marginRight: "1rem" }}>
                              Quantity
                            </Badge>
                            {donation.quantity} kg
                            <br />
                            <br />
                            <Badge style={{ marginRight: "1rem" }}>Slum</Badge>
                            {donation.slum_area.name}
                          </h4>
                        </CardText>
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            </CardDeck>
          );
        }}
      </Query>
    </Container>
  );
};
export default RestaurantDonationNearby;
