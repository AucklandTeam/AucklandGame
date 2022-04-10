import React, {FC} from 'react';
import useForm from 'src/hooks/useForm';
import {FormErrors} from 'src/hooks/useForm/types';
import TemplatePage from '../../../Template/TemplatePage';
import {LoginForm} from './types';
import {loginRequest} from '../api';
import TextInput from '../../../elements/Inputs/TextInput';
import {initialState, TextFieldsLogin} from './shared';
import Form from '../../../elements/Form';


const Login: FC = () => {
    const {values, handleChange, handleSubmit, isValid} = useForm<LoginForm>({
        initialState,
        validate: (values) => {
            let errors: FormErrors<LoginForm> = {} as FormErrors<LoginForm>;
            if (values.login.length < 5) {
                errors.login = 'Поле короткое';
            }
            return errors;
        },
        onSubmit: (values) => {
            if (isValid) {
                loginRequest({...values},).then((res) => {
                    console.log(res);
                });
            }
        }
    });
    return (
        <TemplatePage titleContent={'Sign In'}>
            <Form handleSubmit={handleSubmit} submitTitle={'Sign in'}>
                {TextFieldsLogin.map(({name, type}) =>
                    (<TextInput
                        key={name}
                        inputTitle={name}
                        inputType={type}
                        inputName={name}
                        onChange={handleChange}
                        value={values[name]}/>
                    ))}
            </Form>
        </TemplatePage>
    );
};

export default Login;
