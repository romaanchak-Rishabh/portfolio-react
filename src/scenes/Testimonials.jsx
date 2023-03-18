import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return (
        <section id="testimonials" className="pt-32 pb-16">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: { opacity:0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className="mx-auto font-playfair font-semibold text-4xl mb-5 text-red">
                    TESTIMONIALS
                </p>
                <LineGradient width="w-2/5" />
                <p className="mt-10">
                    Here's What People Are Saying About My Work.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
            <motion.div
                    className={`bg-blue ${testimonialsStyles} before:content-person1`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: { opacity:0, scale:0.8 },
                        visible: { opacity: 1, scale:1 }
                    }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-xl">Rishabh brought our project to life in ways we never thought possible.</p>
                </motion.div>
                <motion.div
                    className={`bg-red ${testimonialsStyles} before:content-person2`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden: { opacity:0, scale:0.8 },
                        visible: { opacity: 1, scale:1 }
                    }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-xl">Rishabh nailed it! Expert in tech and UX.</p>
                </motion.div>
                <motion.div
                    className={`bg-yellow ${testimonialsStyles} before:content-person3`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay:0.4, duration:0.5}}
                    variants={{
                        hidden: { opacity:0, scale:0.8 },
                        visible: { opacity: 1, scale:1 }
                    }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-xl">Rishabh is a true asset to any team.</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials;