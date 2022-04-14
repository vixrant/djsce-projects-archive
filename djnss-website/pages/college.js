import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

import { withBaseDir } from '../util/helpers';

const cardContent = [
	{
		src: withBaseDir`/static/images/events/charity_drive.png`,
		title: 'Annual Charity Drive' ,
		text: 'With the aim of giving a better exposure to some of the unheard artists and underprivileged kids of our society the NSS unit had organised its "Annual Charity Drive" from 10th August to 25th August. It showcased a variety of products from 3 different institutions made by differently abled people from chocolates to raakhis to various pouches, folders etc. Products from the following organisations were collected: 1) Punarvas Special, 2) VDIS School for Mentally Challenged, 3) Indian Mouth &amp; Foot Painting Artists. The drive aimed at helping these strong-spirited people make a living for themselves. The charity drive was a very big success. The unit was very happy and extremely grateful to the students, teachers and other staff members for their contributions towards this noble cause.',
	},
	{
		src: withBaseDir`/static/images/events/animal_welfare.png`,
		title: 'Animal Welfare Seminar' ,
		text: 'Miss Archana Shah from Foundation of Mumbai Animals presided over the seminar with its chief motive being “Changing one’s lifestyle for the betterment of animal lives”. She urged all the students to abstain the usage of animal products as a statement of fashion or style and introduce the utilization of khadi and other such material in their daily lives. This was followed by a presentation which included the methods, equipment, medicine names and cure needed for the healing a wound or a limb of an animal, and was extremely helpful. The organization emphasized the need of helping these beautiful souls in need and how to help one just by the usage of meagre lifestyle items made of animal skin.',
	},
	{
		src: withBaseDir`/static/images/events/fire_drill.jpg`,
		title: 'Fire Safety Drill' ,
		text: 'The NSS Unit of D.J. Sanghvi College Of Engineering organised a seminar in collaboration with SVKM on 27th September 2018 by (speaker name). Speaker covered a wide range of procedures to prevent casualties in the time of extreme fires. Video clips of past and recent fire cases were presented for better understanding. He also shared some safety measures and important tips in case of fire flames and about the fire drill requirements and how it should be taken seriously. With the help of volunteers he demonstrated the process of operating fire extinguishers on the college terrace. There were over 45 teachers and 20 NSS volunteers who actively participated in the seminar.',
	},
	{
		src: withBaseDir`/static/images/events/orientation.jpeg`,
		title: 'NSS Orientation' ,
		text: 'We are all Arjuna in our own journey of life. - Dr. Hari Vasudevan. With the Orientation, NSS was ready to embark on its new journey of helping and bringing about change, which would have not been possible without, the support of the Program Officers, Mr. Vyankatesh Bagal and Mr. Rahul Taware who guided the unit throughout their  journey in the past years and would continue to do so the coming years. A special thanks was given to Chief Guest, Mr. Pranav Panchal, who threw light upon the importance of NSS in every institution. The principal of the college gave the volunteers an insight on how NSS helps one become a successful person with fair principles and morals. The committee thanked the volunteers for their participation in the previously conducted events and promised them a great year ahead in NSS.',
	},
/*	{
		src: '' , 
		title: 'Cleanliness in College and Rally on Cleanliness' ,
		text: '',
	},*/
	{
		src: withBaseDir`/static/images/events/stem_cell.png`,
		title: 'Stem Cell Donation Drive' ,
		text: 'The NSS Unit of D.J. Sanghvi college, in co-ordination with the Marrow Donor Registry (India), successfully carried out the Stem Cell Donation drive within the college premises on the 18th January, 2019. A day before the drive, Dr. Praveen Clement had educated the students of each class of the college about Stem Cell Donation and encouraged everyone to join in for the good cause. On the day of the drive, a team of 6 people from the MDRI arrived to carry out the procedure. The donors filled up the form, went to the registration desk, collected empty vials from there and headed to the nurses, who filled up the vial with 4 mL of donor blood. It was a very safe procedure. The total number of donors pledging their stem cells in D.J. Sanghvi were greater than most drives that the MDRI officials had carried out in the recent days.',
	},	
	{
		src: withBaseDir`/static/images/events/blood_donation.jpg`,
		title: 'Blood Donation Drive' ,
		text: 'The theme for annual blood donation drive 2019 was magic. The volunteers wholeheartedly participated in making the drive a success by creating and contributing technical, creative and publicity ideas relating magic. The unit following its legacy collaborated with mahatma gandhi hospital, Bandra for the donation process. Djnss yet again broke its own record of highest collection amongst all the colleges in Mumbai university by collecting a staggering 696 units of blood. A free thalassemia blood check-up was also organised by the unit.',
	}							
];

export default () => (
	<BasicNavLayout title="Events" className="Main">
		<br/><br/>
		<div className="container">
			<h3 className="Heading">College Events</h3>
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
)