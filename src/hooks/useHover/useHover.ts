import { useState, useRef, useEffect } from "react"
import type { IUseHovered } from "../../types/hook.types"
const useHover = (): IUseHovered => {
    const [hovered, setHovered] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node: HTMLDivElement| null = ref.current;
        if ( node) {
            node.addEventListener('mouseenter', () => setHovered(true));
            node.addEventListener('mouseleave', () => setHovered(false));
        }
        return () => {
            if (node) {
                node.removeEventListener('mouseenter', () => setHovered(true));
                node.removeEventListener('mouseleave', () => setHovered(false));
            }
        }
    }, []);

    return {
        hovered: hovered,
        ref: ref
    }
}

export default useHover;