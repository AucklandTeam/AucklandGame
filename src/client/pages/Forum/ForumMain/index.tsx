import React, { FC, useEffect } from 'react'
import NotGameWrap from 'client/components/notGameWrap'
import styles from 'client/styles/base.scss'
import ForumListItem from 'client/components/forumListItem'
import { PageMeta } from 'components/pageMeta'
import { useUserInfo } from 'src/core/ducks/auth/selectors'
import TextInput from 'components/inputs'
import Form from 'components/form'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { initialState, TextFieldsCategory } from 'pages/Forum/shared'
import { CategoryTopic } from 'pages/Forum/types'
import { addCategoryTopicsAction, getCategoryTopicsAction } from 'src/core/ducks/forum/actions'
import { useForumCategoriesInfo } from 'src/core/ducks/forum/selectors'
import { useTranslation } from 'react-i18next'

const ForumMain: FC = () => {
    const admins = ['AucklandAdmin', 'AucklandAdmin2']
    const dispatch = useAppDispatch()
    const { data: user } = useUserInfo()
    const { data: categories } = useForumCategoriesInfo()
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(getCategoryTopicsAction())
    }, [])

    const { values, handleChange, handleBlur, handleSubmit, isValid, formError } = useForm<CategoryTopic>({
        initialState,
        onSubmit: values => {
            if (!isValid) return
            dispatch(addCategoryTopicsAction({ ...values }))
        },
    })
    return (
        <NotGameWrap
            titlePage={t('forumTitle')}
            designForForum
        >
            <PageMeta
                title={`${t('forumTitle')} | ${t('gameTitle')}`}
                description={t('gameDescription')}
            />
            <table className={styles.forumsTable}>
                <thead>
                    <tr>
                        <th className={styles.forumTitleHeader}>{t('forums')}</th>
                        <th className={styles.forumTopicsHeader}>{t('topics')}</th>
                    </tr>
                </thead>
                <tbody>
                    {categories &&
                        categories.map(item => (
                            <ForumListItem
                                id={item.id}
                                key={item.id}
                                forumTitle={item.label}
                                forumTopicsCount={item.topics.length}
                            />
                        ))}
                </tbody>
            </table>
            {admins.some(key => user?.login === key) && (
                <div>
                    <Form
                        handleSubmit={handleSubmit}
                        submitTitle={t('addCategory')}
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
