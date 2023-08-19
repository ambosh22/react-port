import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle" >EDUCATION</span>
            <span className="skillDesc">Currenly Student of Phinma University</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt='UIDesign' className="skillBarImg" />
                <div className="skillBarTexr">
                    <h2>Anolid Elem. School</h2>
                    <p>2009-2015</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt='WebDesign' className="skillBarImg" />
                <div className="skillBarTexr">
                    <h2>Mangaldan National School</h2>
                    <p>2015-2019</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt='AppDesign' className="skillBarImg" />
                <div className="skillBarTexr">
                    <h2>University of Pangasinan</h2>
                    <p>2021-</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Skills;