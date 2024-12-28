import { ApiResponse } from "../types/ApiResonse"
import { PageResponse } from "../types/PageResponse"
import { ProductCreationResponse } from "../types/ProductCreationResponse"
import { INSTANCE } from "./Instance"


export const findAll = async (page: number): Promise<ApiResponse<PageResponse<ProductCreationResponse>>> => {
    const response = await fetch(`${INSTANCE}/products?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    const responseData: ApiResponse<PageResponse<ProductCreationResponse>> = await response.json();
    console.log(responseData);
    return responseData;
}
