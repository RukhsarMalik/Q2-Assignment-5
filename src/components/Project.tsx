import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Products(){
    return(
        <>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-white h-auto lg:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8 md:py-0">
  <div className="w-full md:w-1/2 text-center md:text-left px-4">
    <h1 className="text-[#222222] font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
      Project Management
    </h1>
    <p className="text-[#222222] mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
      {`Images, videos, PDFs and audio files are supported. Create math
      expressions and diagrams directly from the app. Take photos with the
      mobile app and save them to a note.`}
    </p>
    
    <button className="bg-[#4F9CF9] px-6 py-2 md:px-8 md:py-4 rounded-md text-white font-semibold flex items-center gap-2 hover:shadow-lg">
      Get Started
      <FaArrowRight />
    </button>
  </div>
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      className="max-w-full h-auto"
      src="/img/container.png"
      alt=""
      width={824}
      height={529}
    />
  </div>
</div>

        </>
    )
}