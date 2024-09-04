import "../css/Project.css";
import { motion } from "framer-motion";
export default function Project ({post, onModal}) {
    return (
        <motion.div 
            className="Project" onClick={onModal}
            initial={{ opacity: 0, translateY: "50%" }}
                    whileInView={{
                        opacity: 1,
                        translateY: "30%",
                    transition: { duration: 1 },
                    }}
        >
            <div className="photo">
                <img src={post.img[0]}/>
                <div className="onPhoto">
                    <p>자세히 보기</p>
                    <a href={post.link}><img src="./images/github.png"/>GitHub</a>
                </div>   
            </div>
            <div className="text">
                <p className="name">{post.name}</p>
                <p className="about">{post.about}</p>
            </div>
        </motion.div>
    )
}
