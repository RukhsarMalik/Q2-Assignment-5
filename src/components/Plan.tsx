import Image from "next/image";
export default function Plan() {
  return (
    <>
      <div className="bg-white w-full h-auto py-8 px-4">
        {/* Heading */}
        <h1 className="text-black text-center text-2xl font-bold my-4 lg:text-[40px] xl:text-[70px]">
          Choose Your Plan
        </h1>
        {/* Description */}
        <p className="mt-4 md:mt-8 text-[#212529] text-center text-sm md:text-base lg:text-lg">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, 
          <br />
          the right plan for you.
        </p>
        {/* Plans Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 py-10">
          {/* Plan 1 */}
          <Image
            className="cursor-pointer"
            src="/img/cards/pb3.png"
            alt="Plan 1"
            width={300}
            height={600}
          />
          {/* Plan 2 */}
          <Image
            className="cursor-pointer"
            src="/img/cards/pb1.png"
            alt="Plan 2"
            width={350}
            height={700}
          />
          {/* Plan 3 */}
          <Image
            className="cursor-pointer"
            src="/img/cards/pb2.png"
            alt="Plan 3"
            width={300}
            height={697}
          />
        </div>
      </div>
    </>
  );
}
