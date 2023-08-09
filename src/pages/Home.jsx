import { useEffect } from "react"
import { useLoaderData, defer } from "react-router-dom"
import { getNotices, getPosts } from "../utils/getData"

import Hero from "../components/Hero"
import NoticesList from "../components/NoticesList"
import Cards from "../components/Cards"


const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { notices, posts } = useLoaderData()

    return (
        <>
            <Hero />
            <div><NoticesList notices={notices.data.allNotices} /></div>


            <Cards posts={posts.data.allBlogs} />
        </>
    )
}

export default HomePage

export async function loader() {

    const resNotices = await getNotices(3)
    const resPosts = await getPosts(3)
    const notices = await resNotices.json()
    const posts = await resPosts.json()
    return defer({ notices, posts })

}