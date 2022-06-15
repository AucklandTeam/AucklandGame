import {SagaIterator} from "redux-saga";
import {call, put} from "@redux-saga/core/effects";
import {addCategoryTopic, getCategoriesTopics} from "src/core/ducks/forum/api";
import {
    addCategoryTopicsAction,
    setForumCategoriesData,
    setForumCategoriesFailed,
    setForumCategoriesStatus
} from "src/core/ducks/forum/actions";

export function* getCategoryTopicsWorker():SagaIterator<void>{
    yield put(setForumCategoriesStatus('pending'))
    try {
        const categories = yield call(getCategoriesTopics);
        yield put(setForumCategoriesData(categories))
        yield put(setForumCategoriesStatus('success'))
    }catch (e) {
        console.error(e)
        yield put(setForumCategoriesFailed(e.message))
        yield put(setForumCategoriesStatus('failed'))
    }
}

export function* addCategoryTopicWorker({payload}:ReturnType<typeof addCategoryTopicsAction>):SagaIterator<void>{
    try {
        yield call(addCategoryTopic, payload);
        yield call(getCategoryTopicsWorker);
    }catch (e) {
        console.error(e)
    }
}