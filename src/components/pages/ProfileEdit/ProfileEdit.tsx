import React, { FC, MutableRefObject, useRef } from 'react';
import styles from './ProfileEdit.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import Avatar from 'src/components/elements/Avatar/Avatar';
import Modal from 'src/components/elements/Modal/Modal';
import noImage from 'www/Images/noImage.svg';
import useForm from 'src/components/../hooks/useForm';
import Button from 'src/components/elements/Buttons/Button';
import TextInput from 'src/components/elements/Inputs/TextInput';

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
    const { handleSubmit } = useForm<UploadAvatarForm>({
        initialState: {
            formData: undefined,
        },
        onSubmit: values => {
            console.log(values, 'values');
        },
    });
    return (
        <>
            <h4>Upload Avata</h4>
            <form onSubmit={handleSubmit}>
                <TextInput
                    inputType={'file'}
                    inputName={'avatar'}
                />
                <Button
                    buttonType={'submit'}
                    buttonName={'uploadAvatar'}
                    buttonTitle={'Upload'}
                />
            </form>
        </>
    );
};

const EditUserData = () => {
    const { handleSubmit } = useForm<EditUserDataForm>({
        initialState: {
            login: 'test',
            email: 'test@test.info',
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
                />
                <TextInput
                    inputType={'email'}
                    inputName={'email'}
                    inputTitle={'E-mail'}
                    placeholder={'test@test.info'}
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
    const { handleSubmit } = useForm<EditUserPwdForm>({
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
                />
                <TextInput
                    inputType={'password'}
                    inputName={'password'}
                    inputTitle={'New Password'}
                />
                <TextInput
                    inputType={'password'}
                    inputName={'password'}
                    inputTitle={'Repeat Password'}
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
            <h3>Profile Edit</h3>
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
            <Modal
                ref={modal}
                children={<UploadAvatar />}
            />
        </>
    );
};

const ProfileEdit = () => {
    return <NotGameWrap children={<ProfileEditContent />} />;
};

export default ProfileEdit;
