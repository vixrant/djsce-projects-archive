import React from 'react';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from  '../components/Footer';

import "./BasicNavLayout.css";
import '../static/css/common.css';

export default ({ title, children, className="" }) => (
    <div className={["App", className].join(" ")}>
        <Head title={title} />
        <Navbar />
        <div className="layout">
            { children }
        </div>
        <Footer />
    </div>
);
