import React, { FC, MutableRefObject, useRef, useState } from 'react';
import styles from './ProfileEdit.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import Avatar from 'src/components/elements/Avatar/Avatar';
import Modal from 'src/components/elements/Modal/Modal';
import noImage from 'www/Images/noImage.svg';
import useForm from 'src/components/../hooks/useForm';
import Button from 'src/components/elements/Buttons/Button';
import TextInput from 'src/components/elements/Inputs/TextInput';
import { FormErrors } from '../../../hooks/useForm/types';
import { loginRequest } from '../Auth/api';
import Form from '../../elements/Form';
import { LoginForm } from '../Auth/Login/types';

type UploadAvatarForm = {
    formData: FormData | undefined;
};

type EditUserDataForm = {
    login: string;
    email: string;
};
type EditUserPwdForm = {
    password: string;
};

const UploadAvatar = () => {
    const [formError, setFormError] = useState('');
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

const EditUserData = () => {
    const { handleSubmit, handleChange } = useForm<EditUserDataForm>({
        initialState: {
            login: 'test',
            email: 'test@test.info',
        },
        validate: values => {
            let errors: FormErrors<EditUserDataForm> = {} as FormErrors<EditUserDataForm>;
            if (values.login.length < 5) {
                errors.login = 'Поле короткое';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values, 'values');
        },
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInput
                    inputType={'text'}
                    inputName={'login'}
                    inputTitle={'Login'}
                    placeholder={'test'}
                    value={'test'}
                    onChange={handleChange}
                />
                <TextInput
                    inputType={'email'}
                    inputName={'email'}
                    inputTitle={'E-mail'}
                    placeholder={'test@test.info'}
                    value={'test@test.info'}
                    onChange={handleChange}
                />
                <Button
                    buttonType={'submit'}
                    buttonName={'userEdit'}
                    buttonTitle={'Save Changes'}
                />
            </form>
        </>
    );
};

const EditUserPassword = () => {
    const { handleSubmit, handleChange } = useForm<EditUserPwdForm>({
        initialState: {
            password: '',
        },
        onSubmit: values => {
            console.log(values, 'values');
        },
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInput
                    inputType={'password'}
                    inputName={'old-password'}
                    inputTitle={'Old Password'}
                    value={''}
                    onChange={handleChange}
                />
                <TextInput
                    inputType={'password'}
                    inputName={'password'}
                    inputTitle={'New Password'}
                    value={''}
                    onChange={handleChange}
                />
                <TextInput
                    inputType={'password'}
                    inputName={'password'}
                    inputTitle={'Repeat Password'}
                    value={''}
                    onChange={handleChange}
                />
                <Button
                    buttonType={'submit'}
                    buttonName={'userPwd'}
                    buttonTitle={'Save Password'}
                />
            </form>
        </>
    );
};

const ProfileEditContent: FC = () => {
    const modal: MutableRefObject<null> = useRef(null);
    return (
        <>
            <div className={styles.userCard}>
                <Avatar
                    imageSrc={noImage}
                    imageTitle={'Avatar'}
                    divClass={styles.userAvatar}
                    handleClick={() => (modal as MutableRefObject<any>).current.open()}
                />
                <div className={styles.userData}>
                    <EditUserData />
                    <EditUserPassword />
                </div>
            </div>
            <Modal ref={modal}>
                <UploadAvatar />
            </Modal>
        </>
    );
};

const ProfileEdit = () => {
    return (
        <NotGameWrap titlePage={'Profile Edit'}>
            <ProfileEditContent />
        </NotGameWrap>
    );
};

export default ProfileEdit;
