import {
    useMutation,
    useQueryClient,
    useQuery
} from "@tanstack/react-query";
import { addProductCartApi, fetchCartApi, removeProductFromCartApi, selectAllProductApi, selectProductApi, updateProductQuantityApi } from "../api/cartApi";

const queryClient = useQueryClient()
export const useCart = () => {
    return useQuery({
        queryKey: ["cart"],
        queryFn: fetchCartApi,
        staleTime: 1000 * 60 * 10,
        cacheTime: 30 * 60 * 1000, // 30 min memory cache
        onSuccess: (data) => {
            queryClient.setQueryData(["cart"], data);
        },
    })
}
export const useAddProductCart = () => {
    return useMutation({
        mutationFn: (data) => addProductCartApi(data),
        onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);
        },
    })
}
export const useUpdateProductInCart = () => {
    return useMutation({
        mutationFn: ({ productId, data }) => updateProductQuantityApi(productId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);
        },
    })
}
export const useSelectAllProductsInCart = () => {
    return useMutation({
        mutationFn: () => selectAllProductApi(),
        onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);
        },
    })
}
export const useRemoveProductFromCart = () => {
    return useMutation({
        mutationFn: (productId) => removeProductFromCartApi(productId),
        onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);
        },
    })
}