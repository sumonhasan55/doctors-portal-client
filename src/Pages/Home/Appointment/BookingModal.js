import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment, date,  setTreatment}) => { 

    const {name, slots} = treatment; 

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot ,'selected')
        setTreatment(null)

    }
    return (
        <div>
       


<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-secondary text-center">Booking For{name}!</h3>

    <form onSubmit={handleBooking} className='grid grid-clos-1 gap-5 mt-2 justify-items-center'> 

    <input type="text" disabled value= {format(date, 'PP')} className="input input-bordered input-primary w-full max-w-xs" />

    <select name="slot" class="select select-bordered w-full max-w-xs">
  {
      slots.map(slot => <option value={slot}>{slot}</option>)
  }

  
  
</select>
    
    <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="email" name="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="text"  name="phone" placeholder="Phone" className="input input-bordered input-primary w-full max-w-xs" />
    <input type="submit" value= 'Submit' className='btn btn-secondary w-full max-w-xs' />

    </form>

    
  </div>
</div>
            
        </div>
    );
};

export default BookingModal;