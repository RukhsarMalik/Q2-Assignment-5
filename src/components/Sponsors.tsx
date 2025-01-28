
import Image from "next/image";
export default function Sponsors(){
    return(
        <>
        <div className="bg-white w-full h-auto py-8 ">
            <h1 className="text-black text-center text-[36px] font-bold my-4 lg:text-[70px]">Our sponsors</h1>
            <div className="flex flex-col mt-4 md:mt-8 md:flex-row justify-between items-center gap-14 p-8 py-10">
            <Image
                className="cursor-pointer"
                src="/img/logo/apple.png" 
                alt="apps"
                width={55}
                height={68}
                 />
                 <Image
                className="cursor-pointer"
                src="/img/logo/microsoft.png" 
                alt="apps"
                width={287}
                height={62}
                 />
                <Image
               className="cursor-pointer"
               src="/img/logo/slack.png" 
               alt="apps"
               width={280}
               height={70}
                />
                 <Image
                className="cursor-pointer"
                src="/img/logo/google.png" 
                alt="apps"
                width={211}
                height={71}
                 />
            </div>
        </div>
        </>
    )
}