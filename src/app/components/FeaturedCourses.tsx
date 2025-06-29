import { a } from "framer-motion/client"
import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
      id: number,
      title: string,
      slug: string,
      description: string,
      price: number,
      instructor: string,
      isFeatured: boolean,
}
//yha hmne sbka datatype define krdiaa (as per in typescript)

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course)=> course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div className="text-center">
                 <div className="tetx-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text:4xl">Learn with the best
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grids-cols-2 lg:grid-cols-3 gap-8 justify center">
                    {featuredCourses.map((course:Course) => (
                        <div key = {course.id} className="flex justify-center">
                            <BackgroundGradient>test</BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-6 py-3 rounded-xl border border-gray-700/60 text-gray-100 bg-gradient-to-r from-black-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 hover:border-gray-600 transition-all duration-400 font-medium shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1 backdrop-blur-sm">
                    View all courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
