import React, { FC, MutableRefObject, useRef } from 'react';
import styles from './ProfileEdit.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap';
import Avatar from 'src/components/elements/Avatar';
import Modal from 'src/components/elements/Modal';
import noImage from 'www/Images/noImage.svg';
import UploadAvatar from 'src/components/elements/AvatarUploadForm';
import EditUserData from 'src/components/elements/EditUserForm';
import EditUserPassword from 'src/components/elements/EditUserPasswordForm';
import {RESOURCE_URL} from '../../../shared/consts';
import {useUserInfo} from '../Auth/selectors';

const ProfileEdit: FC = () => {
    const modal: MutableRefObject<null> = useRef(null);
    const {data} = useUserInfo();
    return (
        <NotGameWrap titlePage={'Profile Edit'}>
            <div className={styles.userCard}>
                <Avatar
                    imageSrc={data?.avatar ? `${RESOURCE_URL}${data.avatar}` : noImage}
                    imageTitle={data?.avatar ? data.login : 'Avatar'}
                    divClass={styles.userAvatar}
                    handleClick={() => (modal as MutableRefObject<any>).current.open()}
                />
                <div className={styles.userData}>
                    <EditUserData />
                    <EditUserPassword />
                </div>
            </div>
            <Modal ref={modal}>
                <UploadAvatar/>
            </Modal>
        </NotGameWrap>
    );
};

export default ProfileEdit;
