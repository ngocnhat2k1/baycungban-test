'use client'

import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

import DetailFlightItem from '@/components/detailFlightItem'
import { arrayFlight } from './arrayFlight'
import bambo from '../../../public/brand/bambo.png'

const Page = () => {
    const [addressFrom, setAddressFrom] = React.useState({ province: 'Da Nang', country: 'Quang Nam, Viet Nam', time: 'Fri, 22 Mar, 2022' })
    const [addressTo, setAddressTo] = React.useState({ province: 'Ha Noi', country: 'Viet Nam', time: 'Fri, 22 Mar, 2022' })
    const router = useRouter()
    const [selectedFlight, setSelectedFlight] = React.useState()

    const changeFlight = (flight) => {
        setSelectedFlight(flight)
    }

    function swapAddress() {
        const to = addressTo;
        const from = addressFrom;
        setAddressFrom(to)
        setAddressTo(from)
    }
    return (
        <>
            <div className='bg-white w-full'>
                <div className='grid grid-flow-row grid-cols-3 sm:grid-cols-10 gap-8 bg-white  lg:max-w-[1230px] md:max-w-[800px] xs:max-w-md max-w-xs mx-auto py-5 '>
                    <div className='flex justify-between col-span-3'>
                        <div className='flex justify-center flex-col items-center  md:items-start'>
                            <h1 className=" font-semibold text-primary text-base  ">
                                {addressFrom.province}
                            </h1>
                            <p className="font-normal text-black lg:text-[12px] text-[8px] mt-1">
                                {addressFrom.time}
                            </p>
                        </div>
                        <div className=' items-center flex min-w-[25px] cursor-pointer ' onClick={() => swapAddress()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" viewBox="0 0 26 14" fill="none" className='hover:scale-[120%] duration-150'>
                                <g opacity="0.3">
                                    <path d="M6.35712 5.28091H17.531V2.27258H6.35712V0L0 3.67016L6.35712 7.34037V5.28091Z" fill="black" />
                                    <path d="M7.64636 11.7274H18.8203V14L25.1773 10.3298L18.8203 6.65964V8.71905H7.64636V11.7274Z" fill="black" />
                                </g>
                            </svg>
                        </div>
                        <div className='flex justify-center flex-col items-center md:items-start'>
                            <h1 className="  font-semibold text-[#4d46fa] text-[16px] ">
                                {addressTo.province}
                            </h1>
                            <p className="font-normal text-black lg:text-[12px] text-[8px] mt-1">
                                {addressTo.time}
                            </p>
                        </div>
                    </div>
                    <div className='flex col-span-4 justify-end lg:gap-3 gap-1 font-bold items-center text-xs lg:text-base' >
                        <span>Round-trip</span>
                        <span className='font-normal opacity-20'>|</span>
                        <span><span className='text-primary'>02</span>  Adult, <span className='text-primary'>01</span>  children</span>
                        <span className='font-normal opacity-20'>|</span>
                        <span>Business Class</span>
                    </div>
                    <div className='flex col-span-3 justify-end'>
                        <div className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[10px] relative bg-[#f06236] rounded-[12px] cursor-pointer hover:bg-primary duration-150 " onClick={() => { router.push('/') }}>
                            <div className="relative w-fit mt-[-1.00px]  font-semibold text-white  text-sm   flex gap-3">
                                Change Flights
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <g clipPath="url(#clip0_42_537)">
                                        <path d="M13.5528 13.2518L10.2208 9.78631C11.0775 8.76788 11.5469 7.48648 11.5469 6.15249C11.5469 3.03576 9.01117 0.5 5.89444 0.5C2.7777 0.5 0.241943 3.03576 0.241943 6.15249C0.241943 9.26923 2.7777 11.805 5.89444 11.805C7.0645 11.805 8.17952 11.4521 9.13282 10.7821L12.4902 14.2739C12.6305 14.4196 12.8192 14.5 13.0215 14.5C13.2129 14.5 13.3946 14.427 13.5324 14.2943C13.8254 14.0124 13.8347 13.545 13.5528 13.2518ZM5.89444 1.97456C8.1982 1.97456 10.0724 3.84873 10.0724 6.15249C10.0724 8.45625 8.1982 10.3304 5.89444 10.3304C3.59068 10.3304 1.71651 8.45625 1.71651 6.15249C1.71651 3.84873 3.59068 1.97456 5.89444 1.97456Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_42_537">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='grid grid-flow-col grid-cols-10 gap-8 lg:max-w-[1230px] md:max-w-[800px] xs:max-w-md max-w-xs mx-auto'>
                    <div className='sm:col-span-7 col-span-full  '>
                        <div className='sm:flex justify-end gap-2 items-center mt-4 mb-2 hidden'>
                            <h1 className='hidden lg:block'>Filter</h1>
                            <div>
                                <select name="transit" id="transit" className=' w-32 bg-white p-2 px-4 rounded-xl pr-8 bg-[right_top_50%]' style={{ backgroundPositionX: '95%' }}>
                                    <option value="transit">Transit</option>
                                    <option value="transit">Transit 1</option>
                                    <option value="transit">Transit 2</option>
                                    <option value="transit">Transit 3</option>
                                </select>
                            </div>
                            <div>
                                <select name="time" id="time" className=' w-32 bg-white p-2 px-4 rounded-xl pr-8 bg-[right_top_50%]' style={{ backgroundPositionX: '95%' }}>
                                    <option value="time">Time</option>
                                    <option value="time 1">Time 1</option>
                                    <option value="time 2">Time 2</option>
                                    <option value="time 3">Time 3</option>
                                </select>
                            </div>
                            <div>
                                <select name="Airline" id="Airline" className=' w-32 bg-white p-2 px-4 rounded-xl pr-8 bg-[right_top_50%]' style={{ backgroundPositionX: '95%' }}>
                                    <option value="Airline">Airline</option>
                                    <option value="Airline 1">Airline 1</option>
                                    <option value="Airline 2">Airline 2</option>
                                    <option value="Airline 3">Airline 3</option>
                                </select>
                            </div>
                            <div>
                                <select name="lowPrice" id="lowPrice" className=' w-32 bg-white p-2 px-4 rounded-xl pr-8 bg-[right_top_50%]' style={{ backgroundPositionX: '95%' }}>
                                    <option value="lowPrice">Low Price</option>
                                    <option value="hightPrice">Hight Price</option>
                                </select>
                            </div>

                        </div>
                        {arrayFlight.map((item) => {
                            return (
                                <DetailFlightItem key={item.id} flight={item} hanldeChangeFlight={changeFlight} />
                            )
                        })
                        }

                    </div>
                    {/* sections */}
                    <div className='sm:col-span-3 col-span-full'>

                        <div className='w-full bg-white rounded-xl mt-4 '>
                            <div className="  text-sm font-bold tracking-[1.40px] p-4">
                                YOUR FLIGHTS
                            </div>
                            <div className='border-b-[1px] w-full' />
                            {selectedFlight &&
                                <div className='p-3 flex flex-col gap-6'>
                                    <div className='flex gap-3 items-center'>
                                        <div className="w-[30px] h-[30px] top-0 left-0 bg-[#979797] rounded-[100px] flex justify-center text-white items-center" >01</div>
                                        <div className='flex flex-col item'>
                                            <span className="  lg: text-sm xs:text-xs tracking-[0]">
                                                {selectedFlight?.dayFlight}
                                            </span>
                                            <p className="font-semibold lg:text-sm text-xs">
                                                {selectedFlight?.from.name} - {selectedFlight?.to.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center' >
                                        <Image src={selectedFlight?.logo} alt='bambo' />
                                        <div className='gap-1 flex flex-col'>
                                            <h4 className=" font-semibold text-black lg:text-sm text-xs tracking-[1.40px] leading-[normal] uppercase">
                                                {selectedFlight?.name}
                                            </h4>
                                            <div className='flex gap-1 items-center'>
                                                <div className="font-semibold text-[#4d46fa] text-[12px]   underline cursor-pointer">
                                                    Details
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 w-full justify-center '>
                                        <div className='flex flex-col justify-between  font-semibold'>
                                            <div className=' text-black  text-sm tracking-[1.40px] leading-[normal]'>{selectedFlight?.timeStart}</div>
                                            <div className=" text-black text-[10px] tracking-[1.00px] leading-[normal] inline-flex items-center justify-center gap-[10px] px-[5px] py-[3px] relative bg-[#4d46fa1a] rounded-[100px]">
                                                {selectedFlight?.from.code}
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <div className='text-sm'>{selectedFlight?.timeTotal}</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="7" viewBox="0 0 120 7" fill="none" className='lg:w-32  w-16'>
                                                <rect x="0.5" y="0.5" width="4.63758" height="6" rx="2.31879" fill="white" stroke="#4D46FA" />
                                                <rect x="114.362" width="5.63758" height="7" rx="2.81879" fill="#4D46FA" />
                                                <line x1="4.83228" y1="3.5" x2="114.362" y2="3.5" stroke="#4D46FA" />
                                            </svg>
                                            <p className='text-xs'>{selectedFlight?.transit}</p>
                                        </div>
                                        <div className='flex gap-2 font-semibold'>
                                            <div className='flex flex-col justify-between'>
                                                <div className=' text-black  text-sm tracking-[1.40px] leading-[normal]'>{selectedFlight?.timeEnd}</div>
                                                <div className=" text-black text-[10px] tracking-[1.00px] leading-[normal] inline-flex items-center justify-center gap-[10px] px-[5px] py-[3px] relative bg-[#4d46fa1a] rounded-[100px]">
                                                    {selectedFlight?.to.code}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex w-5/6 cursor-pointer items-center justify-center gap-[10px] px-[16px] py-[10px] relative bg-[#4d46fa1a] hover:bg-primary hover:text-white rounded-[12px] mt-[-1.00px]  font-semibold text-[#4d46fa] text-[10px] lg:text-xs ">
                                            Change departure flight
                                        </div>
                                    </div>
                                    <div className='border-b-[1px] w-full' />
                                    <div className='flex gap-3 items-center'>
                                        <div className="w-[30px] h-[30px] top-0 left-0 bg-primary rounded-[100px] flex justify-center text-white items-center" >02</div>
                                        <div className='flex flex-col item'>
                                            <span className="lg:text-sm text-xs tracking-[0]">
                                                {selectedFlight?.dayLand}
                                            </span>
                                            <p className="font-semibold  lg:text-sm text-xs ">
                                                {selectedFlight?.to.name} - {selectedFlight?.from.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {selectedFlight &&
                                <div className="w-full h-fit ">
                                    <div className="0 bg-[#f8f8f8] rounded-[0px_0px_12px_12px] p-3 py-4">
                                        <div className="  text-sm   ">
                                            Subtotal
                                        </div>
                                        <div className="font-semibold text-[#f06236]  text-sm   mt-2">
                                            {selectedFlight?.priceSale}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Page