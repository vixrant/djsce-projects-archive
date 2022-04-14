import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody, Jumbotron, Container } from 'reactstrap';

import { withBaseDir } from '../util/helpers';

import "../static/css/about.css";


const posInfo = [
	{
		name: "Prof. Vyankatesh Bagal",
		src: withBaseDir`/static/images/photos/bagal.jpeg`,
	},
	{
		name: "Prof. Rahul Tawre",
		src: withBaseDir`/static/images/photos/tawre.png`,
	},
	{
		name: "Prof. Alisha Banz",
		src: withBaseDir`/static/images/photos/alisha.jpeg`,
	},
];

const SocialNss = () => (
	<div id="social-bar">
		{/* <span className="social-heading"> Social </span> */}
		<div className="social-icons">
			<a href="https://www.facebook.com/djsce.nss">
				<i className="fab fa-facebook"/>
			</a>
			<a href="https://www.instagram.com/nss_djsanghvi/">
				<i className="fab fa-instagram"/>
			</a>
			<a href="https://twitter.com/dj_nssunit?lang=en">
				<i className="fab fa-twitter"/>
			</a>
		</div>
	</div>
);

const AboutNss = () => (
	<div className="lead" id="info-nss">
			<h2 className="display-5 wow slideInLeft">Our Vision</h2>
			<hr className="my-2" />
			<p className="lead wow slideInRight">
			<strong>The Vision of DJ NSS is inculcating the sense of realization followed by creating the perfect platform to bridge the gap, opening up to various sectors and having a technical touch.</strong>
			<br/><br/>
				<strong>AS A PART OF NSS UNIT WE VISUALIZE TO FIRST OF ALL GET THE SENSE OF REALIZATION</strong>
				<br/>
				Realization of helping the society is the first and the foremost thing that is required to be inculcated in each and every person in the unit. The greater they feel attached the better will they give towards changing things for the betterment of the society.
				<br/><br/>
				<strong>CREATING THE PERFECT PLATFORM TO BRIDGE THE GAP CREATING ANY KIND OF DIFFERENCE.</strong><br/>
				Realization and feeling attached is just the first step, the main part comes here when we build the perfect platform to bridge the gap between them and the outer world.
				<br/><br/>
				<strong>TECHNICAL TOUCH</strong><br/>
				Being an engineering college having a technical touch to our activities is the need of the hour. So, having a technical team which works on linking the tech world to social world is one of the major things that we visualize and have achieved with DJNSS.
				<br/><br/>
				<strong>VARIOUS SECTORS OF THE SOCIETY</strong><br/>
				We as a unit also plan to open up to various sectors of the society not just focusing on sectors which everyone helps but on the sectors which are neglected too.			
			</p>
	</div>
);

const POCard = (props) => (
	<Card key={props.key} className="Card Committee wow fadeInUp">
        <CardImg top className="CardImg" width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle className="lead"><b>{ props.name }</b></CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
        </CardBody>
    </Card>
);

const imageUrl = withBaseDir`/static/images/nss4.JPG`;

export default () => (
	<BasicNavLayout title="About" className="Main">
		<Jumbotron id="about-jumbotron" style={{
			backgroundImage: `url(${imageUrl})`
		}}>
			<h2 className="display-4 about-jumbotron-content" >
				About DJ NSS Unit
			</h2>
		</Jumbotron>
		<br/>
		<Container>
			<SocialNss />
			<br/>
			<AboutNss />
			<br/>
			<center>
				<h2>NSS Program Officers</h2>
				{ posInfo.map((content, i) => <POCard key={i} {...content} />) }
			</center>
		</Container>
	</BasicNavLayout>
);
