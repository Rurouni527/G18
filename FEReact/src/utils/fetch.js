export const customFetch = async (url, options ) => {
    const req = await fetch(url, potions);
    return req.json();
}

export const httpGet = async (url) => {
    return customFetch(url);
};

export const httpPost = async (url, options) => {
    return customFetch(url, {
        method: 'POST',
        ...options,
    });
}

export const httpPatch = async (url, options) => {
    return customFetch(url, {
        method: 'PATCH',
        ...options,
    });
};

export const httpDelete = async (url, options) => {
    return customFetch(url, {
        method: 'DELETE',
        ...opstions,
    });
};