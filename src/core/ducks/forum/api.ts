import {request} from "src/api/request";
import {ApiLocation} from "src/api";
import {CategoryTopic} from "src/core/ducks/forum/types";

export const addCategoryTopic = request<CategoryTopic, {label: string}>({baseURL:'/', method: 'POST', url: ApiLocation.FORUM})

export const getCategoriesTopics = request<CategoryTopic[]>({method: 'GET', baseURL:'/', url: ApiLocation.FORUM});