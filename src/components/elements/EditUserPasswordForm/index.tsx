import useForm from '../../../hooks/useForm';
import TextInput from '../Inputs/TextInput';
import Button from '../Buttons/Button';
import React from 'react';

type EditUserPwdForm = {
    password: string;
};

const EditUserPassword = () => {
    const { handleSubmit, handleChange } = useForm<EditUserPwdForm>({
        initialState: {
            password: '',
        },
        onSubmit: values => {
            console.log(values, 'values');
        },
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInput
                    inputType={'password'}
                    inputName={'old-password'}
                    inputTitle={'Old Password'}
                    value={''}
                    onChange={handleChange}
                />
                <TextInput
                    inputType={'password'}
                    inputName={'password'}
                    inputTitle={'New Password'}
                    value={''}
                    onChange={handleChange}
                />
                <TextInput
                    inputType={'password'}
                    inputName={'password'}
                    inputTitle={'Repeat Password'}
                    value={''}
                    onChange={handleChange}
                />
                <Button
                    buttonType={'submit'}
                    buttonName={'userPwd'}
                    buttonTitle={'Save Password'}
                />
            </form>
        </>
    );
};

export default EditUserPassword;
