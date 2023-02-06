// Function that get the deployed backend url if it exists, otherwise it returns the local url

export const getBackendUrl = () => {
    let DOMAIN =   "http://localhost:8080" // "http://localhost:3306/" // "https://back-app-zfdf6qwoza-nw.a.run.app"
    //if (process.env.REACT_APP_BACKEND_URL) {
    //    return process.env.REACT_APP_BACKEND_URL;
    //}
    //else {
    //    return DOMAIN; // 'http://localhost:8080';
    //}
    return DOMAIN
    //to optimize in future: return process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
}