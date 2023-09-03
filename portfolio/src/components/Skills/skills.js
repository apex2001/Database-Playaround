import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a passinate software developer with experience programming in various paradigms and languages such as Python, C++, JavaScript and COBOL.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt='UIDesign' className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt='WebDesign' className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt='AppDesign' className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills