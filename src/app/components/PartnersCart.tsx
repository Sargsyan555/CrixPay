import React from "react";

interface PartnerCardProps {
  id: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ id }) => {
  return (
    id % 2 !== 0 ? 
    <div className="w-[220px] h-[220px] relative bg-[#030D23]/50 border border-[#04F0FB]/15 backdrop-blur-sm rounded-sm p-6 space-y-4 m-2">
      <div className="absolute w-1/6 top-0 left-1/6 border-2 border-[#04F0FB]">
      </div>
        <p className="text-white text-xs">ID: {id}</p>
    </div> : 
     <div className=" mt-[110px] w-[220px] h-[220px] relative bg-[#030D23]/50 border border-[#04F0FB]/15 backdrop-blur-sm rounded-sm p-6 space-y-4 m-2">
     <div className="absolute w-1/6 top-0 left-1/6 border-2 border-[#04F0FB]">
     </div>
       <p className="text-white text-xs">ID: {id}</p>
   </div> 

  );
};

export default PartnerCard;
