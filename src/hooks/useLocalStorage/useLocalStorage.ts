import { useState } from "react"
import type { IUseLocalStorage } from "../../types/hook.types"
const useLocalStorage = (key: string): IUseLocalStorage => {
    const [value, setValue] = useState<string>('');

    const setItem = (newValue: string) => {
        localStorage.setItem(key, newValue);
        setValue(newValue);
    }

    const removeItem = () => {
        localStorage.removeItem(key);
        setValue('');
    }

    return [
        value,
        {
            setItem,
            removeItem
        }
    ]
}

export default useLocalStorage