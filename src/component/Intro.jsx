import "../css/Intro.css";
import { delay, motion } from "framer-motion";
import Lottie from "lottie-react";
import ScrollDown from "../scrolldown.json"; 

export default function Intro () {
    return (
        <div className="Intro section" >
            <motion.div
            initial={{ opacity: 0}}
            whileInView={{
                opacity: 1,
                zIndex:50,
            transition: { duration: 1 },
            }}
            >
            <motion.p
                className="portfolio"
                initial={{ opacity: 1}}
                whileInView={{
                opacity: 1,
                textShadow: "0.5vw 1vw 1vw rgb(0, 0, 0, 0.3)",
                transition: { duration: 1, delay: 1 }}}
             >
                Front-end<br/> porfolio
                </motion.p>
            </motion.div>
            <div 
            className="face">
                <img src="./images/intro.png"/>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    position: "absolute",
                    bottom: 0
                }}
                whileInView={{
                    opacity: 1,
                    zIndex:50,
                transition: { duration: 1, delay: 1 },
                position: "absolute",
                bottom: 0
                }}
                style={{width:"8vw"}}
            >
            <Lottie 
                animationData={ScrollDown}
                />
            </motion.div>
                             
        </div>
    )
}
