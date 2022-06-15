import React, { FC } from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import styles from 'client/styles/base.scss'
import ForumListItem from 'client/components/forumListItem'
import {PageMeta} from 'components/pageMeta';
import {useUserInfo} from "src/core/ducks/auth/selectors";
import TextInput from "components/Inputs";
import Form from "components/form";
import {useAppDispatch} from "src/ssr";
import useForm from "src/hooks/useForm";
import {initialState, TextFieldsCategory} from "pages/Forum/shared";
import {CategoryTopic} from "pages/Forum/types";
import {addCategoryTopicsAction} from "src/core/ducks/forum/actions";
import {useForumCategoriesInfo} from "src/core/ducks/forum/selectors";

const ForumMain: FC = () => {
	const { data: user } = useUserInfo()
	const {data: categories} = useForumCategoriesInfo();

	const dispatch = useAppDispatch()
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		formError
	} = useForm<CategoryTopic>({
		initialState,
		onSubmit: values => {
			if (!isValid) return
			dispatch(addCategoryTopicsAction({ ...values }))
		}
	})
	return (
		<NotGameWrap titlePage={'Auckland Forum'}>
			<PageMeta
				title='Auckland Forum | Destroy Asteroids'
				description='Game by Auckland Team on Yandex Practicum'
			/>v
			<table className={styles.forumsTable}>
				<thead>
				<tr>
					<th className={styles.forumTitleHeader}>Forums</th>
					<th className={styles.forumTopicsHeader}>Topics</th>
					<th className={styles.forumCommentsHeader}>Comments</th>
				</tr>
				</thead>
				<tbody>
				{categories && categories.map(item => (
					<ForumListItem
						key={item.id}
						forumTitle={item.label}
						forumTopicsCount={0}
						forumCommentsCount={0}
					/>
				))}
				</tbody>
			</table>
			{user.login === 'AucklandAdmin' && (
				<div>
					<Form
						handleSubmit={handleSubmit}
						submitTitle={'Added categories'}
						errorText={formError}
					>
						{TextFieldsCategory.map(({ name, type, title, validType }) => (
							<TextInput
								key={name}
								title={title}
								type={type}
								name={name}
								validType={validType}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values[name as keyof CategoryTopic]}
							/>
						))}
					</Form>
				</div>
			)}
		</NotGameWrap>
	)
}

export default ForumMain
