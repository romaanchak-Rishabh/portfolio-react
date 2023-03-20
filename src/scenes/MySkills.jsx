import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

import SkillsImg from "../assets/skills-image.png";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-10 md:mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: { opacity:0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                    Beyond technical expertise, I possess excellent communication and collaboration skills, enabling me to work effectively with cross-functional teams. My ability to think creatively and strategically allows me to approach problem-solving with a unique perspective, delivering innovative solutions that drive business success.
                    </p>
                </motion.div>

                <div className="mt-10 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                            <img 
                                className="z-10"
                                alt="profile"
                                src={SkillsImg}
                            />
                        </div>
                    ) : (
                        <img 
                            className="z-10"
                            alt="profile"
                            src={SkillsImg}
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mb-10 md:mb-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: { opacity:0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl">EXPERIENCE</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 text-justify">
                        10 months of Internship Experience(4 Intern certificates) as a Frontend Web Developer(ReactJs Dev to be more precise). Worked with various libraries of JS like axios, openStreetMaps, React-router and many styling frameworks like TailwindCSS, Bootstrap. My years of experience have equipped me with a deep understanding of the development process, from ideation to deployment, and everything in between.                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className="md:w-1/3 mb-10 md:mb-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden: { opacity:0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl">INNOVATIVE</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 text-justify">
                    As a developer, I strive to be innovative by constantly exploring new technologies and experimenting with different approaches to problem-solving. I am always looking for ways to improve user experiences, whether it's through creating more intuitive interfaces, faster page load times, or more efficient code.
                    </p>
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.4, duration:0.5}}
                    variants={{
                        hidden: { opacity:0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl">IMAGINATIVE</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5 text-justify">
                    As a developer, I believe that imagination is key to creating truly innovative and impactful solutions. I constantly challenge myself to think outside the box and approach problems from new and imaginative angles. By combining technical expertise with a creative mindset, I am able to bring fresh ideas to every project and create experiences that are both functional and engaging.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;