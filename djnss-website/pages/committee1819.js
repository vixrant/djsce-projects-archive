import React from 'react';
import { Card, Button, CardImg, Cardname, CardTitle, CardText, CardDeck, CardSubname, CardBody } from 'reactstrap';
import BasicNavLayout from '../layouts/BasicNavLayout';

import { withBaseDir } from '../util/helpers';

const infoTeam = [
	{
		src: withBaseDir`/static/images/photos/committee1819/rohin.jpeg`,
		name: 'Rohin Matthew',
		position: 'Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/meet.jpg`,
		name: 'Meet Damani',
		position: 'Co-Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/harshit.jpg`,
		name: 'Harshit Samani',
		position: 'Co-Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/siddhi.jpg`,
		name: 'Siddhi Solanki',
		position: 'Secretary',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/yogesh.jpeg`,
		name: 'Yogesh Deshpande',
		position: 'Joint Secretary',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/arham.jpg`,
		name: 'Arham Mehta',
		position: 'Vice Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/trushita.jpg`,
		name: 'Trushita Bharucha',
		position: 'Vice Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/aayush.jpg`,
		name: 'Aayush Kharwal',
		position: 'Vice Chairperson',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/shravani.jpg`,
		name: 'Shravani Salunke',
		position: 'Treasurer',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/devansh.jpg`,
		name: 'Devansh Dalal',
		position: 'Joint Treasurer',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/rohan.jpg`,
		name: 'Rohan Poojari',
		position: 'Events Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/utsavi.jpg`,
		name: 'Utsavi Sevak',
		position: 'Events Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/dhruti.jpg`,
		name: 'Dhruti Kuvar',
		position: 'Creatives Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/pratiksha.jpg`,
		name: 'Pratiksha Chotalia',
		position: 'Creatives Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/priyal.jpg`,
		name: 'Priyal Dani',
		position: 'Publiciy Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/neha.jpg`,
		name: 'Neha Shah',
		position: 'Publiciy Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/shreya.jpg`,
		name: 'Shreya Nair',
		position: 'Editorial Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/manali.jpeg`,
		name: 'Manali Salvi',
		position: 'Editorial Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/maitri.jpg`,
		name: 'Maitri Gohil',
		position: 'Tech Head',
	},
	{
		src: withBaseDir`/static/images/photos/committee1819/sanya.jpg`,
		name: 'Sanya Khare',
		position: 'Tech Head',
	},																																	
];

export default () => (
    <BasicNavLayout title="Committee 2018-19" className="Main">
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">NSS Committee 2018-19</h3>
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
