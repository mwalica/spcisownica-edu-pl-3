import { useEffect } from "react"

const PageTitle = ({ title, subtitle }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='w-full mx-auto max-w-5xl px-4 sm:px-0 lg:px-8 mb-8 flex flex-col items-start'>
            <div className='w-full px-4 sm:px-0 mb-8 border-b border-gray-900/10 pb-8'>
                <p className='uppercase text-blue-600 font-semibold '>
                    {subtitle}
                </p>
                <h3 className='text-3xl font-semibold leading-10 tracking-tight text-gray-800'>
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default PageTitle