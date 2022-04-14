import React from 'react';

import { Card,Button,CardImg,CardTitle,CardText,CardDeck,CardSubtitle,CardBody } from 'reactstrap';
import { withBaseDir } from '../util/helpers';

import BasicNavLayout from '../layouts/BasicNavLayout';


const area1cardContent = [
	{
		src: withBaseDir`/static/images/events/orphanage.png`,
		title: 'Orphanage Visit',
		text: 'True joy lies in bringing happiness to others without expecting anything in return. Following this line of thought,the NSS unit of D.J Sanghvi College organised an Orphanage Visit. The children at orphanages: (1) Sneha Sadan (Jogeshwari east),(2) Sneha Sadan (Jogeshwari west) and (3) Bosco Boys (Borivali) welcomed the volunteers with enthusiastic smiles and boundless energy.Their ceaseless spirit and exuberance managed to keep us at our toes. The fact that they wanted to give something back to the volunteers - be it drawings or a dance choreographed by them - left us completely amazed. They taught us something valuable,just as we did,for them.',
	},
	{
		src: withBaseDir`/static/images/events/kerela.jpg`,
		title: 'Care for Kerala',
		text: 'In one of the worst floods that hit Kerala this year,the massive loss of lives,property and infrastructure was unimaginable. With over ten lakh people living in temporary shelters and a lot more evacuated from their homes,the people of Kerala were relentlessly battling the helplessness of their situation when the odds were against God’s own country. In a bid to give them at least an inkling of relief,the NSS unit of D J Sanghvi College organized a drive which was held from 22 to 25 August 2018,in order to collect the basic and necessary items of livelihood. We would like to inform all the people who donated,that the packages have reached Alleppey district,Kerala successfully.',
	},
	{
		src: withBaseDir`/static/images/events/beach_cleanup.jpg`,
		title: 'Beach Cleanup',
		text: '“The time is always right to do what is right”. Keeping in mind,this quote of the famous Martin Luther King Jr,the NSS unit of D J Sanghvi College organised a beach clean-up drive on Juhu beach on a 7 a.m. sunday morning. This was following the seventh day of idol immersion of the Ganesh Utsav festival. Many people find it cumbersome to wake up early in the morning just to clean-up the beaches yet the volunteers were very enthusiastic and worked diligently with the purpose of making a significant difference. The results were visible when volunteers from another college appreciated the unit’s efforts publicly on a social media platform. The NSS unit lastly,extended a heartfelt thanks to all those who participated and made a conscious effort to keep the city clean after which the volunteers were dispersed.',
	},	
	{
		src: withBaseDir`/static/images/events/thanksgiving.png`,
		title: 'Thanksgiving',
		text: "Appreciation,Affection and Affinity are the three crucial A's of our lives. DJNSS took a day out to express these 3As to people we usually fail to notice in our daily hustle bustle. These people are the bus conductors,drivers,firemen,the policemen. Also,the unit didn’t fail to look out on our cleaning staff,who are truly an essential part of our college life. The volunteers interacted with them and had tears to hear the hardships which they have to face every day. These public workers gave the unit small tips on how the society can be kept more safe,sound and clean. By personally giving a thank you badge,DJNSS pledged to help them back in every way they could.",
	},			
];

const area2cardContent = [
	{
		src: withBaseDir`/static/images/events/tree_plantation.png`,
		title: 'Tree Plantation',
		text: 'With pollution levels that refuse to decline,it was time to do something that will help make a difference. And what better solution than planting trees? So the NSS unit of D.J Sanghvi College of Engineering organised its very first event of the Academic year 2018 - 2019: The Tree Plantation Drive! The event saw over a hundred enthusiastic volunteers who came without any qualms on the rainy Sunday morning at 8 am at Unit 4 of Aarey Colony. Equipped with pick axes,shovels and saplings,the energetic volunteers set to the task of planting over 120 saplings,not letting the rain dampen their unbound spirit.',
	},
	{
		src: withBaseDir`/static/images/events/fdd.jpg`,
		title: 'Food Donation Drive',
		text: 'DJ NSS had organised a Food donation drive as a gratitude to the luxury of food that we enjoy every day By donating food to the needy,the unit embraced a beautiful feeling of gratitude at the end. The food was donated on the streets of Borivali,Andheri and at Shanti Daan,Borivali.',
	},
	{
		src: withBaseDir`/static/images/events/ncd.jpg`,
		title: 'Newspaper Collection Drive',
		text: '“Don’t throw it away,Recycle for another day” And all our volunteers came forward to make it true. A Sunday morning which could’ve been spent by most,sleeping. A big bunch of newspapers and piles of scraps that probably would have just laid around somewhere,being of no use to anyone.  DJNSS volunteers,striving to work for the betterment of the society,put in maximum efforts in the Newspaper Collection Drive and collected these piles. The volunteers couldn’t be thanked enough for all of their efforts.',
	},
/*	{
		src: '',
		title: 'Water Conservation Awareness',
		text: '',
	},*/				
];

export default () => (
	<BasicNavLayout className="Main" title="Events" >
		<br/><br/>
		<div className="container">
			<h3 className="Heading">Area 1: Andheri/Vile Parle</h3>
		</div>
		<br/><br/>			    
		<center>
			{
				area1cardContent.map((content,i) => (
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
		<div className="container">
			<h3 className="Heading">Area 2: Goregaon</h3>
		</div>
		<br/><br/>			    
		<center>
			{
				area2cardContent.map((content,i) => (
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
);
