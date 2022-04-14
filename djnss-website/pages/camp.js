import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';

import { Jumbotron } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

import { withBaseDir } from '../util/helpers';

const cardContent = [
	{
		src: withBaseDir`/static/images/camp/2019_20/creative_workshop_2.jpeg`,
		title: 'Creative Workshop',
		text: "Students in the primary school of Ambewadi were taught basic Origami craft works. Clay moulding was also taught and hand painting was done on the walls of the school. Volunteers interacted with them and made sure that the students’ creative hunger was catered to.",
	},	
	{
		src: withBaseDir`/static/images/camp/2019_20/skit_dance.jpeg`,
		title: 'Street Play and Dance',
		text: "A street play by our volunteers addressed the social issues faced by our society and their counter-measures. A series of dance performances were performed by the volunteers to entertain and up the spirits of schoolchildren of Ambewadi and Narpad!",
	},		
	{
		src: withBaseDir`/static/images/camp/2019_20/shramdaan_2.jpeg`,
		title: 'Shramdaan',
		text: 'A patch of damaged road near Ambewadi was levelled and repaired using sand gravel. The damaged road was prone to frequent accidents; we tried to do our bit in making the traverse safer.' ,
	},	
	{
		src: withBaseDir`/static/images/camp/2019_20/medical_camp.jpeg`,
		title: 'Medical Camp' ,
		text: 'A Medical Camp was organised in Ambewadi for all local residents, who didn’t have easy access to medical facilities. After performing several types of check-ups, both basic and specialised; the patients were given the prescribed medicines for free. Reusable cotton Sanitary Pads were also distributed amongst women.',
	},	
	{
		src: withBaseDir`/static/images/camp/2019_20/wall_painting.jpeg`,
		title: 'Wall Painting' ,
		text: 'The school walls in Narpad were painted beautifully by the creative team of volunteers. A number train along with cartoons was painted for the students.',
	},	
	{
		src: withBaseDir`/static/images/camp/2019_20/beach.jpeg`,
		title: 'Beach Clean-up',
		text: 'With a vision to reduce plastic and waste deposition, the NSS volunteers cleaned the Narpad beach spick and span on their final day of the camp. They were given reusable gloves and bags to collect the litter. It was truly a site to behold after the clean-up.',
	},	
	{
		src: withBaseDir`/static/images/camp/2019_20/sports_day_3.jpeg`,
		title: 'Sports Day',
		text: 'A lively sports day was successfully organized for the schools of Narpad and Ambewadi.Students competed in fun events like three-legged race,lemon-spoon race and bunny hop.Board games and stationery were distributed as prizes.',
	},	
	{
		src: withBaseDir`/static/images/camp/2019_20/well_clean_2.jpeg`,
		title: 'Well Cleaning' ,
		text: 'Our volunteers cleared up the area surrounding the well of Narpad, ensuring it\'s hygiene.This spot was to be cleaned considering the health of people, especially women fetching water from this well.',
	},
];

export default () => (
	<React.Fragment>
		<div>
		    <BasicNavLayout title="CAMP" className="Main">
			    <Jumbotron>
			        <h2 className="display-4">NSS Camp</h2>
			        <hr className="my-2" />		        
			        <p className="lead">
					As a part of a government unit, 
					the unit is permitted to adopt a village for a period of 5 years to facilitate positive impacts among rural & tribal communities. 
					DJNSS thus has adopted Ambewadi and Narpad, Dahanu. 
					In the year of 2019-2020 NSS was responsible for conducting the following events in these villages.
					</p>	    	
			    </Jumbotron>
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
