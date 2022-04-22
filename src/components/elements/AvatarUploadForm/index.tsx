import React, {useState} from 'react';
import useForm from '../../../hooks/useForm';
import Form from '../Form';
import TextInput from '../Inputs/TextInput';
import {changeUserAvatarRequest, userRequest} from '../../pages/ProfileEdit/api';
import {FormErrors} from '../../../hooks/useForm/types';
import {EditUserDataForm} from '../EditUserForm/types';

type UploadAvatarForm = {
    //formData?: FormData;
    avatar?: string;
};

const UploadAvatar = () => {
    const [formError, setFormError] = useState('');
    const { handleChange, handleSubmit, isValid } = useForm<UploadAvatarForm>({
        initialState: {
            //formData: undefined,
            avatar: ''
        },
        validate: values => {
            let errors: FormErrors<UploadAvatarForm> = {} as FormErrors<UploadAvatarForm>;
            if (values.avatar === '') {
                errors.avatar = 'Nothin\' to upload';
            }
            return errors;
        },
        onSubmit: values => {
            if (isValid) {
                console.log(values);
                /*changeUserAvatarRequest(values)
                    .then((res)=>{
                        console.log(res);
                    })
                    .catch((error)=>{
                        setFormError((error.reason));
                    });*/
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
