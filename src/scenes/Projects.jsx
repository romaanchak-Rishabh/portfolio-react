import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ProjectImg1 from "../assets/project-1.jpeg";
import ProjectImg2 from "../assets/project-2.jpeg";
import ProjectImg3 from "../assets/project-3.jpeg";
import ProjectImg4 from "../assets/project-4.jpeg";
import ProjectImg5 from "../assets/project-5.jpeg";
import ProjectImg6 from "../assets/project-6.jpeg";
import ProjectImg7 from "../assets/project-7.jpeg";


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

const Project = ( {title, Imgsrc} ) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
            </div>
            <img src={Imgsrc} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-36 pb-36 flex flex-col items-center">
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
                <Project title="Project 1" Imgsrc={ProjectImg1} />
                <Project title="Project 2" Imgsrc={ProjectImg2} />

                {/* ROW 2 */}
                <Project title="Project 3" Imgsrc={ProjectImg3} />
                <Project title="Project 4" Imgsrc={ProjectImg4} />
                <Project title="Project 5" Imgsrc={ProjectImg5} />

                {/* ROW 3 */}
                <Project title="Project 6" Imgsrc={ProjectImg6} />
                <Project title="Project 7" Imgsrc={ProjectImg7} />
                <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                    SMOOTH USER EXPERIENCE
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default Projects;