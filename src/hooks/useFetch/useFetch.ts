import { useState, useEffect } from "react"
import type { IUseFetch, IRefetchParams, IRefetchData } from "../../types/hook.types"
const useFetch = (url: string): IUseFetch => {
    const [data, setData] = useState<IRefetchData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async (url: string) => {
        fetch(url)
            .then(response => response.json())
            .then(json => {setData(json)})
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    }


    const refetch = (options: IRefetchParams | undefined) => {
        setIsLoading(true);
        setError(false);
        if(options?.params?._limit) {
            fetchData(`${url}?_limit=${options.params._limit}`);
        }
        else {
            fetchData(url);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData(url);
    }, [url]);

    return {
        data: data,
        isLoading: isLoading,
        error: error,
        refetch: refetch
    }
}

export default useFetch