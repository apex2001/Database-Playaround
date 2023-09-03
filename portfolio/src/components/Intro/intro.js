import React from 'react'
import './intro.css'
import background from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
    return (
        <section id='intro'> 
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Vinh</span> <br/> Software Developer</span>
                <p className='introPara'>I am a student at the University of Houston with a passion in creating <br/> software to build a better world.</p>
                <Link><button className='button'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={background} alt='profile' className='background'/>
        </section>
    )
}

export default Intro