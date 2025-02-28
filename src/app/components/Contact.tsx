const Contact = () => {
  return (
    <div className="relative" id="contact">
      <div className="absolute left-0 top-1/4 z-[-1]">
        <div
          className="w-48 h-48 bg-gradient-to-r left-30  bottom-0 "
          style={{
            background: "rgba(4, 240, 251, 1)",
            filter: "blur(90.7882px)",
          }}
        ></div>
        <div
          className="w-24 h-48  absolute top-1/4 right-0 transform -translate-x-1/2"
          style={{
            background: "rgba(6, 79, 161, 0.9)",
            filter: "blur(90.7882px)",
          }}
        ></div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row py-10 ">
        <div className="w-full  m-auto md:w-1/2  space-y-5 flex flex-col ">
          <h1 className="font-roboto ] font-bold sm:text-[64px] text-[32px] leading-[80px] tracking-[0.04em] uppercase text-white">
            Do You Have Any Questions?
          </h1>
          <div className="md:w-2/3 md:py-6">
            <p className="font-normal text-[16px] leading-[24px] tracking-[0.01em] text-[#CBCBCB]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="space-y-4">
            <div className=" font-roboto font-semibold text-[18px] leading-[21px] tracking-[0.04em] uppercase text-white">
              Your Company Name
            </div>

            <div className=" font-roboto ] font-normal text-[16px] leading-[22px] tracking-[0.01em] text-[#CBCBCB]">
              Orbely 50
            </div>

            <div className=" font-roboto  font-normal text-[16px] leading-[22px] tracking-[0.01em] text-[#CBCBCB]">
              374 55 11 12 12
            </div>
          </div>
        </div>

        {/* Second Part (Form) */}
        <div className="w-full lg:w-1/2 w-full space-y-5p-6 rounded-lg flex flex-col justify-between items-center">
          <h2 className="font-roboto font-bold text-3xl text-white mb-6">
            Contact Us
          </h2>

          {/* Form */}
          <form className="space-y-4 w-full">
            {/* Full Name */}
            <div>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full p-3 bg-[#031D23] text-white border  border-[rgba(4,240,251,0.15)] rounded-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-3 bg-[#031D23] text-white border border-[rgba(4,240,251,0.15)] rounded-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Company Name */}
            <div>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name"
                className="w-full p-3 bg-[#031D23] text-white border border-[rgba(4,240,251,0.15)] rounded-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Country */}
            <div>
              <input
                type="text"
                id="country"
                placeholder="Country"
                className="w-full p-3 bg-[#031D23] text-white border border-[rgba(4,240,251,0.15)] rounded-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Comment */}
            <div>
              <textarea
                id="comment"
                placeholder="Your Message"
                className="w-full h-30 p-3 bg-[#031D23] text-white border border-[rgba(4,240,251,0.15)] rounded-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="  bg-[#04F0FB] text-black text-[16px] font-roboto font-bold text-center uppercase tracking-[0.04em] rounded-sm py-3 px-10"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
