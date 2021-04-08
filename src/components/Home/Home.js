import React, {useRef, useEffect} from 'react';
import {TweenMax, TimelineLite, Power2, Power3} from 'gsap';
import { 
    HomeSection,
    Hero,
    Intro,
    IntroTitle,
    WhiteLine 
} from './home.styles';
import img from '../../images/compound3-min.jpg';

const Home = () => {
    let home = useRef(null);
    let hero = useRef(null);
    let bgImage = useRef(null); 
    let intro = useRef(null);

    let tl = new TimelineLite();

    useEffect(() =>{
        TweenMax.to(home, 0, {css: {visibility: 'visible'}})

        tl
        .from(bgImage, 2.2, {scale:1.6, ease: Power2.easeOut})
        .fromTo(hero, 2.5, {height:'0%'}, {height: '100%', ease: Power3.easeOut}, .3)
        .fromTo(intro, 2, {x:'-250%'}, {x: '0%', ease: Power3.easeOut}, .4);
    });


    return (
        <HomeSection id='home' ref={el => home = el}>
            <Hero className='hero' ref={el => hero = el}>
                <img src={img} alt='Hero' ref={el => bgImage = el}/>
                <Intro ref={el => intro = el}>
                    <IntroTitle>
                        Move into your ideal home
                    </IntroTitle>
                    <WhiteLine />
                </Intro>
            </Hero>    
        </HomeSection>
    );
}

export default Home
