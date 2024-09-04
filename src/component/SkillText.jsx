import "../css/SkillText.css";
import { motion } from "framer-motion";

export default function SkillText ({close, skill}) {
    return (
        <motion.div 
        className="SkillText"
        initial={{ opacity: 0}}
                    whileInView={{
                        opacity: 1,
                    transition: { duration: 0.5 },
                    }}
        >
            <div className="close"><div onClick={close}>✕</div></div>
            <div className="main">
                <div className="skillImg">
                    <div><img src={skill.img}/></div>
                    <p>{skill.name}</p>
                </div>
                <div className="skillDes">
                <div dangerouslySetInnerHTML={{ __html: skill.description }} />
                </div>
            </div>
        </motion.div>
    )
}
