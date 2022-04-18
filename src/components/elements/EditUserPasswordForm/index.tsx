import useForm from 'src/hooks/useForm';
import TextInput from '../Inputs/TextInput';
import React, {useState} from 'react';
import Form from "../Form";
import {initialState, TextFieldsChangePassword} from "./shared";
import {FormErrors} from "src/hooks/useForm/types";
import {changeUserPasswordRequest} from "src/components/pages/ProfileEdit/api";
import {ChangePasswordForm} from "./types";

const EditUserPassword = () => {
    const [formError, setFormError] = useState('');
    const { values, handleChange, handleSubmit, isValid } = useForm<ChangePasswordForm>({
        initialState,
        validate: values => {
            let errors: FormErrors<ChangePasswordForm> = {} as FormErrors<ChangePasswordForm>;
            if (values.newPassword.length < 5) {
                errors.newPassword = 'Password is too short';
            }
            return errors;
        },
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
                    />
                ))}
        </Form>
    );
};

export default EditUserPassword;
