import { useState, useCallback } from "react";

function useCopyToClipboard() {
  const [copiedText, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      // Check browser is support Clipboard API?
      if (!navigator.clipboard) {
        // Fallback for old browser
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } else {
        // Use Clipboard new API
        await navigator.clipboard.writeText(text);
      }

      setIsCopied(true);
      // Reset state after 2s
      setTimeout(() => setIsCopied(false), 2000);

      return true;
    } catch (error) {
      console.error("Failed to copy:", error);
      return false;
    }
  }, []);

  return { copiedText, copyToClipboard };
}

export default useCopyToClipboard;
