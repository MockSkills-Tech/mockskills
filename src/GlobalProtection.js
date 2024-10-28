// GlobalProtection.js
import { useEffect } from "react";

const GlobalProtection = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable Ctrl+C or Cmd+C for copying
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === "c") || (e.metaKey && e.key === "c")) {
        e.preventDefault();
        alert("Copying content is not allowed.");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // No UI rendering needed
};

export default GlobalProtection;
