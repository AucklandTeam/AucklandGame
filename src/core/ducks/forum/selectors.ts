import {SelectorResponse} from "src/core/store/selectors";
import {ForumState} from "src/core/ducks/forum/types";
import {useSelector} from "react-redux";

export const forumCategoriesSelector: SelectorResponse<ForumState['categories']> = ({forum})=>forum.categories;


export const useForumCategoriesInfo = () => useSelector(forumCategoriesSelector)