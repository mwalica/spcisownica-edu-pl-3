import PageTitle from "../components/PageTitle"
import logo_1 from "../assets/nprcz.jpg"

function BooksProgramPage() {
    return (
        <section className="flex-1">
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
                        <PageTitle title='Narodowy Program Rozwoju Czytelnictwa' subtitle='Projekty'/>

                        {/* content */}
                        <div>
                            <div className="flex justify-center">
                                <img src={logo_1} alt="logo aktywna tablica" className="text-center mb-8"/>
                            </div>

                            <p className='par-1'>
                                W ubiegłym roku nasza szkoła otrzymała dofinansowanie w ramach Narodowego Programu
                                Rozwoju Czytelnictwa 2.0 na lata 2021-2025, w którym udział był możliwy dzięki wsparciu
                                ze strony gminy Goleszów. <b>Narodowy Program Rozwoju Czytelnictwa</b> przyniósł wiele
                                korzyści
                                dla uczniów i całej społeczności szkolnej. Z otrzymanych środków finansowych zakupiono
                                583 książki, będące nowościami wydawniczymi dla dzieci w wieku szkolnym. Część kwoty
                                wykorzystano na realizację działań promujących czytelnictwo oraz wyposażenie biblioteki.
                                W ramach akcji czytelniczej "Poczytaj mi mamo, poczytaj mi tato" podjęto współpracę z
                                rodzicami uczniów, którzy czytali fragmenty książek oraz opowiadali o swoich zawodach i
                                zainteresowaniach, inspirując dzieci do nauki i rozwijania pasji. W świetlicy szkolnej
                                zorganizowano akcję "Czytanie na dywanie" podczas, której dzieci mogły wysłuchać
                                czytanych przez nauczycieli opowiadań i legend. W bibliotece powstały także wystawy
                                nowości książkowych oraz gazetki promujące czytelnictwo, które miały za zadanie wzbudzić
                                zainteresowanie uczniów literaturą. Przeprowadzono również quizy czytelnicze, które
                                zachęcały dzieci do aktywnego poznawania książek i rywalizacji w przyjaznym duchu.
                                Program przyczynił się do budowania kultury czytelniczej oraz pogłębiania więzi między
                                szkołą, uczniami i rodzicami.
                            </p>
                            <p className="par-1">W sumie na realizację programu Rozwoju Czytelnictwa 2.0 na
                                lata 2021-2025 w Szkole Podstawowej im. im. Jury Gajdzicy w Cisownicy, gmina
                                Goleszów
                                pozyskała dotację w wysokości 12 tys. zł. Warunkiem jego realizacji był również
                                wkład
                                własny, o który zadbała gmina Goleszów.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BooksProgramPage;