import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import {FormErrors} from 'src/hooks/useForm/types';
import {LoginForm} from './types';
import TextInput from 'src/components/elements/Inputs/TextInput';
import {initialState, TextFieldsLogin} from './shared';
import Form from 'src/components/elements/Form';
import {RouterPath} from 'src/shared/consts';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import {useAppDispatch} from 'src';
import {signIn} from '../actions';


const Login: FC = () => {
    const dispatch = useAppDispatch();
    const {values, handleChange, handleSubmit, isValid, setFormError, formError} = useForm<LoginForm>({
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
                dispatch(signIn({...values, setFormError}));
            }
        }
    });
    return (
        <NotGameWrap titlePage={'Sign In'}>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Let’s shoot!'}
                errorText={formError}
            >
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
            <Link to={RouterPath.SignUp}>No account yet?</Link>
        </NotGameWrap>
    );
};

export default Login;
