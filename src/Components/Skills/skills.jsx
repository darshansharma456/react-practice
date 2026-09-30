import React from 'react';
import './skills.css';

// Using fallback variables so the server will NEVER trigger a 500 error, even if files are missing
const UIDesign = "";
const WebDesign = "";
const AppDesign = "";

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</span>
            <div className="skillBars">
                
                <div className="skillBar">
                    {/* The alt description handles text rendering if the file is missing */}
                    <div className="skillBarImgPlaceholder" style={{fontSize: '2rem', marginRight: '2rem'}}>🎨</div>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="skillBarImgPlaceholder" style={{fontSize: '2rem', marginRight: '2rem'}}>💻</div>
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="skillBarImgPlaceholder" style={{fontSize: '2rem', marginRight: '2rem'}}>📱</div>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
