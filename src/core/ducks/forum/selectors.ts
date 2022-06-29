import { SelectorResponse } from 'src/core/store/selectors'
import { ForumState } from 'src/core/ducks/forum/types'
import { useSelector } from 'react-redux'

export const forumCategoriesSelector: SelectorResponse<ForumState['categories']> = ({ forum }) => forum.categories

export const forumTopicsSelector: SelectorResponse<ForumState['topics']> = ({ forum }) => forum.topics

export const forumCommentsSelector: SelectorResponse<ForumState['comments']> = ({ forum }) => forum.comments

export const useForumCategoriesInfo = () => useSelector(forumCategoriesSelector)

export const useForumTopicsInfo = () => useSelector(forumTopicsSelector)

export const useForumCommentsInfo = () => useSelector(forumCommentsSelector)
