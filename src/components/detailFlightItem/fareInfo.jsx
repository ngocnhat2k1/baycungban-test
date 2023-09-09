import Image from 'next/image'
import React from 'react'
import bambo from '../../public/brand/bambo.png'


const FareInfo = () => {
    return (
        <div className='grid grid-flow-col grid-cols-11'>
            <div className='col-span-4 flex gap-6 flex-col'>
                <div className="[font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] leading-[normal]">
                    CONDITIONS
                </div>
                <div className='flex gap-3' >
                    <Image src={bambo} alt='bambo' />
                    <div>
                        <h4 className=" font-semibold text-black text-[14px] tracking-[1.40px] leading-[normal]">
                            BAMBOO AIRWAYS
                        </h4>
                        <div className='flex gap-1 items-center'>
                            <div className=" font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                                QH-183
                            </div>
                            <div className="w-[3px] h-[3px] bg-black rounded-full" />
                            <div className=" font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                                Economy
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2  items-baseline'>
                    <span className=" text-black text-[14px] tracking-[0] leading-[normal]">
                        Da Nang
                        <p className=" text-[#4d46fa] text-[12px] tracking-[0] leading-[normal]">
                            Economy
                        </p>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="7" viewBox="0 0 63 7" fill="none">
                        <rect x="0.5" y="0.5" width="6" height="6" rx="3" fill="white" stroke="#4D46FA" />
                        <rect x="56" width="7" height="7" rx="3.5" fill="#4D46FA" />
                        <line x1="6" y1="3.5" x2="56" y2="3.5" stroke="#4D46FA" />
                    </svg>
                    <span className=" text-black text-[14px] tracking-[0] leading-[normal]">
                        Ho Chi Minh
                    </span>
                </div>
                <p className=" text-black text-[12px] tracking-[0] leading-[normal]">
                    Non - Refundable
                </p>
            </div>
            <div className='col-span-7 flex gap-4'>
                <div className='col-span-4 flex gap-2 flex-col w-4/5'>
                    <div className="[font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] leading-[normal]">
                        PRICE DETAILS
                    </div>
                    <div className='flex justify-between'>
                        <span>Adult Basic Fare (x1)</span>
                        <span className='font-bold'>1,326,000 vnd</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Tax</span>
                        <span>included</span>
                    </div>
                    <div className='flex justify-between'>
                        <span> Regular Total Price</span>
                        <span>1,326,000 vnd</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className="text-[#f06236]">Save</span>
                        <span>1,326,000 vnd</span>
                    </div>
                    <div className='border-[1px] w-full'></div>
                    <div className='flex justify-between'>
                        <span >You pay</span>
                        <span className="text-[#f06236] font-bold">1,326,000 vnd</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FareInfo