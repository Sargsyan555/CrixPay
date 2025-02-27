import PartnerCard from "./PartnersCart";

const partnersData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
];

const Partners = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h3 className="pb-20 font-Roboto font-bold text-4xl leading-[75px] text-center tracking-wide uppercase text-white">
        Partners
      </h3>
      {/* Horizontal scroll container */}
      <div className="overflow-x-auto w-full pl-40">
        {/* Set the total width to accommodate two rows of PartnerCards */}
        <div className="flex flex-col w-max">
          {/* Render first row of PartnerCards */}
          <div className="flex flex-wrap w-full">
            {partnersData.slice(0, 10).map((partner) => (
              <PartnerCard key={partner.id} id={partner.id} />
            ))}
          </div>

          {/* Render second row of PartnerCards */}
          <div className="flex flex-wrap w-full">
            {partnersData.slice(10).map((partner) => (
              <PartnerCard key={partner.id} id={partner.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
