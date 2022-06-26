export type NewTopicForm = {
	label: string
	categoryId: number
}

export type ParamGetTopics = {
	categoryId: number
}

export type ParamGetComments = {
	topicId: number
}
