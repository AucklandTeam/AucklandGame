import React, { FC, MutableRefObject, useRef } from 'react';
import styles from './Profile.scss';
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
const UploadAvatar = () => {
    console.log('open popup');
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
            <h4>Upload Avatar</h4>
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

const ProfileContent: FC = () => {
    const modal: MutableRefObject<null> = useRef(null);
    return (
        <>
            <h3>Gamer Profile</h3>
            <div className={styles.userCard}>
                <Avatar
                    imageSrc={noImage}
                    imageTitle={'Avatar'}
                    divClass={styles.userAvatar}
                    handleClick={() => (modal as MutableRefObject<any>).current.open()}
                />
                <div className={styles.userData}>
                    <h4>User Login</h4>
                    <div>E-mail: {'user@email.com'}</div>
                    <h4>Score: {'5345256'}</h4>
                </div>
            </div>
            <Modal ref={modal}>
                <UploadAvatar />
            </Modal>
        </>
    );
};

const Profile = () => {
    return (
        <NotGameWrap>
            <ProfileContent />
        </NotGameWrap>
    );
};

export default Profile;
