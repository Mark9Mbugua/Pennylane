import React from 'react';
import { 
HomeSection,
Intro,
IntroTitle,
WhiteLine 
} from './home.styles';

const Home = () => {
    return (
        <HomeSection id='home'>
            <Intro>
                <IntroTitle>
                    Move into your ideal home
                </IntroTitle>
                <WhiteLine />
            </Intro>
        </HomeSection>
    )
}

export default Home
