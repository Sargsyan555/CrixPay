const About = () => {
  return (
    <div
      id="about"
      className="relative  mx-auto my-[96px] p-8 flex justify-center w-full items-center "
    >
      <div className=" text-center container">
        <h2 className="font-roboto font-bold text-6xl text-white mb-4">
          ABOUT US
        </h2>
        <div
          className="w-48 h-48  absolute top-1/2 left-0 transform -translate-x-1/2"
          style={{
            background: "rgba(4, 240, 251, 1)",
            filter: "blur(90.7882px)",
          }}
        ></div>
        <p className="text-white mt-10 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure.
        </p>
        <div className="flex md:flex-row flex-col w-full justify-around  mt-30">
          <div>
            <p className="text-[#04F0FB] font-roboto font-bold text-[48px] leading-[56px] tracking-[0.04em] text-center uppercase">
              100
            </p>
            <p className="font-roboto font-bold text-[24px] leading-[28px] text-center tracking-[0.04em] uppercase text-white">
              Customers
            </p>
          </div>
          <div>
            <p className="text-[#04F0FB] font-roboto font-bold text-[48px] leading-[56px] tracking-[0.04em] text-center uppercase">
              30
            </p>
            <p className="font-roboto font-bold text-[24px] leading-[28px] text-center tracking-[0.04em] uppercase text-white">
              Partners
            </p>
          </div>
          <div>
            <p className="text-[#04F0FB] font-roboto font-bold text-[48px] leading-[56px] tracking-[0.04em] text-center uppercase">
              100
            </p>
            <p className="font-roboto font-bold text-[24px] leading-[28px] text-center tracking-[0.04em] uppercase text-white">
              Customers
            </p>
          </div>
          <div>
            <p className="text-[#04F0FB] font-roboto font-bold text-[48px] leading-[56px] tracking-[0.04em] text-center uppercase">
              100
            </p>
            <p className="font-roboto font-bold text-[24px] leading-[28px] text-center tracking-[0.04em] uppercase text-white">
              Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
