import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import ProjectImg1 from "../assets/project-13.jpeg";
import ProjectImg2 from "../assets/project-10.png";
import ProjectImg3 from "../assets/project-9.png";
import ProjectImg4 from "../assets/project-11.png";
import ProjectImg5 from "../assets/project-12.jpeg";
import ProjectImg6 from "../assets/project-8.png";
import ProjectImg7 from "../assets/project-14.jpeg";


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8},
    visible: { opacity: 1, scale: 1}
}

const Project = ( {title, Imgsrc, Placeholder} ) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-2 md:p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <>
            {isAboveSmallScreens ? (
                <motion.div variants={projectVariant} className="relative h-full w-full">
                    <div className={overlayStyles}>
                        <p className="text-2xl font-playfair">{title}</p>
                        <p className="mt-7">
                            {Placeholder}
                        </p>
                    </div>
                    <img src={Imgsrc} className="h-full" alt={projectTitle} />
                </motion.div>
            ) : (
                <div variants={projectVariant} className="relative my-2 md:my0">
                    <div className={overlayStyles}>
                        <p className="text-base md:text-2xl font-playfair">{title}</p>
                        <p className="text-xs mt-4 md:mt-7">
                            {Placeholder}
                        </p>
                    </div>
                    <img src={Imgsrc} alt={projectTitle} />
                </div>
            )}
        </>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-28 md:pt-36 pb-36 flex flex-col items-center">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: { opacity:0, y: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl ">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
                <p className="mt-5 mb-0">
                    Here's some of the ideas that I brought into life!
                    <br />
                    Click the projects to go to respective Project pages.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center items-center w-4/5">
            <motion.div
                className="sm:grid sm:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                variants={container}
            >
                {/* ROW 1 */}
                <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                    BEAUTIFUL USER INTERFACES
                </div>
                <a href="https://github.com/romaanchak-Rishabh/flip-the-script" target="_blank"><Project title="Flip-the-Script" Imgsrc={ProjectImg1} Placeholder="Leveraging a suite of cutting-edge technologies, including ReactJS, Quill, and Axios, I developed a full-stack social media website catering to the needs of both authors and readers. Boasting a range of features, including account management, a user feed, and administrative functionalities." /></a>
                <a href="https://github.com/romaanchak-Rishabh/Phontek" target="_blank"><Project title="Phontek" Imgsrc={ProjectImg2} Placeholder="I utilized a diverse range of advanced web development technologies, including ReactJS, OpenStreetMap, and Axios, to develop a fully functional and multipage web application for an ecommerce business specializing in technological products." /></a>

                {/* ROW 2 */}
                <a href="https://codepen.io/romaanchak-Rishabh/pen/jOmPwKv" target="_blank"><Project title="Vegan Store" Imgsrc={ProjectImg3} Placeholder="I developed a frontend website template for a small online food store, effectively showcasing a diverse range of dishes and providing essential information, including the business's address and contact details." /></a>
                <a href="https://github.com/romaanchak-Rishabh/weather-app" target="_blank"><Project title="Yoganta" Imgsrc={ProjectImg4} Placeholder="Throughout the course of my 3-month internship, I utilized ReactJS to develop a robust web application that boasted a number of key features, including a booking panel, an admin panel, and a real-time price section." /></a>
                <a href="https://github.com/romaanchak-Rishabh/VenusEdTech" target="_blank"><Project title="Venus Ed" Imgsrc={ProjectImg5} Placeholder="During an 18-hour intra-college Web Development Hackathon, I leveraged ReactJS to develop a multi-page website for an online education platform, which culminated in securing the second position in the competition." /></a>

                {/* ROW 3 */}
                <a href="https://github.com/romaanchak-Rishabh/Apple.com_Clone" target="_blank"><Project title="Apple.com Clone" Imgsrc={ProjectImg6} Placeholder="I successfully replicated the frontend of 'Apple.com', complete with full functionality and responsive design." /></a>
                <a href="https://github.com/romaanchak-Rishabh/flip-the-script" target="_blank"><Project title="Login protected To-do App" Imgsrc={ProjectImg7} Placeholder="I have developed a task management application using Javascript that incorporates secure login and logout features, ensuring optimal security for user data." /></a>
                <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                    SMOOTH USER EXPERIENCE
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default Projects;