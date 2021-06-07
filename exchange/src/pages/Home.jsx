import React from 'react';
import About from './Component/About';
import About1 from './Component/About1';
import ContactUs from './Component/ContactUs';
import ContactUs1 from './Component/ContactUs1';
import ContactUs2 from './Component/ContactUs2';
import Footer from './Component/Footer';
import FundSec from './Component/FundSec';
import FundSec1 from './Component/FundSec1';
import FundSec2 from './Component/FundSec2';
import FundSec3 from './Component/FundSec3';
import Header from './Component/Header';
import WelcomeArea from './Component/WelcomeArea';
import WrapperProdd from './Component/WrapperProdd';

export default function Home() {
    return (
        <div>
            <Header />
            <WelcomeArea />
            <WrapperProdd />
            <About />
            <About1 />
            <FundSec />
            <FundSec1 />
            <ContactUs />
            <FundSec2 />
            <ContactUs1 />
            <FundSec3 />
            <ContactUs2 />
            <Footer />
        </div>
    )
}
