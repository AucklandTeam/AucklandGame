import React, { FC } from 'react';
import Index from '../../elements/NotGameWrap';

const ForumContent: FC = () => {
    return <div>Auckland Forum</div>;
};

const Forum = () => {
    return (
        <Index titlePage={'Auckland Forum'}>
            <ForumContent />
        </Index>
    );
};

export default Forum;
