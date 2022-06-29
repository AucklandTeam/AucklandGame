const verApi = '/api/v1'

export const ApiLocation = {
    BASE: verApi,
    USER: {
        SUNC: `${verApi}/user-sync`,
        UPDATE: `${verApi}/user-update`,
    },
    FORUM: `${verApi}/forum`,
    TOPICS: `${verApi}/topics`,
    TOPIC: `${verApi}/topic`,
    COMMENT: `${verApi}/comment`,
    REACTION: `${verApi}/reaction`,
}
