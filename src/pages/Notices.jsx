import { useLoaderData } from "react-router-dom"
import NoticesList from "../components/NoticesList"
import { getNotices } from "../utils/getData"

function NoticesPage() {
    const notices = useLoaderData()
    return (
        <>
            <NoticesList notices={notices.data.allNotices} />
        </>
    )
}

export default NoticesPage

export async function loader() {

    const notices = await getNotices(40)
    return notices

}
