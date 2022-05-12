import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people1.png'
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            _id:1,
            name:"Winson Hery",
            review:'',
            location:'Californiya',
            img:people1
        },
        {
            _id:2,
            name:"Winson Mery",
            review:'',
            location:'DhakaCity',
            img:people2
        },
        {
            _id:3,
            name:"Winson Chery",
            review:'',
            location:'LovlyBarisal',
            img:people3
        }

    ]
    return (

        <section>
            <div className='flex justify-between '>
                <div className='px-12 mt-5 '>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h1 className='text-5xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt=''></img>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=> <Review 
                key={review._id} review={review}
                >

                </Review>)

            }

            </div>
        </section>

    );
};

export default Testimonial;