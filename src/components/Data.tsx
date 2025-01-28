import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Data(){
    return(
        <>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-white h-auto lg:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8 md:py-0">
  <div className="w-full md:w-1/2 text-center md:text-left px-4">
    <h1 className="text-[#222222] font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
    {`100% your data`}
    </h1>
    <p className="text-[#222222] mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
    {`The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them. `}
    </p>
    <button className="bg-[#4F9CF9] px-6 py-2 md:px-6 md:py-4 rounded-md text-white font-semibold flex items-center gap-2 hover:shadow-lg">
      Read More
      <FaArrowRight />
      </button>
  </div>
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      className="max-w-full h-auto"
      src="/img/p1.png"
      alt=""
      width={824}
      height={529}
    />
  </div>
</div>

        </>
    )
}