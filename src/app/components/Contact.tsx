const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row py-10">
      {/* First Part */}
      <div className="w-full md:w-1/2 space-y-5 flex flex-col justify-around">
        <h1 className="font-roboto font-bold text-4xl leading-[80px] tracking-wide uppercase text-white mb-4">
          Do You Have Any Questions?
        </h1>
        <p className="font-roboto font-normal text-base leading-6 tracking-tight text-[#CBCBCB] mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <div>
          <h4 className="font-roboto font-semibold text-sm leading-[21px] tracking-wide uppercase text-white mb-2">
            Company Name
          </h4>
          <p className="font-roboto font-normal text-base leading-[22px] tracking-[0.01em] text-[#CBCBCB] mb-2">
            Address: Orbely 50
          </p>
          <p className="font-roboto font-normal text-base leading-[22px] tracking-[0.01em] text-[#CBCBCB]">
            Telephone: 374 55 11 12 12
          </p>
        </div>
      </div>

      {/* Second Part (Form) */}
      <div className="w-full md:w-1/2 space-y-5p-6 rounded-lg flex flex-col justify-between">
        <h2 className="font-roboto font-bold text-3xl text-white mb-6">
          Contact Us
        </h2>

        {/* Form */}
        <form className="space-y-4">
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
              className="w-full p-3 bg-[#031D23] text-white border border-[rgba(4,240,251,0.15)] rounded-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
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
  );
};

export default Contact;
