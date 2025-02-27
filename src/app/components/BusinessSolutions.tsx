import Image from "next/image";

const BusinessSolutions = () => {
  return (
    <div className="flex flex-col text-center py-11 mt-[96px]">
      <h2 className="font-roboto font-bold md:text-[96px] text-center text-white sm:text-[48px]">
        SOFTWARE SOLUTIONS FOR
        <span className="block my-9"> YOUR BUSINESS</span>
      </h2>
      <div className="py-10">
        <button className="py-[18px] px-[56px] bg-[#04F0FB] text-black rounded-sm cursor-pointer font-roboto font-bold text-[16px] leading-[18.75px] tracking-[4%] text-center">
          Contact Us
        </button>
      </div>
      <div className="flex justify-center w-4/5 mx-auto border-custom border-t-custom-border border-r-custom-border border-l-custom-border border-b-transparent">
        <Image
          src={"/slider.png"}
          alt={"Description of image"}
          width={1200}
          height={800}
          // layout="responsive" // This ensures the image scales responsively
        />
      </div>
    </div>
  );
};
export default BusinessSolutions;
