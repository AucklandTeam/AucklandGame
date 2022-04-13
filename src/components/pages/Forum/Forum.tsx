import React, { FC } from 'react';
import NotGameWrap from '../../elements/NotGameWrap/NotGameWrap';

const ForumContent: FC = () => {
    return <div>Auckland Forum</div>;
};

const Forum = () => {
    return (
        <NotGameWrap titlePage={'Auckland Forum'}>
            <ForumContent />
        </NotGameWrap>
    );
};

export default Forum;
