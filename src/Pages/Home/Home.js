import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import Info from './Info';
import InfoCard from './InfoCard';
import MakeApppoint from './MakeApppoint';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
        <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeApppoint></MakeApppoint>
      <Testimonial></Testimonial>
      <ContuctUs></ContuctUs>
      <Footer></Footer>
            
        </div>
    );
};

export default Home;