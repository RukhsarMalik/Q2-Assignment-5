import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Customized() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-white text-[#222222] h-auto w-full px-6 md:px-8 xl:px-24 py-12">
        {/* Left Side: Image */}
        <div className="flex justify-center w-full md:w-1/2 py-2">
          <Image
            className="max-w-full h-auto"
            src="/img/container.png"
            alt="Customized Container"
            width={824}
            height={529}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Customise it to your needs
          </h1>
          <p className="mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {`Customise the app with plugins, custom themes, and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.`}
          </p>
           <button className="bg-[#4F9CF9] px-6 py-2 md:px-6 md:py-4 rounded-md text-white font-semibold flex items-center gap-2 hover:shadow-lg">
           Let&apos;s Go
              <FaArrowRight />
           </button>
        </div>
      </div>
    </>
  );
}
