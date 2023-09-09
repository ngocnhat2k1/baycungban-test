import Header from '@/components/header';
import background from '../public/background.png'
import Image from "next/image";
import SearchFlightsCard from '@/components/searchFlightsCard';


export default function Home() {
  return (
    <>
      <Image alt='background' src={background} className='absolute -z-10 top-0'></Image>
      <div className='w-full mt-36 max-w-[1230px]'>
        <h1 className='text-black text-[72px] font-extralight leading-[50px]'>Hello</h1>
        <h1 className='text-black text-[72px] font-extralight'>Where are</h1>
        <h1 className='text-black text-[72px] font-extralight leading-[50px]'>you <strong className='text-primary'>flying</strong> to ...</h1>
      </div>
      <SearchFlightsCard></SearchFlightsCard>
      <div className='py-24'></div>
    </>
  )
}
