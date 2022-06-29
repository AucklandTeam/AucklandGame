import { ForumActions, ForumState } from 'src/core/ducks/forum/types'
import { forumActions } from 'src/core/ducks/forum/actions'

export const initialState: ForumState = {
    categories: {
        data: null,
        error: '',
        status: 'default',
    },
    topics: {
        data: null,
        error: '',
        status: 'default',
    },
    comments: {
        data: null,
        error: '',
        status: 'default',
    },
}

export const forumReducer = (state = initialState, action: ForumActions) => {
    switch (action.type) {
        case forumActions.setCategoriesSuccess:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    data: action.payload,
                },
            }
        case forumActions.setCategoriesStatus:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    status: action.payload,
                },
            }
        case forumActions.setCategoriesFailed:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    error: action.payload,
                },
            }
        case forumActions.setTopicsSuccess:
            return {
                ...state,
                topics: {
                    ...state.topics,
                    data: action.payload,
                },
            }
        case forumActions.setTopicsStatus:
            return {
                ...state,
                topics: {
                    ...state.topics,
                    status: action.payload,
                },
            }
        case forumActions.setTopicsFailed:
            return {
                ...state,
                topics: {
                    ...state.topics,
                    error: action.payload,
                },
            }
        case forumActions.setCommentsSuccess:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    data: action.payload,
                },
            }
        case forumActions.setCommentsStatus:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    status: action.payload,
                },
            }
        case forumActions.setCommentsFailed:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    error: action.payload,
                },
            }
        default:
            return state
    }
}
