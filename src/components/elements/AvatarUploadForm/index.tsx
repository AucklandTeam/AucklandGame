import React, {useState} from 'react';
import useForm from '../../../hooks/useForm';
import Form from '../Form';
import TextInput from '../Inputs/TextInput';

type UploadAvatarForm = {
    formData: FormData | undefined;
};

const UploadAvatar = () => {
    const [formError] = useState('');
    const { handleChange, handleSubmit } = useForm<UploadAvatarForm>({
        initialState: {
            formData: undefined,
        },

        onSubmit: values => {
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
                    inputType={'file'}
                    inputName={'avatar'}
                    value={''}
                    onChange={handleChange}
                />
            </Form>
        </>
    );
};

export default UploadAvatar;
