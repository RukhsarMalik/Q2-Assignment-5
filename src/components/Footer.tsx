import Image from "next/image";
export default function Footer() {
    return (
   
       
        <div className="bg-[#043873] w-full h-full flex flex-col ">
         
           {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between  md:pt-[140px] md:pb-[32px] md:ml-[220px] md:mr-[220px] px-6 md:px-12 py-8 text-sm bg-[#043873] text-white">
          <div className="flex-col w-full md:w-40">
            <div className="flex gap-2">
              <Image
                src="/img/logo/logo.png"
                alt="Logo"
                width={191}
                height={34}
              />
            </div>
            <p className="mt-2">
            {`Whitepace was created for the new ways we live and work. We make a
            better workspace around the world.`}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-auto md:gap-[15px]">
            <h1 className="font-bold text-[18px] py-1 ">Product</h1>
            <ul className="text-[16px] md:space-y-[15px]">
              <li className="cursor-pointer">Overview</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Customer Stories</li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-auto md:gap-[15px]">
            <h1 className="font-bold text-[18px] py-1 gap-[15px]">Resources</h1>
            <ul className="text-[16px] md:space-y-[15px]">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-auto md:gap-[15px]">
            <h1 className="font-bold text-[18px] py-1">Company</h1>
            <ul className=" text-[16px] md:space-y-[15px]">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
          <div className="w-full md:w-48 flex flex-col gap-[15px]">
            <h1 className="font-bold py-1 text-[28px]">Try it Today</h1>
            <p>
              {`Get started for free. Add your whole team as your needs grow.`}
            </p>
            <button className="bg-[#4F9CF9] px-4 py-2 rounded-md mt-2">
              Start Today
            </button>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row bg-[#043873] text-white justify-start md:pt-[140px] md:pb-[32px] md:ml-[220px] md:mr-[220px] px-6  py-4 gap-4 md:gap-8 items-center">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-12">
            <p className="flex items-center">
              <i className="fa fa-internet-explorer" aria-hidden="true"></i>{" "}
              English
            </p>
            <li>{`Terms & privacy`}</li>
            <li>Security</li>
            <li>Status</li>
          </ul>
          <p className="text-center md:text-left">
            <i className="fa fa-copyright" aria-hidden="true"></i> {`2024 Copyrights
            rukhsarmalik`}
          </p>
        </div>
        </div>
    
    );
  }
  