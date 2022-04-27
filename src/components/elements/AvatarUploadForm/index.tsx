import React, { FC, FormEvent, useState } from 'react';
import Form from 'src/components/elements/Form';
import TextInput from 'src/components/elements/Inputs/TextInput';
import { changeUserAvatarRequest } from 'src/components/pages/ProfileEdit/api';

type UploadAvatarForm = {
    avatar?: string;
};

const UploadAvatar: FC<UploadAvatarForm> = () => {
    const [formError, setFormError] = useState('');
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        console.log(formData.getAll('avatar'));
        changeUserAvatarRequest(formData)
            .then(res => {
                console.log(res, 'rest');
            })
            .catch(err => {
                setFormError(err.reason);
            });
    };

    return (
        <>
            <h4>Upload Avatar</h4>
            <Form
                handleSubmit={onSubmit}
                submitTitle={'Upload'}
                errorText={formError}
            >
                <TextInput
                    type={'file'}
                    name={'avatar'}
                />
            </Form>
        </>
    );
};

export default UploadAvatar;
