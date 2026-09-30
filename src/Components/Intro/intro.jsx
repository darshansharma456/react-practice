import React from 'react';
import './intro.css';
import bg from '/src/assets/image.png';
import btnImg from '/src/assets/hireme.png';

const Intro = () => {
    // Smooth scroll function using standard vanilla JavaScript
    const handleScrollToContact = () => {
        const targetElement = document.getElementById('contactPage') || document.getElementById('contact');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn("Target contact element not found on this page.");
        }
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Darshan</span> <br />Website Designer
                </span>
                <p className="introPara">
                    I am a skilled web designer with experience in creating<br />visually appealing and user friendly websites.
                </p>
                
                {/* Native interactive button that requires zero packages to scroll */}
                <button className="btn" onClick={handleScrollToContact}>
                    <img src={btnImg} alt="Hire" className='btnImg'/> Hire Me
                </button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
