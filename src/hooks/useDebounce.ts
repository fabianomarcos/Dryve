/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [delay, value]);

    return debouncedValue;
};
