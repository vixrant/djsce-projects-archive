import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import ParichayCarousel from '../components/ParichayCarousel';
import BasicNavLayout from '../layouts/BasicNavLayout';

import { withBaseDir } from '../util/helpers';

export default () => (
	<React.Fragment>
		<BasicNavLayout title="Unique Events">
			<div className="Main">
				<ParichayCarousel />
				<Container>
					<center>
						<h3 className="Heading">Project Parichay</h3>
						<br/><br/>			
					    <Row className="Row">
					        <Col className="my-auto wow slideInRight">
					        	<p>
										The government schools have started to provide students with a quality education, but the students still do lack in receiving proper guidance towards the skills required in real world. To help them overcome this, DJNSS has started with its new project "PARICHAY". As a part of which DJNSS adopted St. Mary's School, Kandivali.
										PARICHAY aims at providing them with weekly personality development sessions. Along with the personality development sessions, to help them get an edge over others the unit conducted many other other activities for the students that includes: Annual Sports Day and a Debate and Quiz competition.
										</p>
					        </Col>
					   	</Row>
					   	<br/><br/>
						<h3 className="Heading">Project Utkarsh</h3>
						<br/><br/>			
					    <Row className="Row">
					        <Col xs="12" sm="12" md="6" lg="6" className="my-auto wow slideInLeft">
					        	<img className="Image" src={withBaseDir`/static/images/unique/utkarsh.jpeg`} />
					        </Col>
					        <Col xs="12" sm="12" md="6" lg="6" className="my-auto wow slideInRight">
					        	<p>
											‘Utkarsh’ literally translates to prosperity, advancement or transcending towards a higher goal. DJNSS, the NSS unit of D.J Sanghvi College has aptly chosen this name for a long-term event to be initialised in the month of February, which includes adopting a slum area in Nehru Nagar, Vile Parle (West). The higher goal we aim at, with this project, is to bring about a major change in the area by starting with small actions, which include wall painting, interacting with the locals and children to help them overcome any fears they have that stops them from progressing in their lives. We hope that, over the years, DJNSS can help bring about at least a small change in a diverse country like ours
										</p>
					        </Col>
					   	</Row>
					   	<br/><br/>					   			   				   				   		
					</center>		   				   	
				</Container>	
			</div>													
		</BasicNavLayout>
	</React.Fragment>
)