import PageTitle from "../components/PageTitle"

function ContributionPage() {
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
                        <PageTitle title='Składka' subtitle='Rodzice' />

                        {/* content */}
                        <div>
                            <p className="pb-4">
                                Wysokość składki na Radę Rodziców w roku szkolnym 2020/2021 wynosi:</p>
                            <ul className="flex flex-col space-y-4">
                                <li>50 złotych za <strong>1 dziecko</strong></li>
                                <li>30 złotych za <strong>2 dziecko</strong></li>
                                <li><strong>3 dziecko i kolejne</strong> zwolnione jest ze składki</li>
                            </ul>


                            <p className="par-1 indent-0 pt-4">Wpłaty na Radę Rodziców można dokonać u wychowawcy lub przelewem na konto Rady Rodziców z dopiskiem <strong>wpłata na Radę Rodziców za dziecko ..................... (imię i nazwisko należy wpisać)</strong>.

                                <br />Bank Spółdzielczy w Cieszynie/oddział Goleszów
                                Nr konta <strong>63 8113 1020 2002 0049 4317 0001</strong></p>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContributionPage