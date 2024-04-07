import { useCallback } from 'react';

export default function UseCopy() {
    const copyToClipboard = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } finally {

        }
    }, []);
    return copyToClipboard;
}