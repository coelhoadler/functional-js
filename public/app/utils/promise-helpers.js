export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);
    return param;
}

export const timeoutPromise = (milliseconds, promise) => {
    const PromiseError = new Promise((resolve, reject) =>
        setTimeout(() => reject('Tempo da Promise se esgotou!'), milliseconds)
    )
    return Promise.race([promise, PromiseError])
}