import { getConfig } from "@framework/api/config";
import { 
    ApiProvider as CoreApiProvider, 
    useApiProvider as useCoreApiProvider 
} from "@common";
import { shopifyHooks } from "./hooks";
import { ReactNode } from "react";

const config = getConfig()

interface ShopifyApiProviderProps {
    children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
    
    return (
        <CoreApiProvider 
            config={{...config}}
            hooks={shopifyHooks}
        >
            {children}
        </CoreApiProvider>
    )
}

export const useApiProvider = () => useCoreApiProvider()