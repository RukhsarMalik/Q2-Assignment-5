
export default function Work() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#043873] h-auto md:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8">

<div className="w-full flex flex-col items-center justify-center text-center lg:w-[60%]">
  <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[65px] font-semibold leading-tight md:whitespace-nowrap">
    {`Your work, everywhere you are`}
  </h1>
  <p className="text-[#FFFFFF] mt-2 mb-4 text-[18px]  md:text-base lg:text-lg leading-[30px]">
    {`Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!`}
  </p>
  <button className="bg-[#4F9CF9] px-6 py-2 md:px-8 md:py-2 rounded-md text-white font-semibold hover:font-bold">
    Try Taskey
  </button>
</div>

</div>

    </>
  );
}
