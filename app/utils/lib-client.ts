export const requestDataFromClient = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    return await res.json()
}