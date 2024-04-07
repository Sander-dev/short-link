import { useCallback } from 'react';

export default function UsePaste(props) {
    const pasteFromClipboard = useCallback(async () => {
        try {
            const response = await navigator.clipboard.readText();
            pasteFromClipboard.value = response;
            alert('Texto copiado para a área de transferência');
        } finally {

        }
    }, []);
    return pasteFromClipboard;
}
