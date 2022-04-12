import React, { FC } from 'react';
import NotGameWrap from '../../elements/NotGameWrap/NotGameWrap';

const ForumContent: FC = () => {
    return (
            <h3>Auckland Forum</h3>
    );
};

const Forum = () => {
    return <NotGameWrap children={<ForumContent />} />;
};

export default Forum;
