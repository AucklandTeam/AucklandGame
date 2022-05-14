import React, { FC } from 'react';
//import styles from './ForumListItem.scss';
import { forumListProps } from './types';
import Button from '../Buttons/Button';

const ForumListItem: FC<forumListProps> = ({ forumTitle, forumTopicsCount, forumCommentsCount }) => (
    <tr>
        <td className="forumTitle">{forumTitle}</td>
        <td className="forumTopicsCounter">
            {forumTopicsCount}
            <Button
                buttonType={'button'}
                buttonTitle={'+'}
            />
        </td>
        <td className="forumCommentsCounter">{forumCommentsCount}</td>
    </tr>
);

export default ForumListItem;
