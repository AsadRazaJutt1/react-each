import { Children, ReactNode } from "react";
interface RenderMapProps<T> {
    render: (item: T, rest: any, idx: number) => ReactNode;
    of: T[];
    [key: string]: any;
}

/**
 * This will render map of items
 * @param {object} {render, of, ...rest}
 * @returns
 */
export function Each<T>({ render, of, ...rest }: RenderMapProps<T>) {
    return Children.toArray(of.map((item, idx) => render(item, rest, idx)));
}
