import React from 'react';
import Heading3 from '../../elements/Headings/Heading3';
import TextInput from '../../elements/Inputs/TextInput';
import Button from '../../elements/Buttons/Button';

const Profile = () => {
    return (
        <>
            <Heading3 headingTitle={ 'Gamer Profile' } />
            <TextInput inputTitle={ 'Your Login' } inputType={ 'text' } inputName={ 'login' } />
            <Button buttonType={'button'} buttonName={'signIn'} buttonTitle={'Let\'s Shoot!'}/>
        </>
    );
};

export default Profile;
