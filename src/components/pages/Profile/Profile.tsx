import React from 'react';
import styles from './Profile.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap';
import Avatar from 'src/components/elements/Avatar';
import noImage from 'www/Images/noImage.svg';
import {useUserInfo} from '../Auth/selectors';
import {RESOURCE_URL} from 'src/shared/consts';

const Profile = () => {
    const user = useUserInfo();
    return (
        <NotGameWrap titlePage={'Gamer Profile'}>
            <div className={styles.userCard}>
                <Avatar
                    imageSrc={user.data?.avatar ? RESOURCE_URL + user.data.avatar : noImage}
                    imageTitle={'Avatar'}
                    divClass={styles.userAvatar}
                />
                <div className={styles.userData}>
                    <h4>{user.data?.login ? user.data.login : 'N/A'}</h4>
                    <div>E-mail: {user.data?.email ? user.data.email : 'N/A'}</div>
                    <h4>Score: {'5345256'}</h4>
                </div>
            </div>
        </NotGameWrap>
    );
};

export default Profile;
