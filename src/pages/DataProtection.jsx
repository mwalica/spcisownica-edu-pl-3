import PageTitle from "../components/PageTitle"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon } from "@heroicons/react/24/outline"

function DataProtectionPage() {
return (
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
                <div className='overflow-hidden'>
                    <div className='mx-auto max-w-5xl px-6 pb-32 pt-12 sm:pt-16 lg:px-8 lg:pt-16'>
                        {/* title */}
                        <PageTitle title='Ochrona danych' subtitle='Bezpieczeństwo' />

                        {/* content */}
                        <div>
                        <dl>
                        <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                            <dt className='info-item-dt'>Inspektor Ochrony Danych</dt>
                            <dd className='info-item-dd font-medium'>
                                Paulina Jochacy
                            </dd>
                        </div>
                        <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                            <dt className='info-item-dt'>E-mail</dt>
                            <dd className='info-item-dd'>
                                <a className="text-blue-800 hover:text-blue-900 hover:underline" href='mailto: iod@cuw.goleszow.pl'>
                                    <EnvelopeIcon className='inline h-6 w-6 ' />{" "}
                                    iod@cuw.goleszow.pl
                                </a>
                                <strong></strong>
                            </dd>
                        </div>
                        <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                            <dt className='info-item-dt'>Dokument do pobrania</dt>
                            <dd className='info-item-dd'>
                                <a href={`${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/przetwarzanie_danych_osobowych.pdf`} className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><PaperClipIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}Informacja o przetwarzaniu danych osobowych</a>
                            </dd>
                        </div>
                    </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default DataProtectionPage