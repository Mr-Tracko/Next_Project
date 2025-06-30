import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import Whychooseus from "./components/whychooseus";

export default function Home() {
  return (
    <>
    <h1 className="text-2xl text-center"></h1>
    <HeroSection />
    <FeaturedCourses/>
    <Whychooseus/>
    </>
  );
}
