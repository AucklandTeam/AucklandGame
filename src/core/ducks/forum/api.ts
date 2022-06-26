import { request } from 'src/api/request'
import { ApiLocation } from 'src/api'
import { CategoryTopic, Topic, Comment } from 'src/core/ducks/forum/types'
import {
	NewTopicForm,
	ParamGetComments,
	ParamGetTopics
} from 'components/addNewTopicForm/types'
import { AddReplyFormProps, ChangeReactionParam } from 'components/addReplyForm/types'

export const addCategoryTopic = request<CategoryTopic, { label: string }>({
	baseURL: '/',
	method: 'POST',
	url: ApiLocation.FORUM
})

export const getCategoriesTopics = request<CategoryTopic[]>({
	method: 'GET',
	baseURL: '/',
	url: ApiLocation.FORUM
})

export const addTopic = request<Topic, NewTopicForm>({
	method: 'POST',
	baseURL: '/',
	url: ApiLocation.TOPIC
})

export const getTopics = request<Topic[], ParamGetTopics>({
	method: 'GET',
	baseURL: '/',
	url: ApiLocation.TOPICS
})

export const getTopic = request<Topic, { topicId: number }>({
	method: 'GET',
	baseURL: '/',
	url: ApiLocation.TOPIC
})

export const getComments = request<Comment[], ParamGetComments>({
	method: 'GET',
	baseURL: '/',
	url: ApiLocation.COMMENT
})

export const addComment = request<Comment, AddReplyFormProps>({
	method: 'POST',
	baseURL: '/',
	url: ApiLocation.COMMENT
})

export const addReaction = request<boolean, ChangeReactionParam>({
    method: "POST",
    url:ApiLocation.REACTION,
    baseURL: '/'
})
