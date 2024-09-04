import { useState } from "react";
import "../css/About.css";
import SkillText from "./SkillText";
import { motion } from "framer-motion";

export default function About() {
    const [activeTab, setActiveTab] = useState('about');
    const [selectedSkill, setSelectedSkill] = useState(null); // 선택된 기술 상태 관리

    const skills = {
        lang: [
            { name: "Javascript", img: "./images/javascript.png", 
                description: `
                1. Promises와 async/await을 활용하여 비동기 작업을 효율적으로 처리하고, 네트워크 요청이나 파일 읽기 같은 작업을 간편하게 관리할 수 있습니다.<br>
                2. map, filter, reduce와 같은 배열 메서드를 사용하여 데이터를 효율적으로 처리하고, 객체의 프로퍼티를 동적으로 조작할 수 있습니다.<br>
                3. 다양한 이벤트를 처리하여 동적인 웹 애플리케이션을 만들 수 있습니다.
            `
            },
            { name: "React.js", img: "./images/react.png", 
                description: `
                1. useState, useEffect, useCallback 등 다양한 훅을 활용하여 상태 관리, 사이드 이펙트 처리, 성능 최적화 등을 효율적으로 구현할 수 있습니다.<br/>
                2. react-router를 이용해 페이지 간 네비게이션과 동적 라우팅을 쉽게 설정하고, 애플리케이션의 URL을 관리할 수 있습니다.<br/>
                3. fetch나 axios를 통해 서버에서 데이터를 비동기적으로 가져오고, useEffect를 사용해 컴포넌트의 생명주기 동안 데이터 요청과 상태 관리를 처리할 수 있습니다.<br/> 
                4. useContext를 통해 글로벌 상태를 관리하고, 여러 컴포넌트 간에 데이터를 손쉽게 공유할 수 있습니다.<br/>
                `},
            { name: "Typescript", img: "./images/typescript.png", description: "타입스크립트의 정적 타입 검사를 통해 코드 작성 시 타입 오류를 미리 방지할 수 있습니다. 이를 통해 코드의 안정성을 높이고, 런타임 오류를 줄일 수 있습니다." },
            { name: "Next.js", img: "./images/next.png", 
                description: `
                1. 넥스트.js의 최신 기능을 활용하여 SEO 최적화와 빠른 페이지 로딩을 위한 서버사이드 렌더링을 구현할 수 있습니다.<br/> 
                2. 파일 기반 라우팅을 통해 동적 URL을 쉽게 설정하고, 사용자 맞춤형 페이지를 제공할 수 있습니다.<br/>
                3. API 라우트를 사용해 서버사이드에서 API 엔드포인트를 생성하고, 데이터 통신을 관리할 수 있습니다. 이를 통해 외부 API 연동 및 간단한 백엔드 로직을 처리할 수 있습니다.`}
        ],
        etc: 
        [
            { name: "MySQL", img: "./images/mysql.png", description: `다양한 데이터베이스를 생성, 관리할 수 있습니다. 데이터베이스 내에서 테이블을 만들고, 데이터를 저장할 수 있습니다. 2. MySQL을 통해 데이터를 삽입(INSERT), 조회(SELECT), 수정(UPDATE), 삭제(DELETE)할 수 있습니다. 복잡한 쿼리를 작성해 다양한 조건으로 데이터를 필터링하고, 집계 및 분석할 수 있습니다.` },
            { name: "AWS", img: "./images/aws.png", description: `AWS RDS(Amazon Relational Database Service)를 이용하여 데이터베이스를 손쉽게 배포하고 관리할 수 있습니다.` }],
        mark: { name: "HTML5", img: "./images/html.png", description: `header, nav, section, article, footer 등과 같은 HTML5의 새로운 요소들을 사용하여 웹 페이지의 구조를 명확하게 정의하고, 접근성을 높일 수 있습니다.` },
        style: [
            { name: "CSS3", img: "./images/css.png", description: `1. flexbox와 grid를 사용하여 복잡한 레이아웃을 쉽게 구성할 수 있습니다.<br/>2. @keyframes와 animation 속성을 사용하여 요소에 애니메이션 효과를 적용할 수 있습니다.<br/> 3. 다양한 폼 요소"(input, select, textarea)"의 기본 스타일을 사용자 정의하여 일관된 디자인을 구현할 수 있습니다.<br/>4. :before와 ::after를 사용하여 요소의 앞뒤에 콘텐츠를 추가할 수 있습니다.`},
            { name: "StyledComponent", img: "./images/styled.webp", description: `1. React 컴포넌트와 함께 스타일을 정의하여, 재사용 가능한 스타일이 적용된 컴포넌트를 생성할 수 있습니다.<br/>2. 기본 스타일을 정의하고, 이를 확장하거나 여러 컴포넌트에서 재사용하여 일관된 디자인을 유지할 수 있습니다.<br/>3. 컴포넌트의 props를 활용하여 스타일을 동적으로 변경하고, 상태에 따라 다른 스타일을 적용할 수 있습니다.`},
            { name: "Tailwind", img: "./images/tailwind.svg", description: `1. 유틸리티 클래스를 사용하여 신속하게 스타일을 적용하고, 페이지의 레이아웃과 디자인을 빠르게 구성할 수 있습니다.<br/>2. (tailwind.config.js)을 통해 색상, 폰트, 간격 등 디자인 시스템을 사용자 정의할 수 있습니다. 일관된 디자인 시스템을 유지하고, 팀원 간의 스타일 일관성을 높일 수 있습니다.` }
        ]
    };

    const closeModal = () => setSelectedSkill(null);

    return (
        <div className="About section" >
            <div>
                <motion.div 
                className={activeTab === 'about' ? "leftImg" : "leftImgB"}
                    initial={{ opacity: 0, translateX: "-20%" }}
                    whileInView={{
                        opacity: 1,
                        translateX: "0%",
                    transition: { duration: 1 },
                    }}
                >
                    <img src="./images/face.png" onClick={() => setActiveTab('about')} />
                </motion.div>
                {activeTab === 'about' && (
                    <motion.div
                        initial={{ opacity: 0, translateY: "-20%", translateX: "-50%"}}
                        whileInView={{
                            opacity: 1,
                            translateY: "-50%",
                            translateX: "-50%",
                        transition: { duration: 1 },
                        }}
                        className="leftTxt"
                     >
                        <p>" 안녕하세요, 프론트엔드 개발자 유상협 입니다. "</p>
                        <p>" 항상 배우고자 하는 삶의 자세로 개발 공부에 임하고 있습니다. "</p>
                        <div className="linkTxt">
                            <a href="https://velog.io/@hyeopsang/posts"><img className="velog" src="./images/veloglogo.jpeg" /></a>
                            <a href="https://github.com/hyeopsang"><img className="github" src="./images/github.png" /></a>
                        </div>
                    </motion.div>
                )}
            </div>
            <div>
                <motion.div 
                className={activeTab === 'stack' ? "rightImg" : "rightImgB"}
                initial={{ opacity: 0, translateX: "20%" }}
                    whileInView={{
                        opacity: 1,
                        translateX: "0",
                    transition: { duration: 1 },
                    }}
                >
                    <img src="./images/code.png" onClick={() => setActiveTab('stack')} />
                </motion.div>
                {activeTab === 'stack' && (
                    <motion.div 
                        className="MySkill"
                        initial={{ opacity: 0, translateY: "-30%", translateX: "-50%"}}
                            whileInView={{
                                opacity: 1,
                                translateY: "-50%",
                                translateX: "-50%",
                            transition: { duration: 1 },
                            }}
                    >
                        <div className="lang">
                            <h2>Language</h2>
                            {skills.lang.map((item) => (
                                <div key={item.name} onClick={() => setSelectedSkill(item)}>
                                    <img src={item.img} alt={item.name} />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                            <hr />
                            <h2>ETC</h2>
                            {
                                skills.etc.map((item) => (
                                    <div key={item.name} onClick={() => setSelectedSkill(item)}>
                                        <img src={item.img} alt={item.name} />
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="mark">
                            <h2>Mark up</h2>
                            <div onClick={() => setSelectedSkill(skills.mark)}>
                                <img src={skills.mark.img} alt={skills.mark.name} />
                                <p>{skills.mark.name}</p>
                            </div>
                            <hr />
                            <h2>Style</h2>
                            {skills.style.map((item) => (
                                <div key={item.name} onClick={() => setSelectedSkill(item)}>
                                    {item.img && <img src={item.img} alt={item.name} />}
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* 모달 창 */}
            {selectedSkill && (
                <SkillText close={closeModal} skill={selectedSkill}/>
            )}
        </div>
    );
}
