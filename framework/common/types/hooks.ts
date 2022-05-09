import { SWRResponse } from "swr";
import { ApiFetcher, ApiFetcherOptions } from "./api";

export interface ApiHooks {
    cart: {
        useAddItem: MutationHook
        useCart: SWRHook
        useRemoveItem: MutationHook
    }
}

export type MutationHookContext<I, O> = {
    fetch: (input: I) => Promise<O>;
}

export type SWRHookContext<I, O> = {
    useData: (input: I) => Promise<O>;
}

export type HookFetcherContext<I, O> = {
    input: I;
    fetch: ApiFetcher<O>
    options: ApiFetcherOptions
}

export type HookFetcherOptions = {
    query: string;
}

export type HookFetcherFn<I, O, Data> = (context: HookFetcherContext<I, O>) => Promise<Data>

export type HookDescriptor = {
    fetcherInput: any
    fetcherOutput: any
    data: any
}

export type MutationHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<
        H["fetcherInput"], 
        H["fetcherOutput"], 
        H["data"]
    >
    useHook(
        context: MutationHookContext<H["fetcherInput"], H["data"]>
    ): () => (input: H["fetcherInput"]) => Promise<H["data"]> 
}

export type UseDataContext = {
    swrOptions: any
}

export type UseData<Data> = (context: UseDataContext) => Data

export type SWRHookResponse<Data> = SWRResponse<Data, any> & { isEmpty: boolean }

export type SWRHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<
        H["fetcherInput"], 
        H["fetcherOutput"], 
        H["data"]
    >
    useHook(
        context: {
            useData: UseData<SWRHookResponse<H["data"]>>
        }
    ): () => SWRHookResponse<H["data"]>
}

export type Hook = MutationHook | SWRHook;