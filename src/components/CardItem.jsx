import ReactMarkdown from "react-markdown"
import { Link } from "react-router-dom"

function CardItem({ post }) {


    const formattedDate = Intl.DateTimeFormat("default", { dateStyle: "full" }).format(new Date(post.date))
    const startText = post.description.split(" ").slice(0, 20).join(" ")
    return (
        <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <img
                    className="w-full object-cover"
                    src={post.startImage.url}
                    alt={post.startImage.alt} />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">

                <div className="mb-2 flex items-center">
                    <div>
                        <p className="text-xs font-normal">
                            {post.author}
                        </p>
                        <div className="flex space-x-1 font-normal text-orange-500 text-xs">
                            <time>{formattedDate}</time>
                        </div>
                    </div>
                </div>

                <div className="flex-1">

                    <div className="mt-2 block">
                        <p className="text-xl font-normal uppercase text-pink-500">{post.title}</p>
                        <div className="mt-3 text-base">
                            <ReactMarkdown>{startText}</ReactMarkdown>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-2">
                    <Link
                        to={`/events/${post.id}`}
                        className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-200"
                    >
                        więcej
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default CardItem