import PageTitle from "../components/PageTitle"
import { LinkIcon } from '@heroicons/react/20/solid'
import img1 from "../assets/jak_sie_uczyc.jpg"
import img2 from "../assets/bezpieczny_internet.jpg"
import img3 from "../assets/porady_dla_rodzicow.jpg"

function AdviceForParentsPage() {
    return (<section className="flex-1">
        <div className='relative isolate'>
            {/* svg graphic 2 */}
            <div
                className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
                aria-hidden='true'
            >
                <div
                    className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
                    style={{
                        clipPath:
                            "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                    }}
                />
            </div>

            {/* --------------------------------- */}
            <div className='overflow-hidden'>
                <div className='mx-auto max-w-5xl px-6 pb-32 pt-12 sm:pt-16 lg:px-8 lg:pt-16'>
                    {/* title */}
                    <PageTitle title='Rady dla rodziców' subtitle='Pedagog i Psycholog' />

                    {/* content */}
                    <div className="flex flex-col items-center space-y-4">
                        <p>Linki do materiałów: </p>
                        <div className="overflow-hidden rounded-md bg-white shadow">

                            <ul role="list" className="flex divide-x divide-gray-200">

                                <li className="px-6 py-4">
                                    <a href="https://www.gov.pl/web/edukacja-i-nauka/cyberprzemoc--poradnik-dla-rodzicow" className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}
                                        Cyberprzemoc poradnik dla rodzicow</a>

                                </li>
                            </ul>
                        </div>
                        {/* info container */}
                        <div className="flex-1 flex flex-col items-center space-y-4">
                            <img
                                src={img1}
                                alt="plakat jak się uczyć"
                                className="w-2/3 border-8 shadow-lg border-white"
                            />
                            <img
                                src={img2}
                                alt="plakat bezpieczny internet"
                                className="w-2/3 border-8 shadow-lg border-white"
                            />
                            <img
                                src={img3}
                                alt="plakat porady dla rodziców"
                                className="w-2/3 border-8 shadow-lg border-white"
                            />
                            <p className="par-1 indent-0">Grupy psychologiczno-pedagogicznej dla rodziców i uczniów stworzona na Facebooku<br />
                                *Link przekierowujący Was do niej: <a href="https://www.facebook.com/groups/1300101273520899/" target="_blank" rel="noreferrer" className="font-medium text-purple-600"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}https://www.facebook.com/groups/1300101273520899/</a></p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default AdviceForParentsPage