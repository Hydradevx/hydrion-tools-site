import { useEffect } from "react";

function RedirectToDiscord() {
  useEffect(() => {
    window.location.href = "https://discord.gg/6Tufbvnebj";
  }, []);

  return null; 
}

export default RedirectToDiscord;