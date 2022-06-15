import {ForumActions, ForumState} from "src/core/ducks/forum/types";
import {forumActions} from "src/core/ducks/forum/actions";

export const initialState: ForumState = {
    categories:{
        data: null,
        error: '',
        status: 'default'
    }
}


export const forumReducer = (
    state = initialState,
    action: ForumActions
) => {
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
                    status: action.payload
                }
            }
        case forumActions.setCategoriesFailed:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    error: action.payload
                }
            }
        default:
            return state
    }
}