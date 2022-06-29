export type AddReplyFormProps = {
    title: string
    text: string
    topicId: number
    likeCount: number
    commentId?: number
    authorId: number
}

export type ChangeReactionParam = {
    userId: number
    commentId: number
}
