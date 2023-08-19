import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">Im<span className="introName"> John Walex Lim</span><br/> Web Designer</span>
                <p className="introPara">Im a Student of Phinma University Of Pangasinan <br/>taking course of Information Technology 3rd yr College </p>
                <a href='https://github.com/ambosh22' target='_blank ' rel="noopener noreferrer"><button className="btn">GitHub<img src={btnImg} alt="git " className='btnImg'/></button></a>
           
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}
export default Intro;