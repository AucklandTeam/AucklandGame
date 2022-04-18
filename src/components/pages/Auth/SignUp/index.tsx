import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import {SignUpForm} from './types';
import {initialState, TextFieldsSignUp} from './shared';
import TextInput from 'src/components/elements/Inputs/TextInput';
import Form from 'src/components/elements/Form';
import {RouterPath} from 'src/shared/consts';
import {signUp} from '../api';
import HomePageWrap from "src/components/elements/HomePageWrap";

const SignUp: FC = () => {
    const [formError, setFormError] = useState('');
    const {values, handleChange, handleSubmit, isValid} = useForm<SignUpForm>({
        initialState,
        onSubmit: (values) => {
            //console.log(values, isValid);
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
        <HomePageWrap titleContent={'Registration'}>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Welcome aboard!'}
                errorText={formError}
            >
                {TextFieldsSignUp
                    .filter(({isHide})=>!isHide)
                    .map(({name, type,title}) => (
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
            <Link to={RouterPath.SignIn}>Have account already?</Link>
        </HomePageWrap>
    );
};
export default SignUp;
