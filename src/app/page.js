import Header from '@/components/header';
import background from '../public/background.png'
import Image from "next/image";
import SearchFlightsCard from '@/components/searchFlightsCard';


export default function Home() {
  return (
    <>
      <Image alt='background' src={background} className='absolute -z-10 top-0 hidden sm:block'></Image>
      <div className='w-full lg:mt-36 md:mt-12 lg:max-w-[1230px] md:max-w-[800px] xs:max-w-md max-w-xs hidden sm:block'>
        <h1 className='text-black lg:text-[72px] md:text-[52px] font-extralight leading-[50px]'>Hello</h1>
        <h1 className='text-black lg:text-[72px] md:text-[52px] font-extralight'>Where are</h1>
        <h1 className='text-black lg:text-[72px] md:text-[52px] font-extralight leading-[50px]'>you <strong className='text-primary'>flying</strong> to ...</h1>
      </div>
      <SearchFlightsCard></SearchFlightsCard>
      <div className='py-24'></div>
    </>
  )
}
