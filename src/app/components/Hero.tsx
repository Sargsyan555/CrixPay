import Image from "next/image";

const BusinessSolutions = () => {
  return (
    <div id="businessSolutions"  className="flex flex-col relative text-center py-11 mt-[96px]">
      <h2 className="font-roboto font-bold md:text-[96px] text-center text-white sm:text-[48px]">
        SOFTWARE SOLUTIONS FOR
        <span className="block my-9"> YOUR BUSINESS</span>
      </h2>

      {/* Էլիպսերը գտնվում են այստեղ */}
      <div
        className="absolute animate-move z-0" 
        style={{
          zIndex: -1,
          background: "rgba(6, 79, 161, 1)",
          filter: "blur(90.7882px)",
        }}
      >
        <div
          className="w-48 h-48 bg-gradient-to-r top-0 left-1/2 transform -translate-x-1/2 z-0"  
          style={{
            background: "rgba(0, 215, 203, 1)",
            filter: "blur(90.7882px)",
          }}
        ></div>
        <div
          className="w-48 h-48 bg-gradient-to-r left-30 bottom-0 z-0"  
          style={{
            background: "rgba(4, 240, 251, 1)",
            filter: "blur(90.7882px)",
          }}
        ></div>
      </div>

      {/* Բլուրը վերևում */}
      <div
        className=" w-24 h-48 absolute top-1/4 right-0 transform -translate-x-1/2 z-10"  
        style={{
          background: "rgba(4, 240, 251, 1)",
          filter: "blur(90.7882px)",
        }}
      ></div>

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
