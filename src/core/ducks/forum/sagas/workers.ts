import { SagaIterator } from 'redux-saga'
import { call, put } from '@redux-saga/core/effects'
import {
	addCategoryTopic,
	addComment,
	addTopic,
	getCategoriesTopics,
	getComments,
	getTopic,
	getTopics,
    addReaction
} from 'src/core/ducks/forum/api'
import {
	addCategoryTopicsAction,
	addCommentAction,
	addTopicAction,
	getCommentsAction,
	getTopicAction,
	getTopicsAction,
	setForumCategoriesData,
	setForumCategoriesFailed,
	setForumCategoriesStatus,
	setForumCommentsData,
	setForumCommentsFailed,
	setForumCommentsStatus,
	setForumTopicsData,
	setForumTopicsFailed,
	setForumTopicsStatus,
    changeReaction,
} from 'src/core/ducks/forum/actions'
import { Topic } from 'src/core/ducks/forum/types'

export function* getCategoryTopicsWorker(): SagaIterator<void> {
	yield put(setForumCategoriesStatus('pending'))
	try {
		const categories = yield call(getCategoriesTopics)
		yield put(setForumCategoriesData(categories))
		yield put(setForumCategoriesStatus('success'))
	} catch (e) {
		console.error(e)
		yield put(setForumCategoriesFailed(e.message))
		yield put(setForumCategoriesStatus('failed'))
	}
}

export function* addCategoryTopicWorker({
	payload
}: ReturnType<typeof addCategoryTopicsAction>): SagaIterator<void> {
	try {
		yield call(addCategoryTopic, payload)
		yield call(getCategoryTopicsWorker)
	} catch (e) {
		console.error(e)
	}
}

export function* addTopicWorker({
	payload
}: ReturnType<typeof addTopicAction>): SagaIterator<void> {
	try {
		yield call(addTopic, payload)
        yield call(getCategoryTopicsWorker);
	} catch (e) {
		console.error(e)
	}
}

export function* getTopicsWorker({
	payload
}: ReturnType<typeof getTopicsAction>): SagaIterator<void> {
	yield put(setForumTopicsStatus('pending'))
	try {
		const result = yield call(getTopics, payload)
		yield put(setForumTopicsData(result))
		yield put(setForumTopicsStatus('success'))
	} catch (e) {
		console.error(e)
		yield put(setForumTopicsFailed(e.message))
		yield put(setForumTopicsStatus('failed'))
	}
}

export function* getTopicWorker({
	payload
}: ReturnType<typeof getTopicAction>): SagaIterator<void> {
	try {
		const topic: Topic = yield call(getTopic, { topicId: payload.id })
		payload.setData(topic.label)
	} catch (e) {
		console.error(e)
	}
}

export function* getCommentsWorker({
	payload
}: ReturnType<typeof getCommentsAction>): SagaIterator<void> {
	yield put(setForumCommentsStatus('pending'))
	try {
		const result = yield call(getComments, payload)
		yield put(setForumCommentsData(result))
		yield put(setForumCommentsStatus('success'))
	} catch (e) {
		console.error(e)
		yield put(setForumCommentsFailed(e.message))
		yield put(setForumCommentsStatus('failed'))
	}
}

export function* addCommentWorker({
	payload
}: ReturnType<typeof addCommentAction>): SagaIterator<void> {
	try {
		yield call(addComment, payload)
		yield put(getCommentsAction({ topicId: payload.topicId }))
	} catch (e) {
		console.error(e)
	}
}

export function* changeReactionWorker({payload}:ReturnType<typeof changeReaction>):SagaIterator<void> {
    try {
        const {userId, commentId, topicId} = payload;
        yield call(addReaction, {userId, commentId});
        yield put(getCommentsAction({topicId}))
    }catch (e) {
        console.error(e);
    }
}
