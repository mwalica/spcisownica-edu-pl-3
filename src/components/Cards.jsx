import CardItem from "./CardItem"

function Cards({posts}) {
    return (<section className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">

            <div className="w-full  mx-auto max-w-5xl px-4 sm:px-0 lg:px-8 mb-8 flex flex-col items-start">
                <div className="w-full px-4 sm:px-0 mb-8 border-b border-gray-900/10 pb-8">
                    <p className="uppercase text-blue-600 font-semibold ">Wydarzenia w naszej szkole</p>
                    <h3 className="text-3xl font-semibold leading-10 tracking-tight text-gray-800">Aktualności</h3>
                </div>
            </div>


            <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <CardItem post={post} key={post.id} />
                ))}
            </div>
        </div>
    </section>)
}

export default Cards