import React from 'react';
import Banner from '../Banner/Banner';
import TopReview from '../TopReview/TopReview';
import ParallaxImage from '../Parallax/ParallaxImage';
import Support from '../Support/Support';
import Discount from '../Discount/Discount';
import Service from '../Service/Service';



const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <TopReview></TopReview>
            <ParallaxImage></ParallaxImage>
            <Support></Support>
            <Discount></Discount>
            <Service></Service>
        </section>
    );
};

export default Home;