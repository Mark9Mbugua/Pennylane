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
        <ContactsSection id='contact-us'>
            <TitleContainer>
                <SectionTitle>Contact Us</SectionTitle>
                <Line />
            </TitleContainer>
            <ContactsContainer>
                <Phone>Call us on: +254712340908</Phone>
                <Phone>Or</Phone>
                <Phone>Email Us:</Phone>
                <ContactsForm name='contact-form' method='post'>
                    <input type='hidden' name='form-name' value='contact' />
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
                        name='message'
                        label='Message'
                        required
                    />
                    <CustomButton type='submit'>Submit</CustomButton>
                </ContactsForm>
            </ ContactsContainer>
        </ContactsSection>
    );
}

export default ContactUs
