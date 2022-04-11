import React, { FC, MutableRefObject, useRef } from 'react';
import Heading3 from 'src/components/elements/Headings/Heading3';
import styles from './Profile.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import Avatar from 'src/components/elements/Avatar/Avatar';
import Modal from 'src/components/elements/Modal/Modal';
import noImage from 'www/Images/noImage.svg';
import useForm from 'src/components/../hooks/useForm';
import Button from 'src/components/elements/Buttons/Button';
import TextInput from 'src/components/elements/Inputs/TextInput';
import Heading4 from '../../elements/Headings/Heading4';

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
            <Heading4 headingTitle={'Upload Avatar'} />
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
            <Heading3 headingTitle={'Gamer Profile'} />
            <div className={styles.userCard}>
                <Avatar
                    imageSrc={noImage}
                    imageTitle={'Avatar'}
                    divClass={styles.userAvatar}
                    handleClick={() => (modal as MutableRefObject<any>).current.open()}
                />
                <div className={styles.userData}>
                    <Heading4 headingTitle={'User Login'} />
                    <div>E-mail: {'user@email.com'}</div>
                    <h4>Score: {'5345256'}</h4>
                </div>
            </div>
            <Modal
                ref={modal}
                children={<UploadAvatar />}
            />
        </>
    );
};

const Profile = () => {
    return <NotGameWrap children={<ProfileContent />} />;
};

export default Profile;
