export default async function handler(req, res)
{
    const { data } = req.query
    try
    {
        const fetchData = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBHkPeo9NO8ScnUYdsmUPds7E8S-7xBKZ0&cx=c5c58502e31b7428e&q=${data}`)
        const apiData = await fetchData.json()
        res.json({ l: apiData })
    } catch (error)
    {
        res.status(404).send({ error: 'failed to fetch data' })
    }
}