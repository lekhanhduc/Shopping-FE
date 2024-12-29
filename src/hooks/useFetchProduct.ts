import { useState, useEffect } from 'react';
import { ApiResponse } from '../types/ApiResonse';
import { PageResponse } from '../types/PageResponse';
import { ProductCreationResponse } from '../types/ProductCreationResponse';
import { findAll } from '../api/ProductService';

const useFetchProducts = (currentPage: number) => {
    const [products, setProducts] = useState<ProductCreationResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result: ApiResponse<PageResponse<ProductCreationResponse>> = await findAll(currentPage);
                if (result && result.data && Array.isArray(result.data.data)) {
                    setProducts((prevProducts) => {
                        const existingProductIds = new Set(prevProducts.map(product => product.id));
                        const newProducts = result.data.data.filter(
                            (newProduct: ProductCreationResponse) => !existingProductIds.has(newProduct.id)
                        );
                        return [...prevProducts, ...newProducts];
                    });
                }
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage]);

    return { products, loading };
};

export default useFetchProducts;
