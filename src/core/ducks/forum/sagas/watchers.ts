import { all, takeLatest } from '@redux-saga/core/effects'
import {
    getCategoryTopicsAction,
    addCategoryTopicsAction,
    addTopicAction,
    getTopicsAction,
    getCommentsAction,
    addCommentAction,
    getTopicAction,
    changeReaction,
} from 'src/core/ducks/forum/actions'
import {
    getCategoryTopicsWorker,
    addCategoryTopicWorker,
    addTopicWorker,
    getTopicsWorker,
    getCommentsWorker,
    addCommentWorker,
    getTopicWorker,
    changeReactionWorker,
} from 'src/core/ducks/forum/sagas/workers'

export default function* forumWatcher() {
    yield all([
        takeLatest(getCategoryTopicsAction, getCategoryTopicsWorker),
        takeLatest(addCategoryTopicsAction, addCategoryTopicWorker),
        takeLatest(addTopicAction, addTopicWorker),
        takeLatest(getTopicsAction, getTopicsWorker),
        takeLatest(getCommentsAction, getCommentsWorker),
        takeLatest(addCommentAction, addCommentWorker),
        takeLatest(getTopicAction, getTopicWorker),
        takeLatest(changeReaction, changeReactionWorker),
    ])
}
