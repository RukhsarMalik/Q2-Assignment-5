import Image from "next/image";

export default function Try(){
    return(
        <>
        <div className="flex justify-center items-center md:h-[705px] text-center bg-[#043873] h-auto w-full md:pt-[140px] md:pb-[32px] md:pl-[220px] md:pr-[220px] py-12">
            <div className="w-[80%] px-8 md:w-[608px] md:h-[533px]">
                <h1 className="text-white  text-2xl lg:text-[72px] tracking-[-2%] leading-[87.14px]  font-semibold">
                Try Whitepace today
                </h1>
                <p className="text-white mt-4 ">
                    {`Get started for free.`}
                </p>
                <p className="text-white mb-4">
                    {`Add your whole team as your needs grow.`}
                </p>
                <button className="bg-[#4F9CF9] px-8 py-2 rounded-md text-white font-semibold">Try Taskey free</button>
            <p className="text-white mt-4 mb-4">
                {`On a big team? Contact sales`}
                </p>
            <div className="flex justify-center gap-8 items-center text-white mt-4">

            <Image
            src="/img/icons/apple.png"
            alt="icons"
            width={60}
            height={60}
            className="text-white w-12 md:w-[60px]"
            />

            <Image
            src="/img/icons/window.png"
            alt="icons"
            width={60}
            height={60}
            className="text-white w-12 md:w-[60px]"
            />

            <Image
            src="/img/icons/android.png"
            alt="icons"
            width={60}
            height={60}
            className="text-white w-12 md:w-[60px]"
            />
            </div>
            </div>
        </div>
        </>
    )
}