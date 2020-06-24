import React from 'react';
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



const ContactUs = () => {
    return (
        <ContactsSection>
            <TitleContainer>
                <SectionTitle>Contact Us</SectionTitle>
                <Line />
            </TitleContainer>
            <ContactsContainer>
                <Phone>Call us on: +254712340908</Phone>
                <Phone>Or</Phone>
                <Phone>Email Us:</Phone>
                <ContactsForm action='POST' data-netlify='true'>
                    <FormInput
                        type='text'
                        name='name'
                        label='Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        required
                    />
                    <TextArea
                        type='text'
                        name='message'
                        label='Message'
                        required
                    />
                    <div className='field'>
                        <div data-netlify-recaptcha='true'></div>
                    </div>
                    <CustomButton type='submit'>Submit</CustomButton>
                </ContactsForm>
            </ ContactsContainer>
        </ContactsSection>
    );
}

export default ContactUs
