import React, {useEffect} from 'react';
import useForm from 'src/hooks/useForm';
import TextInput from 'src/components/elements/Inputs/TextInput';
import { FormErrors } from 'src/hooks/useForm/types';
import Form from 'src/components/elements/Form';
import {initialState, TextFieldsEditUser} from './shared';
import { EditUserDataForm } from './types';
import { useUserInfo } from 'src/components/pages/Auth/selectors';
import { useAppDispatch } from 'src/index';
import { editUser } from 'src/components/pages/ProfileEdit/actions';

const EditUserData = () => {
    const { data } = useUserInfo();
    const dispatch = useAppDispatch();
    const { values, handleChange, handleSubmit, isValid, formError, setFormError, setFieldValue } = useForm<EditUserDataForm>({
        initialState,
        validate: values => {
            const errors: FormErrors<EditUserDataForm> = {} as FormErrors<EditUserDataForm>;
            if (values.login.length < 3) {
                errors.login = 'Field is too short';
            }
            return errors;
        },
        onSubmit: values => {
            if (!isValid) return;
            dispatch(editUser({ ...values, setFormError }));
        },
    });

    useEffect(() => {
        setFieldValue('login', data?.login || '');
        setFieldValue('email', data?.email || '');
    }, [data]);

    return (
        <Form
            handleSubmit={handleSubmit}
            submitTitle={'Save Changes'}
            errorText={formError}
        >
            {TextFieldsEditUser.filter(({ isHide }) => !isHide).map(({ name, type, title }) => (
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
    );
};

export default EditUserData;
