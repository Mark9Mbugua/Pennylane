import React, {useState} from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
    Left,
    Right, 
    SliderContainer,
    Slide
} from './slider.styles';

const ImageSlider = ({images}) => {
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (images.length - 1) ? setX(0) : setX(x-100);
    }; 

    return (
        <SliderContainer>
            {images.map((item, index) => {
                return (
                    <Slide key={index} style={{transform: `translate(${x}%)`}}>
                        {item}    
                    </Slide>
                );
            })}
            <Left onClick={goLeft}><ChevronLeftIcon className='arrow'/></Left> 
            <Right onClick={goRight}><ChevronRightIcon className='arrow'/></Right> 
        </SliderContainer>
    );
}

export default ImageSlider
