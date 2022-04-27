import React from 'react';
import useForm from 'src/hooks/useForm';
import TextInput from 'src/components/elements/Inputs/TextInput';
import { FormErrors } from 'src/hooks/useForm/types';
import Form from 'src/components/elements/Form';
import { TextFieldsEditUser } from './shared';
import { EditUserDataForm } from './types';
import { useUserInfo } from 'src/components/pages/Auth/selectors';
import { useAppDispatch } from 'src/index';
import { editUser } from 'src/components/pages/ProfileEdit/actions';

const EditUserData = () => {
    const { data } = useUserInfo();
    const dispatch = useAppDispatch();
    const { values, handleChange, handleSubmit, isValid, formError, setFormError } = useForm<EditUserDataForm>({
        initialState: {
            first_name: '',
            second_name: '',
            display_name: '',
            email: data?.email || 'N/A',
            login: data?.login || 'N/A',
            phone: '89991112233',
        },
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
