import {AppState} from 'src/index';

export type SelectorResponse<DATA> = (state: AppState)=>DATA;


