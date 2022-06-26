import {TimeStamp} from "src/types/general";
import {ActionWithPayload, GenerateState, LoadStatus} from "shared/types";
import { forumActions } from "./actions";

export type CategoryTopic = {
    id: number;
    label: string;
    topics: {id: string}[]
} & TimeStamp;

export type Topic = {
    id: number;
    label: string;
    categoryId: number;
    comments: {id: string}[]
} & TimeStamp;

export type Reaction = {
    userId: number;
}

export type Comment = {
    id: number;
    title: string;
    text: string;
    parentId?: number;
    authorId: number;
    author: {
        name: string;
        avatar: null | string;
    }
    answers: Comment[];
    reactions: Reaction[]
} & TimeStamp;

export type ForumState = {
    categories: GenerateState<CategoryTopic[]>;
    topics: GenerateState<Topic[]>;
    comments: GenerateState<Comment[]>;
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