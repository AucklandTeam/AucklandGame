import React, { FC } from 'react';
import NotGameWrap from 'src/components/elements/NotGameWrap';
//import styles from './ForumMain.scss';
import ForumListItem from 'src/components/elements/ForumListItem';
import { ForumListItems } from './shared';

const ForumMain: FC = () => (
    <NotGameWrap titlePage={'Auckland Forum'}>
        <table className="forumsTable">
            <thead>
                <tr>
                    <th className="forumTitleHeader">Forums</th>
                    <th className="forumTopicsHeader">Topics</th>
                    <th className="forumCommentsHeader">Comments</th>
                </tr>
            </thead>
            <tbody>
                {ForumListItems.map(item => (
                    <ForumListItem
                        key={item.forumTitle}
                        forumTitle={item.forumTitle}
                        forumTopicsCount={item.forumTopicsCount}
                        forumCommentsCount={item.forumCommentsCount}
                    />
                ))}
            </tbody>
        </table>
    </NotGameWrap>
);

export default ForumMain;

