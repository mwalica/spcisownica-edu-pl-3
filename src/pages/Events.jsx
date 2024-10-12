import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import Cards from "../components/Cards"
import { getPosts } from "../utils/getData"

function EventsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const posts = useLoaderData()
    return (
        <>
            <Cards posts={posts.data.allBlogs} />
        </>
    )
}

export default EventsPage

export async function loader() {

    const posts = await getPosts(50)
    return posts

}