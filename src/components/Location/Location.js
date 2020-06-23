import React from 'react';
import {
    LocationContainer, 
    MapRouter,
    MapCanvas
} from './location.styles';
import {
    Line,
    SectionTitle,
    TitleContainer
 } from '../Common/common.styles';

 import { 
    ApartmentsSection
} from '../Apartments/apartments.styles';

const Location = () => {
    return (
        <ApartmentsSection>
            <TitleContainer>
                <SectionTitle>Location</SectionTitle>
                <Line />
            </TitleContainer>
            <LocationContainer>
                <MapRouter>
                    <MapCanvas className="gmap_canvas">
                        <iframe 
                            width="100%" 
                            height="500" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=pennylane&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0">
                        </iframe>
                    </MapCanvas>
                </MapRouter>
            </LocationContainer>
        </ApartmentsSection>
    );
}

export default Location
