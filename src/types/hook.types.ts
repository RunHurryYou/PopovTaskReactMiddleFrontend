interface IRefetchParams {
  params: {
    _limit: number;
  };
}

interface IRefecthData{
    id: number,
    title: string
}

export interface IUseFetch {
    data: IRefecthData[],
    isLoading: boolean,
    error: boolean,
    refetch: (options: IRefetchParams) => void
}