import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots}=service;

    return (
        <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>
        {
            slots.length>0
            ?<span>{slots[0]}</span>
            :<span className='text-red-500'>No Slots Available</span>
        }

    </p>

    <p>{slots.length} {slots.length>1? 'Spaces' : ' Space'} Availavel</p>

    <div class="card-actions justify-center">

      
      <label for="my-modal-6"
      
       onClick={() => setTreatment(service)}
       disabled={slots.length===0}  
       className="btn btn-secondary text-center uppercase text-white">Book Appointment
      </label>

    
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Service;