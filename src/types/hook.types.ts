import type { Ref } from "react";

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

export interface IUseHovered {
    hovered: boolean,
    ref: Ref<HTMLDivElement> | Ref<null>
}

export interface IUseWindowOptions{
  capture: boolean,
  passive: boolean,
  once: boolean,
  signal: AbortSignal
}

export type IUseWindowScroll = [
        { x: number, y: number },
        ({ x, y }: { x?: number, y?: number }) => void
]