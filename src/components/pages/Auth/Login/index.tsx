import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import useForm from 'src/hooks/useForm';
import {FormErrors} from 'src/hooks/useForm/types';
import {LoginForm} from './types';
import TextInput from 'src/components/elements/Inputs/TextInput';
import {initialState, TextFieldsLogin} from './shared';
import Form from 'src/components/elements/Form';
import {RouterPath} from 'src/shared/consts';
import HomePageWrap from "src/components/elements/HomePageWrap";
import {useAppDispatch} from 'src';
import {signIn} from '../actions';

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const {values, handleChange, handleSubmit, isValid, setFormError, formError} = useForm<LoginForm>({
        initialState,
        validate: (values) => {
            let errors: FormErrors<LoginForm> = {} as FormErrors<LoginForm>;
            if (values.login.length < 3) {
                errors.login = 'Поле короткое';
            }
            return errors;
        },
        onSubmit: (values) => {
            //console.log(values, isValid);
            if (isValid) {
                dispatch(signIn({...values, setFormError}));
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
