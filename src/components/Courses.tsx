import Image from "next/image";
import web from "/public/pfunda.jpg";
import web1 from "/public/web2.jpg";
import web2 from "/public/earn.jpg";
import ai from "/public/AI.jpg";
import metav from "/public/metaverse.jpg";
import cloud from "/public/cloudComputing.jpg";
import iot from "/public/iot.jpg";
import genom from "/public/genomics.jpg";
import netw from "/public/automation.jpg";

function Courses() {
  return (
    <div className='mb-10'>
      <div className=" h-[400px] flex flex-col gap-8">
        <h1 className="text-[36px] text-red-600 font-bold px-10 mt-8">
          Core Courses Sequence
        </h1>
        <div className="core-courses flex gap-10 px-8">
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={web}
              alt="p-fundamental"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">
              Programming Fundamentals
            </h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={web1}
              alt="web2"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">Web2 Using NextJs</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={web2}
              alt="earn-as"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">Earn as You Learn</h1>
          </div>
        </div>
      </div>
      <div className=" h-[400px] flex flex-col gap-8">
        <h1 className="text-[36px] text-red-600 font-bold px-10 mt-8">
          Advanced Courses
        </h1>
        <div className="core-courses flex gap-10 px-8">
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={ai}
              alt="Ai"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">
              Artificial Intelligence
            </h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={metav}
              alt="metaverse"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">Web3 and Metaverse</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={cloud}
              alt="cloud-native"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">Cloud Native Computing</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={iot}
              alt="IoT"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">
              Ambient Computing and IoT
            </h1>
          </div>
        </div>
      </div>
            
         <div className="flex gap-10 px-8 py-6">
         <div className="flex flex-col gap-4 justify-center items-center w-[300px] h=[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={genom}
              alt="Genomics"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">Genomics and <br/>Bioinformatics</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[300px] h-[500px] shadow-slate-500 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={netw}
              alt="web2"
              width={217}
              height={145}
              className="w-[300px] rounded-tl-lg rounded-tr-lg"
            />
            <h1 className="text-xl text-center mb-6">Network Programability and Automation</h1>
          </div>          
        </div>
      
    </div>
  );
}

export default Courses;
