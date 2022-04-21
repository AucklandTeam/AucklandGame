import React, {useState} from 'react';
import useForm from 'src/hooks/useForm';
import {FormErrors} from 'src/hooks/useForm/types';
import Form from '../Form';
import TextInput from '../Inputs/TextInput';
import {changeUserAvatarRequest} from 'src/components/pages/ProfileEdit/api';

type UploadAvatarForm = {
    avatar: string | Blob ;
};

const UploadAvatar = () => {
    const [formError, setFormError] = useState('');
    const { handleChange, handleSubmit, isValid } = useForm<UploadAvatarForm>({
        initialState: {
            avatar: ''
        },

        validate: values => {
            let errors: FormErrors<UploadAvatarForm> = {} as FormErrors<UploadAvatarForm>;
            if (values.avatar === undefined) {
                errors.avatar = 'Nothing to upload';
            }
            return errors;
        },
        onSubmit: values => {
            if (isValid) {
                const formData = new FormData();
                formData.append('avatar', values.avatar);
                console.log(formData.entries());
                changeUserAvatarRequest(formData)
                    .then((res)=>{
                        console.log(res);
                    })
                    .catch((error)=>{
                        setFormError((error.reason));
                    });
            }
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
