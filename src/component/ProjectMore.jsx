import "../css/ProjectMore.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { motion } from "framer-motion";
import { useState } from "react";


export default function ProjectMore({ data, onClose }) {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const showDetail = (skill) => {
        setSelectedSkill(skill === selectedSkill ? null : skill);
    };
    if (!data) return null; // 데이터가 없으면 아무것도 렌더링하지 않음
    
    return (
        <motion.div 
            className="ProjectMore"
            initial={{ opacity: 0}}
                    whileInView={{
                        opacity: 1,
                    transition: { duration: 0.5 },
                    }}
            >
            <div className="MoreIn">
                <div className="modalOverlay" onClick={onClose}></div>
                <div className="modalContent">
                    <div className="Button">
                        <a href={data.link} target="_blank" rel="noopener noreferrer" className="github"><img src="./images/githubB.png" alt="GitHub Link"/></a>
                        <a className="site"><img src="./images/link.png" alt="Site Link"/></a>
                        <button onClick={onClose}><p>✕</p></button>
                    </div>
                    <h2>{data.name}</h2>
                    <Swiper
                        spaceBetween={10} // 슬라이드 간의 간격
                        slidesPerView={1} // 한 번에 보여질 슬라이드 수
                        navigation // 화살표 네비게이션 활성화
                        pagination={{ clickable: true }} // 페이지 네비게이션 활성화
                        modules={[Navigation, Pagination]}
                    >
                        {data.img.map((img, id) => (
                            <SwiperSlide key={id}>
                                <img  src={img} alt={`${data.name} ${id}`} className="projectImage" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p>{data.about}</p>
                    <p><strong>기능</strong></p>
                    <p>{data.function}</p>
                    <p><strong>기술 및 언어</strong></p>
                    <div className="skillList">
                    {data.skills.name && data.skills.name.map((skill, index) => (
                            <div key={index} className="detailBtn">
                                <div className="skillName" onClick={() => showDetail(skill)}>
                                    <p>
                                        {skill}
                                    </p>
                                    <span class="material-symbols-outlined">
                                    {
                                        selectedSkill === skill ?  "arrow_drop_up" : "arrow_drop_down" 

                                    }
                                    </span>
                                </div>
                                
                                {selectedSkill === skill && (
                                    <p className="skillDetail">
                                        {data.skills.skillDetail[skill] || "No details available for this skill."}
                                    </p>
                                )}
                            </div>
                        ))}    
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
