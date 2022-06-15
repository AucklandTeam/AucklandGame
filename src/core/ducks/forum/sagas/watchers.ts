import {all, takeLatest} from "@redux-saga/core/effects";
import {getCategoryTopicsAction, addCategoryTopicsAction} from "src/core/ducks/forum/actions";
import {getCategoryTopicsWorker, addCategoryTopicWorker} from "src/core/ducks/forum/sagas/workers";

export default function* forumWatcher() {
    yield all([
        takeLatest(getCategoryTopicsAction, getCategoryTopicsWorker),
        takeLatest(addCategoryTopicsAction, addCategoryTopicWorker)
    ])
}