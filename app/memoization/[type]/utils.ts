export const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {cache: "no-store"})
    return await res.json();
}

export const getDataWithSignal = async () => {
    const {signal} = new AbortController()
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {signal, cache: "no-store"})
    return await res.json();
}