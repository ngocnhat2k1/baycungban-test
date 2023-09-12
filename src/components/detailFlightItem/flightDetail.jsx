import React from 'react'
import bambo from '../../public/brand/bambo.png'
import Image from 'next/image'

const FlightDetail = (flight) => {
    const detailFlight = flight.flight
    return (

        <div className='grid grid-flow-col grid-cols-11'>
            <div className='col-span-4 lg:flex gap-4 hidden '>
                <div className='flex flex-col justify-between'>
                    <span>
                        <h4 className="font-semibold text-black text-[14px]  ">{detailFlight.timeStart} </h4>
                        <p className="font-normal text-black text-[12px] text-center  "> {detailFlight.dayFlight.split(',')[1]} </p>
                    </span>
                    <span className="font-normal text-black text-[12px] text-center  "> {detailFlight.timeTotal}</span>
                    <span>
                        <h4 className="font-semibold text-black text-[14px]  ">{detailFlight.timeEnd}</h4>
                        <p className="font-normal text-black text-[12px] text-center  "> {detailFlight.dayLand.split(',')[1]}  </p>
                    </span>
                </div>
                <div className=' py-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="149" viewBox="0 0 7 149" fill="none">
                        <rect x="6.5" y="0.5" width="6" height="6" rx="3" transform="rotate(90 6.5 0.5)" fill="white" stroke="#4D46FA" />
                        <rect x="7" y="142" width="7" height="7" rx="3.5" transform="rotate(90 7 142)" fill="#4D46FA" />
                        <line x1="3.5" y1="6" x2="3.49999" y2="142" stroke="#4D46FA" />
                    </svg>
                </div>
                <div className='flex flex-col justify-between ml-4'>
                    <div>
                        <h4 className="font-semibold text-black text-[14px]  ">
                            {detailFlight.from.name} ({detailFlight.from.code})
                        </h4>
                        <p className="font-normal text-black text-[12px]  ">
                            {detailFlight.airportFrom}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-black text-[14px]  ">
                            {detailFlight.to.name} ({detailFlight.to.code})
                        </h4>
                        <p className="font-normal text-black text-[12px]  ">
                            {detailFlight.airportTo}
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-7  col-span-full'>
                <div className='flex gap-3' >
                    <div className='h-[30px] w-[30px] border rounded-md items-center flex'>
                        <Image src={detailFlight.logo} alt='bambo' className='mx-auto items-center'></Image>
                    </div>
                    <div>
                        <h4 className=" font-semibold text-black text-[14px] tracking-[1.40px] leading-[normal] uppercase">
                            {detailFlight.name}
                        </h4>
                        <div className='flex gap-1 items-center'>
                            <div className=" font-normal text-black text-[12px]  ">
                                {detailFlight.aircraftNumber}
                            </div>
                            <div className="w-[3px] h-[3px] bg-black rounded-full" />
                            <div className=" font-normal text-black text-[12px]  ">
                                {detailFlight.typeClass}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-4 lg:w-[500px] h-[101px] top-0 left-0 bg-[#f4f2f9] rounded-[12px] p-4" >
                    <div className='grid grid-cols-2 font-normal text-transparent text-[14px]   gap-2 [font-family:"SVN-Biennale-Regular",_Helvetica]'>
                        <div className="font-normal text-transparent lg:text-[14px] text-xs">
                            <span className="text-black ">Baggage </span>
                            <span className="  font-semibold text-[#4d46fa]">{detailFlight.baggage}</span>
                        </div>
                        <div className="font-normal text-transparent lg:text-[14px] text-xs">
                            <span className="text-black">Aircraft </span>
                            <span className="  font-semibold text-[#4d46fa]">
                                {detailFlight.Aircraft}
                            </span>
                        </div>
                        <div className="font-normal text-transparent lg:text-[14px] text-xs">
                            <span className="text-black">In-flight </span>
                            <span className="  font-semibold text-[#4d46fa]">Meal</span>
                        </div>
                        <div className="font-normal text-transparent lg:text-[14px] text-xs">
                            <span className="text-black">Seat layout </span>
                            <span className="  font-semibold text-[#4d46fa]">3-3</span>
                        </div>
                        <div className="font-normal text-transparent lg:text-[14px] text-xs">
                            <span className="text-black">In-flight </span>
                            <span className="  font-semibold text-[#4d46fa]">
                                Entertainment
                            </span>
                        </div>
                        <div className="font-normal text-transparent lg:text-[14px] text-xs">
                            <span className="text-black">Seat pitch </span>
                            <span className="  font-semibold text-[#4d46fa]">
                                29 inches
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FlightDetail