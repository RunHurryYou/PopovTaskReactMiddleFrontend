import type { IUseFetch } from "../../types/hook.types"
const useFetch = (url: string): IUseFetch => {
    console.log(url);
    return {
        data: [],
        isLoading: false,
        error: false,
        refetch: () => {}
    }
}

export default useFetch