import Image from 'next/image'
import React, { use, useEffect } from 'react'
import bambo from '../../public/brand/bambo.png'
import FlightDetail from './flightDetail'
import FareInfo from './fareInfo'

const DetailFlightItem = ({ flight, hanldeChangeFlight }) => {
    const [infoDetail, setInfoDetail] = React.useState('flightdetail')
    const [isChoose, setIsChoose] = React.useState(false)
    const flightDetail = flight

    useEffect(() => {
        if (isChoose) {
            hanldeChangeFlight(flightDetail)
        }
    }, [flightDetail, hanldeChangeFlight, isChoose])

    return (
        <div className='w-full bg-white h-fit rounded-xl my-4'>
            <div className='py-6 px-4 flex gap-2 justify-between items-center '>
                <div className=' flex lg:gap-8 md:gap-3 gap-2 justify-between flex-col md:flex-row'>
                    <div className='flex gap-3 justify-center items-center'>
                        <div className='h-[30px] w-[30px] border rounded-md items-center mx-auto flex'>
                            <Image src={flightDetail.logo} alt='bambo' className='mx-auto items-center'></Image>
                        </div>
                        <p className='font-semibold text-black text-[14px] tracking-[1.40px]]'>{flightDetail.name}</p>
                    </div>
                    <div className='flex gap-3 '>
                        <div className='flex flex-col justify-between  font-semibold'>
                            <div className=' text-black md:text-[14px] text-sx tracking-[1.40px] '>{flightDetail.timeStart}</div>
                            <div className=" text-black md:text-[10px] text-[8px] tracking-[1.00px] leading-[normal] inline-flex items-center justify-center gap-[10px] px-[5px] py-[3px] relative bg-[#4d46fa1a] rounded-[100px]">
                                {flightDetail.from.code}
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='text-sm'>{flightDetail.timeTotal}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="7" viewBox="0 0 92 7" fill="none" className='md:w-24 w-14'>
                                <rect x="0.5" y="0.5" width="6" height="6" rx="3" fill="white" stroke="#4D46FA" />
                                <rect x="84.8188" width="7" height="7" rx="3.5" fill="#4D46FA" />
                                <line x1="7" y1="3.5" x2="85" y2="3.5" stroke="#4D46FA" />
                            </svg>
                            <p className='text-xs'>{flightDetail.transit}</p>
                        </div>
                        <div className='flex gap-2 font-semibold'>
                            <div className='flex flex-col justify-between'>
                                <div className=' text-black md:text-[14px] text-xs tracking-[1.40px] leading-[normal]'>{flightDetail.timeEnd}</div>
                                <div className=" text-black md:text-[10px] text-[8px] tracking-[1.00px] leading-[normal] inline-flex items-center justify-center gap-[10px] px-[5px] py-[3px] relative bg-[#4d46fa1a] rounded-[100px]">
                                    {flightDetail.to.code}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='lg:flex gap-2 items-center hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clipPath="url(#clip0_8_347)">
                                    <path d="M11.8316 2.29805H10.2397C10.226 2.08389 10.0484 1.91428 9.83083 1.91428H9.80968V1.03468C9.80968 0.464203 9.34077 0 8.76442 0H5.24786C4.6714 0 4.2025 0.464203 4.2025 1.03468V1.91428H4.18135C3.96378 1.91428 3.78615 2.08389 3.77258 2.29805H2.18056C0.99324 2.29805 0.0273438 3.26395 0.0273438 4.45126V12.2411C0.0273438 13.211 0.81636 14 1.78621 14H12.226C13.1958 14 13.9848 13.211 13.9848 12.2411V4.45126C13.9848 3.26395 13.0188 2.29805 11.8316 2.29805ZM7.26158 3.11836C7.62752 3.19142 7.94592 3.39885 8.1604 3.70572C8.38097 4.02135 8.46545 4.40405 8.39816 4.78313C8.37167 4.93277 8.32265 5.07451 8.25279 5.20631L7.1003 5.33865C6.98248 5.35211 6.87631 5.41599 6.80913 5.51372L5.12086 7.96835C5.05923 8.05797 5.03574 8.16841 5.0555 8.27544C5.07526 8.38246 5.13678 8.4771 5.22639 8.53873L6.91017 9.69678C6.98109 9.74559 7.06206 9.76898 7.14217 9.76898C7.27269 9.76898 7.40097 9.70692 7.48044 9.59125L9.1687 7.13661C9.23589 7.03888 9.25757 6.9169 9.22798 6.80208L8.93607 5.66624C9.06862 5.43788 9.15919 5.18954 9.20587 4.92647C9.3114 4.33153 9.17896 3.73114 8.83278 3.23596C8.80458 3.19548 8.77478 3.1566 8.74423 3.11836H10.2253V13.1797H3.7869V3.11836H7.26158ZM8.38716 6.82547L7.03706 8.78845L6.02919 8.09525L7.37929 6.13226L8.18518 6.03987L8.38716 6.82547ZM5.02281 1.03468C5.02281 0.912491 5.11958 0.820312 5.24786 0.820312H8.76442C8.8927 0.820312 8.98936 0.912491 8.98936 1.03468V1.91428H8.96822C8.75064 1.91428 8.57301 2.08389 8.55945 2.29805H5.45284C5.43916 2.08389 5.26164 1.91428 5.04396 1.91428H5.02281V1.03468ZM0.847656 12.2411V4.45126C0.847656 3.71629 1.44559 3.11836 2.18056 3.11836H2.96648V13.1797H1.78621C1.26871 13.1797 0.847656 12.7586 0.847656 12.2411ZM13.1645 12.2411C13.1645 12.7586 12.7436 13.1797 12.226 13.1797H11.0457V3.11836H11.8316C12.5666 3.11836 13.1645 3.71629 13.1645 4.45126V12.2411Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_8_347">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Baggage <span className='text-primary font-bold'>{flightDetail.baggage}</span> </p>
                        </div>
                        <div className='lg:flex gap-2 items-center hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M9.83383 0.00192261C8.49089 0.00192261 7.39832 1.0945 7.39832 2.43744V3.68286C7.39832 4.18648 7.55084 4.6698 7.83945 5.0806C8.06503 5.40199 8.36037 5.6609 8.70366 5.84045V12.8699C8.70366 13.4931 9.21069 14 9.83383 14C10.457 14 10.964 13.4931 10.964 12.8699V5.84056C11.3073 5.6609 11.6025 5.40199 11.8282 5.0807C12.1168 4.6698 12.2692 4.18648 12.2692 3.68297V2.43744C12.2693 1.0945 11.1768 0.00192261 9.83383 0.00192261ZM11.449 3.68286C11.449 4.34894 11.0307 4.95573 10.4079 5.19264C10.2488 5.2532 10.1437 5.40584 10.1437 5.5761V12.8699C10.1437 13.0407 10.0047 13.1797 9.83383 13.1797C9.66304 13.1797 9.52408 13.0407 9.52408 12.8699V5.5761C9.52408 5.40584 9.41887 5.2532 9.25972 5.19264C8.63712 4.95573 8.21873 4.34904 8.21873 3.68286V2.43744C8.21873 1.54684 8.94324 0.822342 9.83383 0.822342C10.7244 0.822342 11.449 1.54684 11.449 2.43744V3.68286Z" fill="black" />
                                <path d="M6.21077 0C5.98433 0 5.80061 0.183609 5.80061 0.410156V3.23148H5.27072V0.410156C5.27072 0.183609 5.08711 0 4.86057 0C4.63412 0 4.45041 0.183609 4.45041 0.410156V3.23148H3.92052V0.410156C3.92052 0.183609 3.73691 0 3.51036 0C3.28381 0 3.1002 0.183609 3.1002 0.410156V3.23148H2.57031V0.410156C2.57031 0.183609 2.3867 0 2.16016 0C1.93361 0 1.75 0.183609 1.75 0.410156V5.00519C1.75 5.61903 2.24934 6.11838 2.86319 6.11838H3.05534V12.8699C3.05534 13.4931 3.56227 14 4.18552 14C4.80865 14 5.31558 13.4931 5.31558 12.8699V6.11838H5.50774C6.12158 6.11838 6.62093 5.61903 6.62093 5.00519V0.410156C6.62093 0.183609 6.43732 0 6.21077 0ZM5.50774 5.29807H4.90543C4.67899 5.29807 4.49527 5.48167 4.49527 5.70822V12.8699C4.49527 13.0407 4.35631 13.1797 4.18552 13.1797C4.01462 13.1797 3.87566 13.0407 3.87566 12.8699V5.70822C3.87566 5.48167 3.69205 5.29807 3.4655 5.29807H2.86319C2.70169 5.29807 2.57031 5.16669 2.57031 5.00519V4.05179H5.80072V5.00519C5.80061 5.16669 5.66924 5.29807 5.50774 5.29807Z" fill="black" />
                            </svg>
                            <p>In-flight   <span className='text-primary font-bold'>Meal</span> </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 md:flex-row lg:gap-8 md:gap-3'>

                    <div className='flex flex-col items-center justify-center'>
                        <span className="opacity-50 font-normal text-black text-[14px]   line-through">
                            {flightDetail.price} vnd
                        </span>
                        <span className="font-semibold text-[#f06236] text-[14px]  ">
                            {flightDetail.priceSale} vnd
                        </span>
                    </div>
                    <div className={`items-center justify-center px-[15px] py-3 h-fit hover:bg-[#f06236] rounded-[12px] hover:text-white bg-[#f062361a] text-[#f06236] cursor-pointer duration-150 ${isChoose ? "bg-[#f06236] text-white" : ''}`} >
                        <div className="w-fit mt-[-1.00px] font-semibold  text-[14px] mx-auto" onClick={() => setIsChoose(!isChoose)}>
                            Choose
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between gap-4 w-full px-4 pb-6'>
                <div className='flex gap-4'>

                    <div className={`uppercase font-semibold text-black text-[12px] cursor-pointer ${infoDetail === 'flightdetail' ? "border-b-2 opacity-100 text-primary border-primary" : "opacity-40"}`} onClick={() => {
                        setInfoDetail('flightdetail')
                        setIsChoose(true)
                        if (isChoose) {
                            hanldeChangeFlight(flightDetail)
                        }
                    }}>Flight detail</div>
                    <div className={`uppercase font-semibold text-black text-[12px] cursor-pointer ${infoDetail === 'fareinfo' ? "border-b-2 opacity-100 text-primary border-primary" : "opacity-40"}`} onClick={() => {
                        setInfoDetail('fareinfo')
                        setIsChoose(true)
                        if (isChoose) {
                            hanldeChangeFlight(flightDetail)
                        }
                    }}>fare info</div>
                </div>
                {isChoose && <div className='border-[1px] lg:w-[70%] w-1/3'></div>}
            </div>
            {isChoose &&
                <div className='px-4 pb-6'>
                    {infoDetail === 'flightdetail' ? <FlightDetail flight={flightDetail} /> : <FareInfo flight={flightDetail} />}

                </div>}

        </div>
    )
}

export default DetailFlightItem