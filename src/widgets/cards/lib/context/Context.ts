import { createContext, useContext } from "react";

export const Context = createContext<undefined | CardProps>(undefined);

export function useThisContext() {
    const props = useContext(Context);
    if (props === undefined) {
        throw new Error('use this context must be used with a CardProps');
    }
    return props;
}