import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import CardsCis from "../../components/CardsCis"
import { getPostsCis } from "../../utils/getData"

function EventsCisPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const posts = useLoaderData()
    return (
        <>
            <CardsCis posts={posts.data.allCispreschools} />
        </>
    )
}

export default EventsCisPage

export async function loader() {

    const posts = await getPostsCis(50)
    return posts

}