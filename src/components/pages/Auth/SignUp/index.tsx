import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../../../hooks/useForm';
import {SignUpForm} from './types';
import {initialState, TextFieldsSignUp} from './shared';
import TextInput from '../../../elements/Inputs/TextInput';
import Form from '../../../elements/Form';
import {RouterPath} from '../../../../shared/consts';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import {useAppDispatch} from 'src';
import {signUp} from '../actions';

const SignUp: FC = () => {
    const dispatch = useAppDispatch();
    const {values, handleChange, handleSubmit, isValid, formError, setFormError} = useForm<SignUpForm>({
        initialState,
        onSubmit: (values) => {
            if (isValid) {
                dispatch(signUp({...values, setFormError}));
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
