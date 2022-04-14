import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

import { withBaseDir } from '../util/helpers';

const cardContent = [
	{
		src: withBaseDir`/static/images/technical/street.jpeg`,
		title: 'Solar Street light installation 2019-20',
		text: 'The NSS unit of D. J. Sanghvi College of Engineering successfully installed two integrated solar street lights in its adopted village-Narpad, Dahanu. As per the information collected by the Gram Panchayat, two locations which used to be quite dark after sunset were selected. First one being a meeting place and second, a road to beach near the temple. Poles of 15 feet were bought from Dahanu and Integrated solar lamps(20W) from Mumbai which consisted of a solar panel,battery,solar charge controller and LEDs.' ,
	},
	{
		src: withBaseDir`/static/images/technical/composting.png`,
		title: 'Composting 2019-20' ,
		text: 'The NSS unit of Dwarkadas J. Sanghvi College of Engineering took the initiative  of a setting up of “Barrel Composting” in the school premises of Ambewadi. Two 2 feet deep pits were dug, in which the wooden supports for the barrel were installed. The unit organised and successfully concluded a session explaining the concept of “Composting” to the villagers of Ambewadi. The aim of reducing the dependency of the farmers on chemical fertilizers, thereby improving their health and optimizing their budget, seemed to be fulfilled.',
	},
	{
		src: withBaseDir`/static/images/technical/solar.jpeg`,
		title: 'Solar installation at Ambewadi 2018-19' ,
		text: 'The NSS Unit of D. J. Sanghvi College of Engineering proudly chose to make a difference in the society by contributing their efforts in a school named Ambewadi School in Dahanu. The college took the initiative to fund the total project and support this grateful deed. They installed two solar panels each of 350 Watts in the school to provide better illumination for the children so as to encourage them for education. The main objective was to lend a hand technically as coming from an engineering college',
	},
	{
		src: withBaseDir`/static/images/technical/pulley.jpg`,
		title: 'Pulley installation 2018-19' ,
		text: 'Pulley systems were installed on two most frequented village wells, one of which required laying of the foundation which was notably designed by the volunteers themselves. The pulley systems facilitated in lowering the villagers’ efforts by a great deal.' ,
	},
];

export default () => (
	<React.Fragment>
		<div className="Main">
			<BasicNavLayout title="Technical" >
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">Technical Events</h3>
			    </div>
			    <br/><br/>			    
			    <center>
		    		{
		    			cardContent.map((content,i) => (
				      		<Card className="Card wow fadeInUp" key={i}>
						        <CardImg className="CardImg" top src={content.src} alt="Card image" />
						        <CardBody>
							        <CardTitle className="CardTitle">{content.title}</CardTitle>
							   	    <CardText className="CardText">{content.text}</CardText>
				        		</CardBody>
				      		</Card>	
				      	))
		      		}  
		      	</center>
		      	<br/><br/>
		    </BasicNavLayout>
	    </div>
	</React.Fragment>    
)

