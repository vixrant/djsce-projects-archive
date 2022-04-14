import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';
import ReportsTable from '../components/ReportsTable';
import BasicNavLayout from '../layouts/BasicNavLayout';

import { withBaseDir } from '../util/helpers';

import '../static/css/index.css';

export default () => (
	<BasicNavLayout title="Home" className="Main">
	    <Carousel />
	    <Container>
	      <br/><br/><br/>
				<Row>
					<Col>
						<Jumbotron className="homeInfo">
							<h2 className="display-5">Not Me, But You!</h2>
							<hr className="my-2" />		        
							<p className="lead wow slideInLeft">
								The National Service Scheme (NSS) has been enthusiastically conducting activities to help people from the past 50 years. It was launched on Gandhiji's centenary year to continue his ideas of community service among the youth of our nation. NSS is a student association of the youth studying in university.
							</p>
							<p className="lead wow slideInRight">
								One such student organisations is DJNSS, the NSS unit  of Dwarkadas J. Sanghvi college of Engineering, Vile Parle (W). With a unique motto " Help, Connect, Inspire ", the organisation has been helping people enthusiastically for the past 8 years and have a vision to continue ahead. 
							</p>
							<p className="lead wow slideInLeft">
								DJNSS, has been conducting many city as well as district-level social service activities. As a part of a government unit, they are permitted to adopt a village for a period of 5 years to facilitate positive impacts among rural & tribal communities. DJNSS thus has adopted Ambewadi and Narpad, Dahanu.
							</p>		        		
						</Jumbotron>
					</Col>
					<Col md={2}>
						<ReportsTable />
					</Col>
				</Row>
				<br/>
	        	<Row>
	        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
	        			<img className="img-fluid" src={withBaseDir`/static/images/photos/principal.jpg`} />
	        		</Col>
	        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
	        			<h4 className="display-5"><strong>From the Principal's Desk</strong></h4>
						<p className="lead">
							<br/>
							Dear All,<br/>
							Greetings!<br/>
							The National Service Scheme of India (NSS) established in the year 1969, is a Central Sector Scheme of the Ministry of Youth Affairs & Sports, Government of India, which provides the students with an opportunity to participate in various government led community service activities & programmes. The motto of NSS, ‘Not Me, But You’ is what encourages the students to participate in various social activities beyond their academics and which helps them become better as an individual.<br/>
						</p>
					</Col>
					<Col> 
						<p className="lead">
							DJNSS, the NSS unit of Dwarkadas J Sanghvi College of Engineering commenced on their journey towards better individuality, and therefore a better nation in the year 2010. The unit works for the all-round development of the society, wherein they try to solve various issues ranging from socio-economic problems to the crisis caused by global warming that ails Mother Nature.<br/><br/>
							We, at D.J Sanghvi College of Engineering believe that, for every individual to be strong enough to face the challenges of today’s world, they have to see for themselves the problems and predicaments faced by the society and work towards its betterment, one step at a time. At DJNSS, we nurture and encourage this thought process, which will help the students become resilient and unfaltering in the face of life, ultimately transforming them from the “Arjuna Syndrome” to being successful individuals in their journey towards becoming a strong unit for the progress and development of the nation.<br/><br/>
							Social growth aside, DJNSS also encourages the students to bring about various technical advancements wherever necessary and possible. We encourage the unit to mesh technology with daily life of the needy, thereby inculcating in them, a sense of oneness with the society as a whole.<br/><br/>
							In all our efforts, we seek the Lord's Grace to keep us on the path of virtue, courage and wisdom. May thy grace and blessings flow through us to the world around us in all our efforts to make better people, in addition to being quality engineers, who can make a positive impact in our society and help build our nation in these ever changing and challenging times.<br/><br/>  
							Warm regards & good wishes!<br/><br/>
							<b style={{fontWeight: 'bold'}}>Dr. Hari Vasudevan</b><br/>
							<i>Principal</i><br/>
						</p>
	        		</Col>
	        	</Row>
	        	<br/>	        
	        </Container>     
	</BasicNavLayout>
)
