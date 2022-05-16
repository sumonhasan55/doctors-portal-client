import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [services, setServices]=useState([])
    const [treatment, setTreatment]= useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
        <h4 className='text-xl text-primary text-center'>
            Available Appointsment on {format(date, 'PP')}
        </h4>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                
                ></Service>)
            }

        </div> 

        { treatment && <BookingModal
         treatment={treatment} 
         setTreatment={setTreatment}
         date={date}></BookingModal>}

        </div>

    );
};

export default AvailableAppointments;