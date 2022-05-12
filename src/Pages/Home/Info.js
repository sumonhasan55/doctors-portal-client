import React, { memo } from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';




const Info = memo(() => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardTitle="Openings Hours" bgClass ="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" bgClass ="bg-neutral" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" bgClass ="bg-gradient-to-r from-secondary to-primary"  img={phone}></InfoCard>
        </div>
    );
});

export default Info;