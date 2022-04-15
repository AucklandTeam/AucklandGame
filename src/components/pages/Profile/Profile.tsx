import React, { FC } from 'react';
import styles from './Profile.scss';
import NotGameWrap from 'src/components/elements/NotGameWrap/NotGameWrap';
import Index from 'src/components/elements/Avatar';
import noImage from 'www/Images/noImage.svg';


const ProfileContent: FC = () => {
    return (
        <>
            <div className={styles.userCard}>
                <Index
                    imageSrc={noImage}
                    imageTitle={'Index'}
                    divClass={styles.userAvatar}
                />
                <div className={styles.userData}>
                    <h4>User Login</h4>
                    <div>E-mail: {'user@email.com'}</div>
                    <h4>Score: {'5345256'}</h4>
                </div>
            </div>
        </>
    );
};

const Profile = () => {
    return (
        <NotGameWrap titlePage={'Gamer Profile'}>
            <ProfileContent />
        </NotGameWrap>
    );
};

export default Profile;
