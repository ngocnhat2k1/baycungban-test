'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import changeIcon from '../../public/icon/changeIcon.svg'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const SearchFlightsCard = () => {
    const [typeFlight, setTypeFlight] = React.useState('Oneway/Round-trip')
    const [dateFrom, setDateFrom] = React.useState(new Date())
    const [dateTo, setDateTo] = React.useState(new Date())
    const [passengers, setPassengers] = React.useState({ adult: 2, children: 1 })
    const [openPassengers, setOpenPassengers] = React.useState(false)
    const passengersModal = useRef(null);
    const fromModal = useRef(null)
    const toModal = useRef(null)
    const [addressFrom, setAddressFrom] = React.useState({ province: 'Da Nang', country: 'Quang Nam, Viet Nam' })
    const [addressTo, setAddressTo] = React.useState({ province: 'Ha Noi', country: 'Viet Nam' })
    const [openAddressFrom, setOpenAddressFrom] = React.useState(false)
    const [openAddressTo, setOpenAddressTo] = React.useState(false)
    const router = useRouter()

    function plusPassengers(type) {
        if (type === 'adult') {
            setPassengers({ ...passengers, adult: passengers.adult + 1 })
        } else {
            setPassengers({ ...passengers, children: passengers.children + 1 })
        }
    }
    function minusPassengers(type) {
        if (type === 'adult') {
            setPassengers({ ...passengers, adult: passengers.adult - 1 })
        } else {
            setPassengers({ ...passengers, children: passengers.children - 1 })
        }
    }
    function swapAddress() {
        const to = addressTo;
        const from = addressFrom;
        setAddressFrom(to)
        setAddressTo(from)
    }
    function handleClickOutside(ref, state, setState) {
        function handle(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(!state)
            }
        }
        document.addEventListener("mousedown", handle);
        return () => {
            document.removeEventListener("mousedown", handle);
        };
    }

    useEffect(() => {
        handleClickOutside(passengersModal, openPassengers, setOpenPassengers)
        handleClickOutside(fromModal, openAddressFrom, setOpenAddressFrom)
        handleClickOutside(toModal, openAddressTo, setOpenAddressTo)

    }, [openPassengers, openAddressFrom, openAddressTo]);

    return (
        <div className='mt-44 max-w-[1230px]'>
            <div className=" h-[224px] top-0 left-0 bg-white rounded-[12px] shadow-[0px_4px_30px_#4d46fa1a]" >
                <div className='p-8 w-full'>
                    <div className='flex flex-row gap-8'>
                        <div >
                            <label htmlFor="oneWay" className='flex gap-2 peer-checked/oneway:border-[6px] font-bold'>
                                <input type="radio" id="oneWay" name="typeFlight" value=" Oneway/Round-trip" checked="checked" onChange={() => setTypeFlight('Oneway/Round-trip')} className='peer/oneway hidden' />
                                <div className='border w-6 h-6 rounded-full bg-[#F4F2F9] peer-checked/oneway:border-[6px] peer-checked/oneway:border-primary'></div>
                                One way / Round-trip</label>
                        </div>
                        <div >
                            <label htmlFor="multi" className='flex gap-2 peer-checked/multi:border-[6px] font-bold'>
                                <input type="radio" id="multi" name="typeFlight" value=" Multi-city" onChange={() => setTypeFlight('Multi-city')} className='peer/multi hidden' />
                                <div className='border w-6 h-6 rounded-full bg-[#F4F2F9] peer-checked/multi:border-[6px] peer-checked/multi:border-primary'></div>
                                Multi-city</label>
                        </div>
                        <div>
                            <div className='font-bold flex items-center cursor-pointer' onClick={() => setOpenPassengers(!openPassengers)}>
                                <strong className='text-primary'>{passengers.adult} &nbsp;</strong>  Adult, &nbsp;<strong className='text-primary'>{passengers.children}&nbsp; </strong> children
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 40 40" className='ml-2'><path fill="#4d46fa" d="M4.659 11.833h30.682L20 32.167z" /></svg>

                            </div>
                            {openPassengers &&
                                <div ref={passengersModal} className=' absolute w-[300px] h-[200px] bg-white rounded-[12px] shadow-[0px_4px_30px_#4d46fa1a] z-50' >
                                    <div className='p-8'>
                                        <div className='flex justify-between'>
                                            <h1 className='font-bold text-[24px]'>Passengers</h1>
                                            <div className='flex items-center gap-2'>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => setOpenPassengers(!openPassengers)}>Done</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between gap-4 mt-8'>
                                            <div className='flex gap-2'>
                                                <h2 className='font-bold text-[14px]'>Adult</h2>
                                            </div>
                                            <div className='flex flex-row gap-4'>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => minusPassengers('adult')}>-</button>
                                                <p className='font-bold text-[14px] text-[#4d46fa]'>{passengers.adult}</p>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => plusPassengers('adult')}>+</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between gap-4 mt-8'>
                                            <h2 className='font-bold text-[14px]'>Children</h2>
                                            <div className='flex flex-row gap-4'>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => minusPassengers('children')}>-</button>
                                                <p className='font-bold text-[14px] text-[#4d46fa]'>{passengers.children}</p>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => plusPassengers('children')}>+</button>
                                            </div>
                                        </div>

                                    </div>
                                </div >
                            }

                        </div>
                        <div>
                            <select name="class" id="class" className='font-bold  ' >
                                <option value="business">Business Class</option>
                                <option value="economy">Economy Class</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className='flex justify-between relative'>
                            <div className="w-[300px] h-[100px] relative" onClick={() => setOpenAddressFrom(!openAddressFrom)}>
                                <div className=" w-[300px] h-[100px] top-0 left-0 bg-white rounded-[12px] border-2 border-solid border-[#0000001a] p-5 cursor-pointer">
                                    <h2 className="opacity-50 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[12px] tracking-[1.20px] leading-[normal]">
                                        FROM
                                    </h2>
                                    <h1 className="[font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-[#4d46fa] text-[24px] tracking-[0] leading-[normal] mt-1">
                                        {addressFrom.province}
                                    </h1>
                                    <p className=" [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] tracking-[0] leading-[normal] mt-1">
                                        {addressFrom.country}
                                    </p>
                                </div>
                                <div className='w-[27px] h-[60px] absolute top-[20%] rounded-l-full right-0 bg-white border-2 border-r-0 z-10'></div>
                            </div>
                            {openAddressFrom &&
                                <div ref={fromModal} className='absolute top-[100%] left-0 w-[300px] h-[200px] bg-white rounded-[12px] shadow-[0px_4px_30px_#4d46fa1a] z-50'>

                                    <div className='p-8'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => setOpenAddressFrom(!openAddressFrom)}>Done</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between gap-4 mt-8'>
                                            <div className='flex gap-2'>
                                                <h1 className='font-bold text-[20px]'>From</h1>
                                            </div>
                                            <div className='flex flex-row gap-4'>
                                                <select name="province" id="province" className='font-bold' onChange={(e) => setAddressFrom(JSON.parse(e.target.value))}>
                                                    <option value='{"province":"Da Nang","country":" Quang Nam, Viet Nam"}'>Da Nang</option>
                                                    <option value='{"province":"Ha Noi","country":"Viet Nam"}'>Ha Noi</option>
                                                    <option value='{"province":"Ho Chi Minh","country":"Viet Nam"}'>Ho Chi Minh</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            }
                            <div className=' items-center flex min-w-[25px]' onClick={() => swapAddress()}>
                                <Image src={changeIcon} alt='icon'></Image>
                            </div>
                            <div className="w-[300px] h-[100px] relative" onClick={() => setOpenAddressTo(!openAddressTo)}>
                                <div className=" w-[300px] h-[100px] top-0 left-0 bg-white rounded-[12px] border-solid border-primary border-2 p-5 pl-12 cursor-pointer" >
                                    <h2 className="opacity-50 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[12px] tracking-[1.20px] leading-[normal]">
                                        TO
                                    </h2>
                                    <h1 className="[font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-[#4d46fa] text-[24px] tracking-[0] leading-[normal] mt-1">
                                        {addressTo.province}
                                    </h1>
                                    <p className=" [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] tracking-[0] leading-[normal] mt-1">
                                        {addressTo.country}
                                    </p>
                                </div>
                                <div className='w-[27px] h-[60px] absolute top-[20%] rounded-r-full -left-0 bg-white border-2 border-l-0 border-primary z-10'></div>
                            </div>
                            {openAddressTo &&
                                <div ref={toModal} className='absolute top-[100%] right-0 w-[300px] h-[200px] bg-white rounded-[12px] shadow-[0px_4px_30px_#4d46fa1a] z-50'>
                                    <div className='p-8'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <button className='font-bold text-[14px] text-[#4d46fa]' onClick={() => setOpenAddressTo(!openAddressTo)}>Done</button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between gap-4 mt-8'>
                                            <div className='flex gap-2'>
                                                <h1 className='font-bold text-[20px]'>To</h1>
                                            </div>
                                            <div className='flex flex-row gap-4'>
                                                <select name="province" id="province" className='font-bold' onChange={(e) => setAddressTo(JSON.parse(e.target.value))}>
                                                    <option value='{"province":"Da Nang","country":" Quang Nam, Viet Nam"}'>Da Nang</option>
                                                    <option value='{"province":"Ha Noi","country":"Viet Nam"}'>Ha Noi</option>
                                                    <option value='{"province":"Ho Chi Minh","country":"Viet Nam"}'>Ho Chi Minh</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            }
                        </div>
                        <div className="w-[530px] h-[100px]">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <div className=" w-[530px] h-[100px] bg-white rounded-[12px] border border-solid border-[#0000001a] grid grid-flow-col grid-cols-2 p-4" >

                                    <div>

                                        <div className="relative pr-5">
                                            <h2 className="opacity-50 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[12px] tracking-[1.20px] leading-[normal] uppercase">
                                                Departure
                                            </h2>
                                            <DatePicker
                                                value={dayjs(dateFrom)}
                                                onChange={(newValue) => setDateFrom(newValue.$d)}
                                                minDate={dayjs(new Date())}
                                                sx={{
                                                    // bgcolor: 'red'
                                                    width: '85%',
                                                    displayPrint: 'none',
                                                    '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                                        border: 'none'
                                                    },
                                                    color: '#4d46fa',
                                                    fontSize: '20px',
                                                    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                                                        fontSize: '24px',
                                                        fontWeight: 'bold',
                                                        color: '#4d46fa',
                                                        padding: '2px'
                                                    },
                                                    '& .css-i4bv87-MuiSvgIcon-root': {
                                                        color: '#4d46fa',
                                                    }
                                                }}
                                            />

                                            <div className='flex gap-2 cursor-pointer'>
                                                <div onClick={() => {
                                                    if (dateFrom > new Date()) {
                                                        setDateFrom(new Date(dateFrom.setDate(new Date(dateFrom.getDate() - 1))))
                                                    }
                                                }}
                                                    className="opacity-40 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] tracking-[0] leading-[normal]"
                                                >Prev</div>
                                                <div onClick={() => {
                                                    setDateFrom(new Date(dateFrom.setDate(new Date(dateFrom.getDate() + 1))))
                                                    setDateTo(dateFrom)
                                                }} className="opacity-40 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] tracking-[0] leading-[normal]">Next</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div> <div className="relative pr-5 " >
                                        <h2 className="opacity-50 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[12px] tracking-[1.20px] leading-[normal] uppercase">
                                            return
                                        </h2>
                                        <DatePicker
                                            value={dayjs(dateTo)}
                                            onChange={(newValue) => setDateTo(newValue.$d)}
                                            minDate={dayjs(dateFrom)}
                                            sx={{
                                                // bgcolor: 'red'
                                                width: '85%',
                                                displayPrint: 'none',
                                                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                                    border: 'none'
                                                },
                                                color: '#4d46fa',
                                                fontSize: '20px',
                                                '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                                                    fontSize: '24px',
                                                    fontWeight: 'bold',
                                                    color: '#4d46fa',
                                                    padding: '2px'
                                                },
                                                '& .css-i4bv87-MuiSvgIcon-root': {
                                                    color: '#4d46fa',
                                                }
                                            }}
                                        />
                                        <div className='flex gap-2 cursor-pointer'>
                                            <div onClick={() => {
                                                if (dateTo > dateFrom) {
                                                    setDateTo(new Date(dateTo.setDate(new Date(dateTo.getDate() - 1))))
                                                }
                                            }
                                            }
                                                className="opacity-40 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] tracking-[0] leading-[normal]"
                                            >Prev</div>
                                            <div onClick={() =>
                                                setDateTo(new Date(dateTo.setDate(new Date(dateTo.getDate() + 1))))
                                            }
                                                className="opacity-40 [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold text-black text-[14px] tracking-[0] leading-[normal]"
                                            >Next</div>
                                        </div>

                                    </div>
                                    </div>
                                </div>
                            </LocalizationProvider>
                        </div>

                    </div>
                    <div className='w-full flex justify-end cursor-pointer' onClick={() => { router.push('/flight-schedule') }}>
                        <div className=" w-[245px] h-[60px] bg-primary rounded-[12px] flex items-center justify-between mt-4 end-0 p-6">
                            <div className="  font-semibold text-white text-[18px] tracking-[0] leading-[normal] ">
                                Search Flights
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="white" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z" /></svg>                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default SearchFlightsCard
