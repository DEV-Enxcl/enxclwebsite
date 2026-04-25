// src/GTMBody.js
import { useEffect } from 'react';

const GTMBody = () => {
  useEffect(() => {
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWSW5G44"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }, []);

  return null;
};

export default GTMBody;
