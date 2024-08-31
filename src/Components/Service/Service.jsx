import Lottie from 'lottie-react';
import React from 'react';
import bestseller from '../../../public/bestseller.json'
import delivery from '../../../public/delivery.json'
import shopping from '../../../public/shopping.json'

const Service = () => {
    return (
        <section className='my-10'>
            <h1 className='text-4xl text-center font-bold my-5'>Our Service</h1>
            <div className='flex justify-center gap-10'>
                <div className='bg-[#BDE8CA] rounded-2xl'>
                    <Lottie className='w-40' animationData={bestseller} loop={true}></Lottie>
                    <h1 className='text-center font-bold text-lg'>Best Seller</h1>
                </div>
                <div className='bg-[#BDE8CA] rounded-2xl'>
                    <Lottie className='w-40' animationData={delivery} loop={true}></Lottie>
                    <h1 className='text-center font-bold text-lg'>Best Seller</h1>
                </div>
                <div className='bg-[#BDE8CA] rounded-2xl'>
                    <Lottie className='w-40' animationData={shopping} loop={true}></Lottie>
                    <h1 className='text-center font-bold text-lg'>Best Seller</h1>
                </div>
            </div>
        </section>
    );
};

export default Service;