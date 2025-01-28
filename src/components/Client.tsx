
import Image from "next/image";
export default function Clients(){
    return(
        <>
        <div className="bg-white w-full h-auto py-8 ">
            <h1 className="text-black text-center text-2xl font-bold my-4 lg:text-[70px] leading-[84px]">What Our Clients Says</h1>
            <div className="flex flex-col md:flex-row justify-center lg:w-[1479px] md:h-[498px] items-center gap-8 p-8">
            <Image
                className="cursor-pointer"
                src="/img/client/c1.png" 
                alt="apps"
                width={360}
                height={498}
                 />
                 <Image
                className="cursor-pointer"
                src="/img/client/c2.png" 
                alt="apps"
                width={300}
                height={350}
                 />
                 <Image
                className="cursor-pointer"
                src="/img/client/c3.png" 
                alt="apps"
                width={300}
                height={350}
                 />
            </div>
        </div>
        </>
    )
}