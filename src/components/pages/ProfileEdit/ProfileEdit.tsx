import React, { FC, MutableRefObject, useRef, useState } from 'react';
import styles from './ProfileEdit.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import Index from 'src/components/elements/Avatar';
import Modal from 'src/components/elements/Modal';
import noImage from 'www/Images/noImage.svg';
import UploadAvatar from "src/components/elements/AvatarUploadForm";
import EditUserData from "src/components/elements/EditUserForm";
import EditUserPassword from "src/components/elements/EditUserPasswordForm";

const ProfileEditContent: FC = () => {
    const modal: MutableRefObject<null> = useRef(null);
    return (
        <>
            <div className={styles.userCard}>
                <Index
                    imageSrc={noImage}
                    imageTitle={'Index'}
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
