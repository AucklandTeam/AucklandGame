import React, { FC, FormEvent, useState } from 'react';
import Form from 'src/components/elements/Form';
import TextInput from 'src/components/elements/Inputs/TextInput';
import {useAppDispatch} from 'src/index';
import {changeAvatar} from 'src/components/pages/ProfileEdit/actions';


export type UploadAvatarForm = {
    formData?: FormData;
};

const UploadAvatar: FC<UploadAvatarForm> = () => {
    const dispatch = useAppDispatch();
    const [formError, setFormError] = useState('');
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        console.log(formData.getAll('avatar'));
        dispatch(changeAvatar({formData, setFormError}));
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
