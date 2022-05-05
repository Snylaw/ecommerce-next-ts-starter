import { ApiFetcher, ApiFetcherOptions } from "./api";

export interface ApiHooks {
    cart: {
        useAddItem: MutationHook
        useCart: any
    }
}

export type MutationHookContext<I, O> = {
    fetch: (input: I) => Promise<O>;
}

export type HookFetcherContext<I, O> = {
    input: I;
    fetch: ApiFetcher<O>
    options: ApiFetcherOptions
}

export type HookFetcherOptions = {
    query: string;
}

export type HookFetcherFn<I, O> = (context: HookFetcherContext<I, O>) => Promise<O>

export type HookDescriptor = {
    fetcherInput: any
    data: any
}

export type MutationHook<H extends HookDescriptor = any> = {
    fetcherOptions: HookFetcherOptions
    fetcher: HookFetcherFn<H["fetcherInput"], H["data"]>
    useHook(
        context: MutationHookContext<H["fetcherInput"], H["data"]>
    ): (input: H["fetcherInput"]) => Promise<H["data"]> 
}