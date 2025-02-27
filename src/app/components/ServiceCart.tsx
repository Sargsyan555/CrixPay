import React from 'react';

interface ServiceCardProps {
  iconClass: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconClass, title, description }) => {
  return (
    
    <div className="relative z-1 bg-[#030D23]/50 border border-[#04F0FB]/15 backdrop-blur-sm rounded-sm p-6 space-y-4">
      <div className="absolute w-1/6 top-0 left-1/12 border-2 border-[#04F0FB]"></div>

      <div className="w-[60px] h-[60px] border border-[#04F0FB]/15 backdrop-blur-sm rounded-sm flex justify-center items-center">
        <i className={iconClass}></i>
      </div>

      <h3 className="font-roboto font-semibold text-white text-xl leading-5 tracking-wide uppercase">
        {title}
      </h3>

      <p className="font-roboto font-normal text-[#CBCBCB] text-base leading-6 tracking-[0.01em]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
