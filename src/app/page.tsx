import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";

export default function Home() {
  return (
    <>
    <h1 className="text-2xl text-center"></h1>
    <HeroSection />
    <FeaturedCourses/>
    </>
  );
}
