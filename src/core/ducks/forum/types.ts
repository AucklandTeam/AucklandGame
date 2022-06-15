import {TimeStamp} from "src/types/general";
import {ActionWithPayload, GenerateState, LoadStatus} from "shared/types";
import { forumActions } from "./actions";

export type CategoryTopic = {
    id: number;
    label: string;
} & TimeStamp;

export type ForumState = {
    categories: GenerateState<CategoryTopic[]>;
}


export type ForumActionStatus = ActionWithPayload<
    Extract<
        typeof forumActions,
        forumActions.setCategoriesSuccess
        >,
    LoadStatus
    >

export type ForumCategoriesActionData = ActionWithPayload<
    Extract<typeof forumActions, 'setCategoriesSuccess'>,
    CategoryTopic[]
    >

export type ForumActions = ForumActionStatus | ForumCategoriesActionData