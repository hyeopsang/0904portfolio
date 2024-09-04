// Navbar.js
import "../css/Navbar.css";

export default function Navbar({scrollToSection, navbarBg, isAtTop}) {

    return (
        <div className="Navbar">
            <button onClick={()=>scrollToSection(0)}>Intro</button>
            <button onClick={()=>scrollToSection(1)}>About & Skill</button>
            <button onClick={()=>scrollToSection(2)}>Project</button>
        </div>
    );
}
