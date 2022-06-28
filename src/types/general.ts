export type PUserSync = { login: string; avatar: string }

export type PUserUpdate = PUserSync & {id: number}


export type TimeStamp = {
	updatedAt: string
	createdAt: string
}
