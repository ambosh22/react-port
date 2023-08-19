import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';

const Works = () =>{
    return(
        <section id='works' >
            <h2 className="workTittle">My Works</h2>
            <span className="workDesc">------------------------------------------------------</span>
            <div className="workImgs">
                <img src={Portfolio1} alt="" className="workImg" /><h3>Apple Go</h3>
                <img src={Portfolio2} alt="" className="workImg" /><h3>Cite Festival</h3>
                <img src={Portfolio3} alt="" className="workImg" /><h3>Phinma Log in</h3>
            </div>
          

        </section>
    );
}

export default Works;