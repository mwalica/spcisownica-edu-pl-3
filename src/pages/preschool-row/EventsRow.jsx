import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import CardsRow from "../../components/CardsRow"
import { getPostsRow } from "../../utils/getData"

function EventsRowPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const posts = useLoaderData()
    return (
        <>
            <CardsRow posts={posts.data.allPreschools} />
        </>
    )
}

export default EventsRowPage

export async function loader() {

    const posts = await getPostsRow(50)
    return posts

}