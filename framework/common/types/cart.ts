
interface Discount {
    value: number;
}

export interface Cart {
    id: string;
    createdAt: string;
    currency: {
        code: string;
    };
    taxesIncluded: boolean;
    // taxes, discounts, shipping, etc excluded
    lineItemsSubtotalPrice: number;
    // taxes, discounts, shipping, etc included
    totalPrice: number;
    lineItems: any[];
    discounts: Discount[];
}