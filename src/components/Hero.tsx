import Image from 'next/image';
import governor from '/public/governor.png';

const Hero = () => {
  return (
    <div className="container">
            <div className="bg-custom" >    
    <div className="flex text-4xl text-red-600 my-[30px] font-bold gap-[50px] h-[100vh] mt-[80px]">
      <div className="main flex flex-col mt-24 ml-11 w-[50%]">
        <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
          Governor Sindh
        </h1>
        <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
          Kamran Khan Tessori
        </h1>
        <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-bold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
          Certified Cloud
          <br />
          Applied Generative AI
          <br />
          Engineer (GenEng)
        </h1>
        <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">
          Earn up to $5,000 / month
        </p>
        <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">
          Now admissions are open in Hyderabad
        </p>
        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
          <a className="w-full md:w-auto" href="/apply">
            <button className="w-full rounded-md bg-red-600 py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
              APPLY NOW
            </button>
          </a>
          <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
            <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
              <div className="w-40 font-extrabold">562,143</div>
            </div>
            <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">
              Accepted Applications
            </div>
          </div>
        </div>
      </div>
      
      <div className='relative left-[100px] w-[50%] mt-4'>
        <Image
        src={governor}
        alt="governor-sindh"
        className='h-[625px] w-[100%]'/>
    </div>
  </div>  
  </div>
    </div>
  )
}

export default Hero