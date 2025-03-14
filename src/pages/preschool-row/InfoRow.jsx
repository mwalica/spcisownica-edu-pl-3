import PageTitle from "../../components/PageTitle"

function InfoRowPage() {
    return (<section className="flex-1">
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
                    <PageTitle title='Informacje' subtitle='Przedszkole Równia' />

                    {/* content */}
                    <div className="px-8">
                        <dl>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                <dt className='info-item-dt'>Nazwa</dt>
                                <dd className='info-item-dd'>
                                    <strong>Oddziały Przedszkolne ZSP w Cisownicy</strong>
                                </dd>
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                <dt className='info-item-dt'>Adres</dt>
                                <dd className='info-item-dd'>
                                    <strong>Goleszów Równia, ul. Osiedlowa 17, 43-440 Goleszów</strong>
                                </dd>
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                <dt className='info-item-dt'>Telefon</dt>
                                <dd className='info-item-dd'>
                                    <strong>33 8528256</strong>
                                </dd>
                            </div>
                            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                <dt className='info-item-dt'>Realizowany program</dt>
                                <dd className='info-item-dd'>
                                    <strong>Rozwój - wychowanie - edukacja. Program wychowania przedszkolnego.</strong><br />
                                    Anna Stalmach - Tkacz, Karina Mucha , Nowa Era
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default InfoRowPage