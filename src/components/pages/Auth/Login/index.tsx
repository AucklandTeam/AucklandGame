import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import {FormErrors} from 'src/hooks/useForm/types';
import {LoginForm} from './types';
import {loginRequest} from '../api';
import TextInput from 'src/components/elements/Inputs/TextInput';
import {initialState, TextFieldsLogin} from './shared';
import Form from 'src/components/elements/Form';
import {RouterPath} from 'src/shared/consts';
import HomePageWrap from 'src/components/elements/HomePageWrap';

const Login: FC = () => {
    const [formError, setFormError] = useState('');
    const {values, handleChange, handleSubmit, isValid} = useForm<LoginForm>({
        initialState,
        validate: (values) => {
            const errors: FormErrors<LoginForm> = {} as FormErrors<LoginForm>;
            if (values.login.length < 3) {
                errors.login = 'Поле короткое';
            }
            return errors;
        },
        onSubmit: (values) => {
            if (isValid) {
                loginRequest({...values},).then((res) => {
                    console.log(res, 'rest');
                }).catch((err)=>{
                    setFormError(err.reason);
                });
            }
        }
    });
    return (
        <HomePageWrap titleContent={'Sign In'}>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Let’s shoot!'}
                errorText={formError}
            >
                {TextFieldsLogin.map(({name, type,title}) =>
                    (<TextInput
                        key={name}
                        title={title}
                        type={type}
                        name={name}
                        onChange={handleChange}
                        value={values[name]}
                    />
                    ))}
            </Form>
            <Link to={RouterPath.SignUp}>No account yet?</Link>
        </HomePageWrap>
    );
};

export default Login;
