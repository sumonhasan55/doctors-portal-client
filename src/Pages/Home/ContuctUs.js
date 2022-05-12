import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Primarybtn from '../Shared/Primarybtn';

const ContuctUs = () => {
    return (
        <section
        style={{
            background:`url(${appointment})`
            
        }}
        
         className='items-center text-center '>
          <div className=' mt-12'>
            <h3 className='text-primary'>Contuct Us</h3>
            <h1 className='text-3xl text-white'>Stay connected with us</h1>
          </div>
          <div className =''>

<div className=' py-5'>
<input className='' type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />
</div>
<div className=' py-5'>
<input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs" />
</div>
<div className=' py-5'>
<input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs" />
</div>
<Primarybtn>Submit</Primarybtn>

          </div>
        </section>

      
    );
};

export default ContuctUs;