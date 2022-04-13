import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../../../hooks/useForm';
import {SignUpForm} from './types';
import {initialState, TextFieldsSignUp} from './shared';
import TextInput from '../../../elements/Inputs/TextInput';
import Form from '../../../elements/Form';
import {RouterPath} from '../../../../shared/consts';
import {signUp} from '../api';
import NotGameWrap from "../../../elements/NotGameWrap/NotGameWrap";

const SignUp: FC = () => {
    const [formError, setFormError] = useState('');
    const {values, handleChange, handleSubmit, isValid} = useForm<SignUpForm>({
        initialState,
        onSubmit: (values) => {
            if (isValid) {
                signUp(values)
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
        <NotGameWrap titlePage={'Registration'}>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Welcome aboard!'}
                errorText={formError}
            >
                {TextFieldsSignUp
                    .filter(({isHide})=>!isHide)
                    .map(({name, type}) => (
                        <TextInput
                            key={name}
                            inputTitle={name}
                            inputType={type}
                            inputName={name}
                            value={values[name]}
                            onChange={handleChange}
                        />
                    ))}
            </Form>
            <Link to={RouterPath.SignIn}>Have account already?</Link>
        </NotGameWrap>
    );
};
export default SignUp;
