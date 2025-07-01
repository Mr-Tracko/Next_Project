import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import Whychooseus from "./components/WhyChooseUs";
import MovingCards from "./components/MovingCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <h1 className="text-2xl text-center"></h1>
    <HeroSection />
    <FeaturedCourses/>
    <Whychooseus/>
    <MovingCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </>
  );
}
