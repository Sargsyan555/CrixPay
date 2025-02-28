import ServiceCard from "./ServiceCart";

const Services = () => {
  return (
    <div id="services" className="w-full relative flex flex-col items-center justify-center py-20">
      <h3 className="pb-20 font-roboto font-bold text-4xl leading-[75px] text-center tracking-wide uppercase text-white">
        Services
      </h3>
      <div className="absolute left-0 top-1/4">
        <div className="left-0 flex">
          <div
            className="w-48 h-48 bg-gradient-to-r  transform -translate-x-1/2 "
            style={{
              background: "rgba(0, 215, 203, 0.7)",
              filter: "blur(90.7882px)",
            }}
          ></div>
          <div
            className="w-48 h-48 bg-gradient-to-r left-0  bottom-0 "
            style={{
              background: "rgba(4, 240, 251, 0.7)",
              filter: "blur(90.7882px)",
            }}
          ></div>
        </div>

        <div
          className="w-48 h-48 bg-gradient-to-r left-0  bottom-0 "
          style={{
            background: "rgba(6, 79, 161, 1)",
            filter: "blur(90.7882px)",
          }}
        ></div>
      </div>
      <div
        className="w-24 h-48  absolute top-1/4 right-0 transform -translate-x-1/2"
        style={{
          background: "rgba(6, 79, 161, 1)",
          filter: "blur(90.7882px)",
        }}
      ></div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ServiceCard
          iconClass="icon-fi_3159305"
          title="Mobile app development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-fi_3159274"
          title="Website development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-fi_2010990"
          title="Software development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-fi_7790559"
          title="Blockchain"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-fi_3159310"
          title="UI/Ux Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-Lesson"
          title="IT Lessons"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-fi_1067256"
          title="SEO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <ServiceCard
          iconClass="icon-fi_2222414"
          title="SMM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
      </div>
    </div>
  );
};

export default Services;
