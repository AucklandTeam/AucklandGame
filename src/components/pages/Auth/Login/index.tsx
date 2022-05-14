import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import { LoginForm } from './types';
import TextInput from 'src/components/elements/Inputs/TextInput';
import { initialState, TextFieldsLogin } from './shared';
import Form from 'src/components/elements/Form';
import { RouterPath } from 'src/shared/consts';
import HomePageWrap from 'src/components/elements/HomePageWrap';
import { useAppDispatch } from 'src/index';
import { signIn } from '../actions';

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const { values, handleChange, handleBlur, handleSubmit, isValid, setFormError, formError } = useForm<LoginForm>({
        initialState,
        onSubmit: values => {
            console.log(isValid);
            if (!isValid) return;
            dispatch(signIn({ ...values, setFormError }));
        },
    });

    return (
        <HomePageWrap titleContent={'Sign In'}>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Let’s shoot!'}
                errorText={formError}
            >
                {TextFieldsLogin.map(({ name, type, title, validType }) => (
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
            <Link to={RouterPath.SignUp}>No account yet?</Link>
        </HomePageWrap>
    );
};

export default Login;
