import React, { FC } from 'react';
import styles from './ForumListItem.scss';
import { forumListProps } from './types';
import Button from '../Buttons/Button';

const ForumListItem: FC<forumListProps> = ({ forumTitle, forumTopicsCount, forumCommentsCount }) => (
    <tr>
        <td className={styles.forumTitle}>{forumTitle}</td>
        <td className={styles.forumTopicsCounter}>
            {forumTopicsCount}
            <Button
                buttonType={'button'}
                buttonTitle={'+'}
            />
        </td>
        <td className={styles.forumCommentsCounter}>{forumCommentsCount}</td>
    </tr>
);

export default ForumListItem;
