import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Extension() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[#043873] h-auto md:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Use as Extension
          </h1>
          <p className="text-white mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {` Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.`}
          </p>
          <button className="bg-[#4F9CF9] px-6 py-2 md:px-6 md:py-4 rounded-md text-white font-semibold flex items-center gap-2 hover:shadow-lg">
            Let's Go
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            className="max-w-full h-auto"
            src="/img/container.png"
            alt="Extension Screenshot"
            width={824}
            height={529}
          />
        </div>
      </div>
    </>
  );
}
