import axios, {AxiosRequestConfig} from 'axios';
import {ENDPOINTS} from 'src/shared/consts';

type RequestSettings = Pick<AxiosRequestConfig, 'url' | 'method' | 'headers'>;

type RequestResponse<RESPONSE, REQUEST> = (params?: REQUEST) => Promise<RESPONSE>

export function request<RESPONSE, REQUEST extends Record<string, unknown> | FormData | undefined = undefined>
(settings: RequestSettings): RequestResponse<RESPONSE, REQUEST> {
    return async (data?: REQUEST) => {
        try {
            const response = await axios(
                {
                    baseURL: ENDPOINTS.HTTP,
                    data: data ?? {},
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true,
                    ...settings
                });
            return response.data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                throw JSON.parse(e.request?.response);
            }
            throw e;
        }
    };
}
