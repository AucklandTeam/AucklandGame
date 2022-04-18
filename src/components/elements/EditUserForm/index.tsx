import useForm from 'src/hooks/useForm';
import TextInput from '../Inputs/TextInput';
import React, {useState} from 'react';
import {FormErrors} from 'src/hooks/useForm/types';
import Form from '../Form';
import {userRequest} from 'src/components/pages/ProfileEdit/api';
import {initialState, TextFieldsEditUser} from './shared';
import {EditUserDataForm} from './types';

const EditUserData = () => {
    const [formError, setFormError] = useState('');
    const { values, handleChange, handleSubmit, isValid } = useForm<EditUserDataForm>({
        initialState,
        validate: values => {
            let errors: FormErrors<EditUserDataForm> = {} as FormErrors<EditUserDataForm>;
            if (values.login.length < 5) {
                errors.login = 'Field is too short';
            }
            return errors;
        },
        onSubmit: values => {
            if (isValid) {
                userRequest(values)
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
            submitTitle={'Save Changes'}
            errorText={formError}
        >
            {TextFieldsEditUser
                .filter(({isHide})=>!isHide)
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

export default EditUserData;
