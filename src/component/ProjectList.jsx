import { useState } from "react";
import "../css/ProjectList.css";
import Project from "./Project";

export default function ProjectList({ onModal }) {
  const [project] = useState([
    {
      name: "중고장터 사이트",
      img: ["./images/allday.png", "./images/allday01.png", "./images/allday02.png", "./images/allday03.png", "./images/allday04.png"],
      about: "중고장터 사이트를 구현해봤습니다.",
      description: `React와 Tailwind CSS를 사용하여 중고장터 사이트를 구현해봤습니다.`,
      function: "내가 작성한 게시물 추가, 수정, 판매 상태 변경, 하트, 최근 본 게시물 리스트, 게시판 검색 및 필터링",
      link: "https://github.com/hyeopsang/allday",
      skills: {
        name: ["React.js", "Tailwind", ],
        skillDetail: {
          "React.js": "Context를 활용하면 애플리케이션 전체에서 상태를 효율적으로 공유하고 관리할 수 있습니다.",
          "Tailwind": "CSS를 빠르게 스타일을 적용 할수 있고 tailwind.config.js 파일을 통해 색상 팔레트, 스타일링, 간격 등을 사용자 정의할 수 있습니다."
        }
      } 
    },
    {
      name: "sns 커뮤니티 사이트",
      img: ["./images/mohae.png", "./images/mohae01.png", "./images/mohae02.png"],
      about: "글을 올리고 댓글을 달고 소통할수 있는 커뮤니티(sns)를 구현해봤습니다.",
      description: `프론트엔드에서는 Next.js와 TypeScript를 사용하여 웹 애플리케이션을 개발하였으며, Tailwind CSS를 활용하여 스타일링을 구현하였습니다.<br/>백엔드에서는 API Routes와 MySQL을 연결하여 게시물 관리용 API를 구축하였으며, Google Cloud와 NextAuth를 사용하여 구글 로그인 기능을 구현하였습니다.`,
      function: "게시글 추가 및 삭제, 댓글 추가 및 삭제, 게시판 검색, 구글 로그인과 MySql을 이용한 내가 작성한 게시글 저장, 관리",
      link: "https://github.com/hyeopsang/nextjsMohae",
      skills: {
        name: ["Next.js", "MySQL", "Tailwind", "TypeScript", "AWS"],
        skillDetail: {
          "Next.js": "Next.js를 이용해서 프로젝트를 하면서 서버 사이드 렌더링과 정적 사이트 생성을 활용하여 페이지 로딩 속도를 최적화하고 SEO를 개선할 수 있었습니다. 그리고 파일 시스템 기반 라우팅에 대해서 편리성을 느꼈고 간단한 API 라우트를 만들어 MySQL과 연동하여 백엔드 기능을 구현해보았습니다. 이를 통해 데이터베이스와의 상호작용을 쉽게 처리할 수 있었고, 서버리스 환경에서 API를 관리하는 방법을 익혔습니다.",
          "Tailwind": "CSS를 빠르게 스타일을 적용 할수 있고 tailwind.config.js 파일을 통해 색상 팔레트, 스타일링, 간격 등을 사용자 정의할 수 있습니다.",
          "MySQL": "다양한 SQL 쿼리를 작성하여 데이터를 효율적으로 조회, 삽입, 수정, 삭제하는 방법을 익혔습니다.",
          "TypeScript": "API 요청 및 응답의 타입을 정의함으로써, 프론트엔드와 백엔드 간의 데이터 일관성을 유지할 수 있었습니다.",
          "AWS": "AWS의 RDS의 모니터링 도구를 활용하여 데이터베이스 성능을 실시간으로 모니터링하고 최적화할 수 있었습니다."
        }
      } 
    },
    {
      name: "날씨에 어울리는 뮤비 사이트",
      img: ["./images/weather.png"],
      about: "사용자 위치에 따른 날씨에 맞는 뮤비(노래)를 틀어주는 사이트입니다.",
      description: "React를 사용했으며 Weather API와 geolocation을 연동하여 사용자 위치의 날씨 정보를 가져오고 유튜브 플레이어 라이브러리를 사용하여 날씨에 따라 다른 뮤비가 틀어지는 기능을 만들었습니다.",
      function: "날씨API, 내 위치 정보, 유튜브 영상",
      link: "https://github.com/hyeopsang/songofdays",
      skills: {
        name: ["React"],
        skillDetail: {
          "React.js": "리액트 컴포넌트를 사용하여 재사용성과 유지보수성을 높였습니다."
        },
      },
      api: ["Weaher API"]
    },
  ]);

  return (
    <div className="ProjectList section" >
      <div className="List">
        {project.map((post, index) => (
          <Project key={index} post={post} onModal={() => onModal(post)} />
        ))}
      </div>
    </div>
  );
}
