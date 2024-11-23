import Image from 'next/image'
import pic1 from '/public/img1.jpg'
import pic2 from '/public/img2.jpg'
import pic3 from '/public/img3.jpg'


const MidSec = () => {
  return (
    <div className='flex flex-col gap-8 w-[100vw]'>
      <div className="data flex flex-col gap-6 w-[95%]">
        <h1 className="text-[36px] text-center text-red-600 font-bold">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className='text-xl text-justify px-6 mb-6'>
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>
      <div className="images flex justify-center gap-8 mb-6">
        <Image
        src={pic1}
        alt='image1'
        width={400}
        height={300}
        className='shadow-black shadow-2xl rounded-lg'
        />
        <Image
        src={pic2}
        alt='image2'
        width={400}
        height={300}
        className='shadow-black shadow-2xl rounded-lg'
        />
        <Image
        src={pic3}
        alt='image3'
        width={400}
        height={300}
        className='shadow-black shadow-2xl rounded-lg'
        />
      </div>
    </div>
  );
};

export default MidSec;
