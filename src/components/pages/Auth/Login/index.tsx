import React, {FC} from 'react';
import useForm from 'src/hooks/useForm';
import {FormErrors} from 'src/hooks/useForm/types';
import NotGameWrap from "src/components/elements/NotGameWrap/NotGameWrap";

type LoginForm = {
    login: string;
    password: string;
}

const LoginContent:FC = ()=>{
    const {values, handleChange, handleSubmit, errors} = useForm<LoginForm>({
        initialState: {
            login: '',
            password: '',
        },
        validate: (values)=>{
            let errors:FormErrors<LoginForm> = {} as FormErrors<LoginForm>;
            if(values.login.length < 5){
                errors.login = 'Поле короткое';
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values, 'values');
        }
    });
    console.log(errors, 'ошибки')
    return (
        <>
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="login"
                    onChange={handleChange}
                    value={values.login}
                />
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                />
                <button type="submit">Войти</button>
            </form>
        </>
    );
};

const Login = () => {
    return  <NotGameWrap children = { <LoginContent /> } />;
}


export default Login;
