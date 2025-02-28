"use client";
import Image from "next/image";
import { useState } from "react";
// import { getAllFeedbacks } from "../lib/api";
export interface Feedbacks {
  id: number;
  full_name: string;
  position: string;
  image: string;
  feedback: string;
}

const feedbacks = [
  {
    id: 1,
    full_name: "John Doe",
    position: "CEO",
    image: "/user.png",
    feedback:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ",
  },
  {
    id: 2,
    full_name: "Jane Smith",
    position: "Marketing Manager",
    image: "/user.png",
    feedback:
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ",
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next feedback
  const nextFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous feedback
  const prevFeedback = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  // Check if feedbacks are available before rendering
  if (feedbacks.length === 0) {
    return <div>Loading...</div>; // Show loading while feedbacks are being fetched
  }

  return (
    <div className="w-full relative flex flex-col items-center justify-center py-20 bg-[#030D2380]">
      <h3 className="pb-20 font-Roboto font-bold text-4xl leading-[75px] text-center tracking-wide uppercase text-white">
        Clients Feedback
      </h3>
      <div className="absolute right-0 top-1/4">
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
            background: "rgba(6, 79, 161, 1)",
            filter: "blur(90.7882px)",
          }}
        ></div>
      </div>
      <div className="container flex flex-col md:flex-row justify-between">
        {/* Feedback card */}
        <div>
          <div className="w-[220px] h-[220px] relative bg-[#030D23]/50 border border-[#04F0FB]/15 backdrop-blur-sm rounded-sm p-6 space-y-4 m-2">
            <div className="absolute w-1/6 top-0 left-1/6 border-2 border-[#04F0FB] p-0 m-0"></div>
            <Image
              className="p=0"
              src={feedbacks[currentIndex].image}
              alt="Image description"
              layout="fill" 
              objectFit="cover"
            />
          </div>
          <p className="font-roboto font-semibold text-[18px] leading-[21px] tracking-[0.04em] text-white uppercase mt-5">
            {feedbacks[currentIndex].full_name}
          </p>
          <p className="text-[16px] leading-[19px] tracking-[0.01em] text-[#CBCBCB] font-roboto">
            Co-Founder of Crix Pay
          </p>
        </div>

        {/* Feedback text */}
        <div className="w-3/4 flex justify-center items-center">
          <p className="font-roboto font-normal text-[#CBCBCB] text-base leading-6 tracking-[0.01em] m-auto">
            {feedbacks[currentIndex].feedback}
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="container w-full flex justify-end space-x-4 mt-4">
        <button
          onClick={nextFeedback}
          className="text-[#04F0FB] font-bold text-2xl w-[40px] h-[40px] bg-[#030D23]/50 border border-[#04F0FB]/30 backdrop-blur-sm rounded-sm transform -scale-x-100 cursor-pointer"
        >
          &#8594;
        </button>
        <button
          onClick={prevFeedback}
          className="text-[#04F0FB] font-bold text-2xl w-[40px] h-[40px] bg-[#030D23]/50 border border-[#04F0FB]/30 backdrop-blur-sm rounded-sm transform -scale-x-100 cursor-pointer"
        >
          &#8592;
        </button>
      </div>
    </div>
  );
};

export default Feedback;
/* Ellipse 3 */


