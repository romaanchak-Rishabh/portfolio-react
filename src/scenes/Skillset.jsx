import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import "../skillset.css";

const Skillset = () => {
    return (
        <section id="skillset" className=" pt-20 md:pt-40 pb-24 section flex flex-col items-center">
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
                        S<span className="text-red">KILL</span>SET
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
                <p className="mt-8 mb-1 ">
                A powerful skillset is the foundation for creating innovative and impactful solutions that drive business success in the digital world, and I'm equipped with a few.
                </p>
            </motion.div>

            <div className="wall">
                <div className="v-boxes">
                <div className="box">
                    <span className="tooltip">HTML</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-html5-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">CSS</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-css3-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    </div>        
                </div>
                <div className="box">
                    <span className="tooltip">JavaScript</span>
                    <div className="box-face">
                    <div className="box-text">
                        <i className="devicon-javascript-plain"></i>
                    </div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">Python</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-python-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    </div>
                </div>
                </div>
                <div className="v-boxes second">
                <div className="box">
                    <span className="tooltip">Node</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-nodejs-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">ReactJs</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-react-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">Tailwind</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-tailwindcss-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    </div>
                </div>
                </div>
                <div className="v-boxes third">
                <div className="box">
                    <span className="tooltip">C</span>
                    <div className="box-face">
                    <div className="box-text">
                    <i className="devicon-c-plain"></i>
                    </div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <span className="tooltip">C++</span>
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-cplusplus-plain"></i></div>
                    </div>
                    <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    </div>
                </div>
                </div>
                <div className="v-boxes forth">
                <div className="box link">
                    <div className="box-face">
                    <div className="box-text"><i className="devicon-github-original"></i></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Skillset;