export const removeCodeParams=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('code')) {
            urlParams.delete('code'); // Corrected: Just delete the 'code' parameter
            const newUrl = window.location.pathname + '?' + urlParams.toString();
            window.history.replaceState(null, '', newUrl);
   }
}
export const getCodeFromParams=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    return code;
}