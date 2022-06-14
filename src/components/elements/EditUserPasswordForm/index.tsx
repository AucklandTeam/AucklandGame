import React, {useState} from 'react';
import useForm from 'src/hooks/useForm';
import TextInput from '../Inputs/TextInput';
import Form from '../Form';
import {initialState, TextFieldsChangePassword} from './shared';
import {changeUserPasswordRequest} from 'src/components/pages/ProfileEdit/api';
import {ChangePasswordForm} from './types';

const EditUserPassword = () => {
    const [formError, setFormError] = useState('');
    const { values, handleChange, handleBlur, handleSubmit, isValid } = useForm<ChangePasswordForm>({
        initialState,
        onSubmit: values => {
            if (isValid) {
                changeUserPasswordRequest(values)
                    .then((res)=>{
                        console.log(res);
                    })
                    .catch((error)=>{
                        setFormError((error.reason));
                    });
            }
        },
    });
    return (
        <Form
            handleSubmit={handleSubmit}
            submitTitle={'Change Password'}
            errorText={formError}
        >
            {TextFieldsChangePassword
                .map(({name, type, title}) => (
                    <TextInput
                        key={name}
                        title={title}
                        type={type}
                        name={name}
                        value={values[name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                ))}
        </Form>
    );
};

export default EditUserPassword;
