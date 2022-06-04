import { AppState } from 'types/app'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export type SelectorResponse<DATA> = (state: AppState) => DATA
