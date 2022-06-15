import {createAction} from "@reduxjs/toolkit";
import {LoadStatus, Nullable, User} from "shared/types";

export const getCategoryTopicsAction = createAction('forum/getCategoryTopicsAction');

export const addCategoryTopicsAction = createAction<{label:string}>('forum/addCategoryTopicsAction');


export enum forumActions {
    setCategoriesSuccess = 'forum/setCategoriesSuccess',
    setCategoriesFailed = 'forum/setCategoriesFailed',
    setCategoriesStatus = 'forum/setCategoriesStatus'
}

export const setForumCategoriesStatus = createAction<LoadStatus>(forumActions.setCategoriesStatus)

export const setForumCategoriesData = createAction<Nullable<User>>(
    forumActions.setCategoriesSuccess
)

export const setForumCategoriesFailed = createAction<string>(forumActions.setCategoriesFailed)