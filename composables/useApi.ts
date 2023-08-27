import {RequestOptions} from "http";
import {UseFetchOptions} from "#app";
// @ts-ignore
export const useApi: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()
    if (opts === undefined){
        opts = {credentials: "include"}
    }
    opts.credentials = "include"
    console.log(config.public.baseUrl + request)
    return useFetch(request, {baseURL: config.public.baseUrl, ...opts })
}
