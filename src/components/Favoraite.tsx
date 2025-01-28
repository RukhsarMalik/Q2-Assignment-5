import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Favoraite() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-[#043873] h-auto lg:h-[90vh] w-full md:px-8 xl:px-24 py-8 md:py-0">
        {/* Left Side: Image Section */}
        <div className="hidden md:flex justify-center w-full md:w-1/2">
          <Image
            className="max-w-full h-auto"
            src="/img/p3.PNG"
            alt="apps"
            width={824}
            height={529}
          />
        </div>

        {/* Right Side: Text Section */}
        <div className="w-full px-6 md:px-4 md:w-1/2">
          <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[72px] font-semibold leading-[87.14px]">
            Work with Your Favorite Apps Using Whitepace
          </h1>
          <p className="text-white mt-2 mb-4 text-[18px] md:text-base lg:text-lg leading-[30px]">
            {`Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.`}
          </p>
         <button className="bg-[#4F9CF9] px-6 py-2 md:px-6 md:py-4 rounded-md text-white font-semibold flex items-center gap-2 hover:shadow-lg">
            Read More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
