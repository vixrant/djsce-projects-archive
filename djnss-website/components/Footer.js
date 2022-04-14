import React, { Component } from 'react';

import { withBaseDir } from '../util/helpers';

import "./Footer.css";

		// return(
		// 	<div>
		// 		<footer className="page-footer font-small cyan darken-3">
		// 		    <div className="container">
		// 		    	<center>
		// 		    		<h3>FOLLOW US</h3>
		// 			      	<div className="row">
		// 			        	<div className="col-md-12 py-2">

		// 					            <a href="https://www.facebook.com/djsce.nss" className="m-2 btn btn-default">
		// 					              	<i className="fab fa-facebook-f fa-lg white-text m-2 fa-2x"> </i>
		// 					            </a> 

		// 					            <a className="m-2 btn btn-default">
		// 					              	<i className="fab fa-twitter fa-lg white-text m-2 fa-2x"> </i>
		// 					            </a>

		// 					            <a href="https://www.instagram.com/nss_djsanghvi/" className="m-2 btn btn-default">
		// 					              	<i className="fab fa-instagram fa-lg white-text m-2 fa-2x"> </i>
		// 					            </a>
		// 			        	</div>
		// 			      	</div>
		// 		      	</center>
		// 		    </div>
		// 		</footer>

		// 		<style jsx>{`

		// 			a {
	    //     			border: 1px solid white;
		//       			border-radius: 30%;				     
	    //     		}

		// 			footer {
		// 				margin-top: 5vh;
		// 				padding: 5vh;
		// 				font-family: Arial, Helvetica, sans-serif;
		// 				color: white;
		// 				background-color: #323232;
		// 			}

	    //     	`}</style>

		// 	</div>
		// );

{/* <div className={styles.Map}>
	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3770.011578349503!2d72.8348627649017!3d19.10714798707006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas+Jivanlal+Sanghvi+College+of+Engineering!5e0!3m2!1sen!2sin!4v1551063748177" />
</div> */}

const Footer = () => (
	<div className="Bottom">
		<footer className="Footer">
			<img src={withBaseDir`/static/images/FRONT.png`} className="Tree" />
		</footer>
		<div className="Copyright"> © DJSCE NSS Unit - 2020 </div>
	</div>
);

export default Footer;
