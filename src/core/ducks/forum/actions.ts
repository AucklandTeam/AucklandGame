import { createAction } from '@reduxjs/toolkit'
import { LoadStatus, Nullable } from 'shared/types'
import {
	NewTopicForm,
	ParamGetComments,
	ParamGetTopics
} from 'components/addNewTopicForm/types'
import { CategoryTopic, Topic } from 'src/core/ducks/forum/types'
import { AddReplyFormProps } from 'components/addReplyForm/types'

export const getCategoryTopicsAction = createAction(
	'forum/getCategoryTopicsAction'
)

export const addCategoryTopicsAction = createAction<{ label: string }>(
	'forum/addCategoryTopicsAction'
)

export enum forumActions {
	setCategoriesSuccess = 'forum/setCategoriesSuccess',
	setCategoriesFailed = 'forum/setCategoriesFailed',
	setCategoriesStatus = 'forum/setCategoriesStatus',
	setTopicsSuccess = 'forum/setTopicsSuccess',
	setTopicsFailed = 'forum/setTopicsFailed',
	setTopicsStatus = 'forum/setTopicsStatus',
	setCommentsSuccess = 'forum/setCommentsSuccess',
	setCommentsFailed = 'forum/setCommentsFailed',
	setCommentsStatus = 'forum/setCommentsStatus'
}

export const setForumCategoriesStatus = createAction<LoadStatus>(
	forumActions.setCategoriesStatus
)

export const setForumCategoriesData = createAction<Nullable<CategoryTopic[]>>(
	forumActions.setCategoriesSuccess
)

export const setForumCategoriesFailed = createAction<string>(
	forumActions.setCategoriesFailed
)

export const addTopicAction = createAction<NewTopicForm>('forum/addTopic')

export const getTopicsAction = createAction<ParamGetTopics>('forum/getTopics')

export const getTopicAction = createAction<{
	id: number
	setData: (value: string) => void
}>('forum/getTopic')

export const setForumTopicsStatus = createAction<LoadStatus>(
	forumActions.setTopicsStatus
)

export const setForumTopicsData = createAction<Nullable<Topic[]>>(
	forumActions.setTopicsSuccess
)

export const setForumTopicsFailed = createAction<string>(
	forumActions.setTopicsFailed
)

export const addCommentAction = createAction<AddReplyFormProps>(
	'forum/addCommentAction'
)

export const setForumCommentsStatus = createAction<LoadStatus>(
	forumActions.setCommentsStatus
)

export const setForumCommentsData = createAction<Nullable<Comment[]>>(
	forumActions.setCommentsSuccess
)

export const setForumCommentsFailed = createAction<string>(
	forumActions.setCommentsFailed
)

export const getCommentsAction = createAction<ParamGetComments>(
	'forum/getCommentsAction'
)
