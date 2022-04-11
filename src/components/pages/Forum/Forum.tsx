import React, { FC } from 'react';
import NotGameWrap from '../../elements/NotGameWrap/NotGameWrap';
import Heading3 from '../../elements/Headings/Heading3';

const ForumContent: FC = () => {
    return (
        <>
            <Heading3 headingTitle={'Auckland Forum'} />
        </>
    );
};

const Forum = () => {
    return <NotGameWrap children={<ForumContent />} />;
};

export default Forum;
