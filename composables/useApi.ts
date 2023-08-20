import {RequestOptions} from "http";
import {UseFetchOptions} from "#app";
// @ts-ignore
export const useApi: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()

    return useFetch(request, {baseURL: config.public.baseUrl, ...opts })
}
