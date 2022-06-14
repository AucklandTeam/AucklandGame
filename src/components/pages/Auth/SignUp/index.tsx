import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import { SignUpForm } from './types';
import { initialState, TextFieldsSignUp } from './shared';
import TextInput from 'src/components/elements/Inputs/TextInput';
import Form from 'src/components/elements/Form';
import { RouterPath } from 'src/shared/consts';
import HomePageWrap from 'src/components/elements/HomePageWrap';
import { useAppDispatch } from 'src/index';
import { signUp } from '../actions';

const SignUp: FC = () => {
    const dispatch = useAppDispatch();
    const { values, handleChange, handleBlur, handleSubmit, isValid, formError, setFormError } = useForm<SignUpForm>({
        initialState,
        onSubmit: values => {
            if (!isValid) return;
            dispatch(signUp({ ...values, setFormError }));
        },
    });
    return (
        <HomePageWrap titleContent={'Registration'}>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Welcome aboard!'}
                errorText={formError}
            >
                {TextFieldsSignUp.filter(({ isHide }) => !isHide).map(({ name, type, title, validType }) => (
                    <TextInput
                        key={name}
                        title={title}
                        type={type}
                        name={name}
                        validType={validType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[name]}
                    />
                ))}
            </Form>
            <Link to={RouterPath.SignIn}>Have account already?</Link>
        </HomePageWrap>
    );
};

export default SignUp;
