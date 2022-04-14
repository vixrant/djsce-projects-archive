import React from 'react';
import { Card, Button, CardImg, Cardname, CardTitle, CardText, CardDeck, CardSubname, CardBody } from 'reactstrap';
import BasicNavLayout from '../layouts/BasicNavLayout';

import { withBaseDir } from '../util/helpers';

const infoTeam = [
	{
		src: withBaseDir`/static/images/photos/committee1920/Nilay.jpg`,
		name: 'Nilay Shah',
		position: 'Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Nidhi.jpg`,
		name: 'Nidhi Joshi',
		position: 'Co-Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Ritvi.jpg`,
		name: 'Ritvi Shetty',
		position: 'Co-Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Maitri.png`,
		name: 'Maitri Shah',
		position: 'Secretary',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Vishwa.jpg`,
		name: 'Vishwa Mehta',
		position: 'Joint Secretary',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Tanaya.jpg`,
		name: 'Tanaya Parab',
		position: 'Vice Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Rajas.jpg`,
		name: 'Rajas Joshi',
		position: 'Vice Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Anushka.jpg`,
		name: 'Anushka Tol',
		position: 'Treasurer',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Jignesh.jpg`,
		name: 'Jignesh Thakur',
		position: 'Joint Treasurer',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Palak.jpg`,
		name: 'Palak Gosalia',
		position: 'Events Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Rohit.jpg`,
		name: 'Rohit Singh',
		position: 'Events Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Krupa.jpg`,
		name: 'Krupa Shah',
		position: 'Events Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Riya.jpg`,
		name: 'Riya Kothari',
		position: 'Creatives Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Yash.jpg`,
		name: 'Yash Maniyar',
		position: 'Creatives Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Moksha.jpg`,
		name: 'Moksha Vora',
		position: 'Publicity Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Divyashree.jpg`,
		name: 'Divyashree Bhadsale',
		position: 'Publicity Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Jaipal.jpg`,
		name: 'Jaipal Daswani',
		position: 'Publicity Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Jinal.jpg`,
		name: 'Jinal Soni',
		position: 'Editorial Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Sejal.jpg`,
		name: 'Sejal Mehta',
		position: 'Editorial Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Ritik.jpg`,
		name: 'Ritik Shah',
		position: 'Technical Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1920/Meet.jpg`,
		name: 'Meet Savla',
		position: 'Technical Head',
	},																																	
];

export default () => (
    <BasicNavLayout title="Committee 2019-20" className="Main">
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">NSS Committee 2019-20</h3>
			    </div>
			    <br/><br/>			    
			    <center>
		    		{
		    			infoTeam.map((content,i) => (
				      		<Card className="Card Committee wow fadeInUp my-4" key={i}>
						        <CardImg className="CardImg" top src={content.src} alt="Card image" />
						        <CardBody>
							        <CardTitle className="CardTitle">{content.name}</CardTitle>
							   	    <CardText className="CardText">{content.position}</CardText>
				        		</CardBody>
				      		</Card>	
				      	))
		      		}  
		      	</center>
		      	<br/><br/>
    </BasicNavLayout>
)
