import {AppState} from 'src';

export type SelectorResponse<DATA> = (state: AppState)=>DATA;


