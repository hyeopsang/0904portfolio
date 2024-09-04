// App.js
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './component/Navbar';
import Intro from './component/Intro';
import About from './component/About';
import ProjectList from './component/ProjectList';
import ProjectMore from './component/ProjectMore';

function App() {
  const [moreModal, setMoreModal] = useState(false);
  const [data, setData] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const onModal = (projectData) => {
    setMoreModal(true);
    setData(projectData);
  };

  const onClose = () => {
    setMoreModal(false);
    setData(null);
  };
  const containerRef = useRef(null);
  const scrollToSection = (sectionIndex) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className='App' ref={containerRef}>
      <Navbar 
        scrollToSection={scrollToSection}
        isAtTop={isAtTop}
      />
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <ProjectList onModal={onModal} />
      </div>
      {moreModal && <ProjectMore data={data} onClose={onClose} />}
    </div>
  );
}

export default App;
