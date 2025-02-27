import About from "./components/About";
import BusinessSolutions from "./components/BusinessSolutions";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <>
      <BusinessSolutions />
      <About />
      <hr className="w-full border-b-1 border-gray-300 my-8" />

      <Solutions />
      <hr className="w-full border-b-1 border-gray-300 my-8" />
      <Services />
      <Partners />
      <hr className="w-full border-b-1 border-gray-300 my-8" />
      <Feedback />
      <Contact />
    </>
  );
}
