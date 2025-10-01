export interface IRefetchParams {
  params: {
    _limit?: number;
  };
}

export interface IRefetchData{
    id: number,
    title: string
}

export interface IUseFetch {
    data: IRefetchData[],
    isLoading: boolean,
    error: boolean,
    refetch: (options?: IRefetchParams) => void
}

export type IUseLocalStorage = [
        value: string,
        functions: {setItem: (value: string) => void, removeItem: () => void}
]