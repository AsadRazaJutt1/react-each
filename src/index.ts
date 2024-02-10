import { Children, ReactNode } from "react";
interface RenderMapProps<T> {
    render: (item: T, idx: number) => ReactNode;
    of: T[];
}

/**
 * This will render map of items
 * @param {object} {render, of}
 * @returns
 */
export function Each<T>({ render, of }: RenderMapProps<T>) {
    return Children.toArray(of.map((item, idx) => render(item, idx)));
}
