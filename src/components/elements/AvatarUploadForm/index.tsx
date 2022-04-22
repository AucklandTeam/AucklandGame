import React, {useState} from 'react';
import useForm from 'src/hooks/useForm';
import Form from 'src/components/elements/Form';
import TextInput from 'src/components/elements/Inputs/TextInput';
import {FormErrors} from 'src/hooks/useForm/types';

type UploadAvatarForm = {

    avatar?: string;
};

const UploadAvatar = () => {
    const [formError] = useState('');
    const { handleChange, handleSubmit, isValid } = useForm<UploadAvatarForm>({
        initialState: {

            avatar: ''
        },
        validate: values => {
            const errors: FormErrors<UploadAvatarForm> = {} as FormErrors<UploadAvatarForm>;
            if (values.avatar === '') {
                errors.avatar = 'Nothin\' to upload';
            }
            return errors;
        },
        onSubmit: values => {
            if (!isValid) return;
            console.log(values);
        },
    });
    return (
        <>
            <h4>Upload Avatar</h4>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Upload'}
                errorText={formError}
            >
                <TextInput
                    type={'file'}
                    name={'avatar'}
                    onChange={handleChange}
                />
            </Form>
        </>
    );
};

export default UploadAvatar;
