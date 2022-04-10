import React, {FC} from 'react';
import TemplatePage from '../../../Template/TemplatePage';
import useForm from '../../../../hooks/useForm';
import {SignUpForm} from './types';
import {initialState, TextFieldsSignUp} from './shared';
import TextInput from '../../../elements/Inputs/TextInput';
import Form from '../../../elements/Form';

const SignUp: FC = () => {
    const {values, handleChange, handleSubmit, isValid} = useForm<SignUpForm>({
        initialState,
        onSubmit: (values) => {
            if (isValid) {
                console.log(values);
            }
        },
    });
    return (
        <TemplatePage titleContent={'Registration'}>
            <Form handleSubmit={handleSubmit} submitTitle={'Sign Up'}>
                {TextFieldsSignUp.filter(({isHide})=>!isHide).map(({name, type}) => (
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
        </TemplatePage>
    );
};
export default SignUp;
