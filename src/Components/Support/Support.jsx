import Lottie from 'lottie-react';
import React from 'react';
import support from "../../../public/support.json"

const Support = () => {
    return (
        <section className='flex justify-around '>
            <Lottie className='w-[500px]' animationData={support}></Lottie>
            <div className='my-auto'>
                <form action="" className='w-80'>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Email</label>
                        <input type="text" className='p-1 border-2 border-black rounded-xl w-full ' name="" id="" />
                    </div>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Subject</label>
                        <input type="text" className='p-1 border-2 border-black rounded-xl w-full ' name="" id="" />
                    </div>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Description</label>
                        <textarea className='w-full rounded-2xl p-2 h-24 border-2 border-black'></textarea>
                    </div>
                    <div>
                        <button className='btn bg-[#0D7C66] text-white font-bold'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Support;