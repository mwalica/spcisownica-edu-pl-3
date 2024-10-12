import { useRouteError } from "react-router-dom"

import TopMenu from "../components/TopMenu"
import Footer from "../components/Footer"

function ErrorPage() {

    const error = useRouteError()

    let message = "Błąd ogólny"

    if (error.status === 500) {
        message = error.data.message
    }

    if (error.status === 404) {
        message = "Nie znaleziono strony (404)"
    }

    return (<>
        <TopMenu />
        <section className="flex-1">
            <div className='relative isolate'>
                {/* svg graphic 2 */}
                <div
                    className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
                    aria-hidden='true'
                >
                    <div
                        className='aspect-[801/600] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
                        style={{
                            clipPath:
                                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                        }}
                    />
                </div>

                {/* --------------------------------- */}
                <div className='h-64 overflow-hidden flex justify-center items-center'>
                    <h5 className="font-medium text-gray-800 text-2xl">{message}</h5>
                </div>
            </div>
        </section>
        <Footer />
    </>)
}

export default ErrorPage