import React, {useEffect, useState, useRef} from 'react';
import {gsap, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Line,
    SectionTitle,
    TitleContainer
 } from '../Common/common.styles';
import {
    ContactsSection,
    ContactsContainer,
    ContactsForm,
    Phone
} from './contactUs.styles';
import FormInput from '../FormInput/FormInput';
import TextArea from '../FormInput/TextArea';
import CustomButton from '../CustomButton/CustomButton';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
    let contactsSection = useRef(null);
    let contactsTitle = useRef(null);
    let contactsContainer = useRef(null);

    useEffect(() => {
        const contactFirst = contactsContainer.children[0];
        const contactSecond = contactFirst.nextSibling;
        const contactThird = contactSecond.nextSibling;
        const contactFourth = contactThird.nextSibling;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactsSection,
                toggleActions: 'restart none restart none',
                start: '6 70%'
            }
        });

        gsap.to(contactsSection, 0, {css: {visibility: 'visible'}});
        
        tl
        .from(contactsTitle,{
            yPercent: -100,
            duration: .8,
            opacity: 0,
            ease: "elastic.inOut(1, 0.3)"
        })
        .from([contactFirst, contactSecond, contactThird, contactFourth], {
            duration: 1, 
            opacity: 0, 
            y: -40,
            ease: Power3.easeInOut,
            stagger: 0.5
        });
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    return (
        <ContactsSection id='contact-us' ref={el => contactsSection = el}>
            <TitleContainer ref={el => contactsTitle = el}>
                <SectionTitle>Contact Us</SectionTitle>
                <Line />
            </TitleContainer>
            <ContactsContainer ref={el => contactsContainer = el}>
                <Phone>Call us on: +254712340908</Phone>
                <Phone>Or</Phone>
                <Phone>Email Us:</Phone>
                <ContactsForm name='contact-us' method='post'>
                    <input type='hidden' name='form-name' value='contact-us' />
                    <FormInput
                        type='text'
                        name='name'
                        label='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextArea
                        name='message'
                        label='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <CustomButton type='submit'>Submit</CustomButton>
                </ContactsForm>
            </ ContactsContainer>
        </ContactsSection>
    );
}

export default ContactUs
