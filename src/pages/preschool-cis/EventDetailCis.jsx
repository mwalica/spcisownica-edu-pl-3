import { useNavigate, useLoaderData } from "react-router-dom"
import { getPostCis } from "../../utils/getData"
import PageTitle from "../../components/PageTitle"
import ReactMarkdown from "react-markdown"

function EventDetailCisPage() {
    const navigate = useNavigate()
    const post = useLoaderData()


    function goBack() {
        navigate("../preschool-cis/events")
    }
    return (
        <div className='mx-auto max-w-5xl px-6 pb-32 pt-12 sm:pt-16 lg:px-8 lg:pt-16'>
            {/* title */}
            <PageTitle title={post.data.cispreschool.title} subtitle='Wydarzenia' />

            {/* content */}
            <div>
                <div className="par-1 indent-0">
                    <ReactMarkdown>{post.data.cispreschool.description}</ReactMarkdown>
                </div>
                <figure className="flex flex-col items-center space-y-4">
                    {
                        post.data.cispreschool.images.length > 0 && post.data.cispreschool.images.map(image => (
                            <img
                                key={image.url}
                                src={image.url}
                                alt={image.alt}
                                className="w-2/3 border-8 shadow-lg border-white"
                            />
                        ))
                    }
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={goBack}
                    >
                        Powrót
                    </button>
                </figure>

            </div>
        </div>

    )
}

export default EventDetailCisPage

export async function loader({ params }) {
    const eventId = params.eventId
    const post = await getPostCis(eventId)

    return post
}