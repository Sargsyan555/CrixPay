import Image from "next/image";

const Solutions = () => {
  return (
    <div id="solutions" className="container mx-auto text-center pt-20">
      <h2 className="font-roboto font-bold text-6xl text-white mb-4">
        SOLUTIONS
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="flex-1 pr-5">
          <Image
            src={"/Frame3.png"}
            alt={"esim"}
            width={1200}
            height={800}
            layout="responsive"
          />
          <div className="text-left">
            <h3 className="text-white font-bold py-3 text-2xl font-roboto">
              Project one CrixPay
            </h3>
            <p className="text-gray-400 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="text-[#04F0FB] font-semibold hover:underline focus:outline-none pt-5">
              SEE DEMO {">"}
            </button>
          </div>
        </div>

        <div className="flex-1 pl-5">
          <Image
            src={"/Frame3.png"}
            alt={"esim"}
            width={1200}
            height={800}
            layout="responsive"
          />
          <div className="text-left">
            <h3 className="text-white font-bold py-3 text-2xl font-roboto">
              Project one CrixPay
            </h3>
            <p className="text-gray-400 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="text-[#04F0FB] font-semibold hover:underline focus:outline-none pt-5">
              SEE DEMO {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
