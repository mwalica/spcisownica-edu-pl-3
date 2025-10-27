import PageTitle from "../components/PageTitle"
import logo_1 from "../assets/projects_logo_1.png";
import logo from "../assets/projects_logo_1.png";


function ProjectRownePage() {
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
                        <PageTitle title='Równe warunki rozwoju dla uczniów szkół podstawowych w Gminie Goleszów'
                                   subtitle='Projekty'/>

                        {/* content */}
                        <div>
                            <img
                                src={logo}
                                alt="loga i znaki projektu"
                                className="w-full border-8 shadow-lg border-white"
                            />

                            <h4 className="text-purple-500 font-medium text-base py-4">Zajęcia projektowe realizowane w
                                ramach Fundusze Europejskie dla Śląskiego 2021-2027<br/>
                                (Europejski Fundusz Społeczny+)<br/>
                                dla Priorytetu: FESL.06.00-Fundusze Europejskie dla edukacji<br/>
                                dla Działania: FESL.06.02-Kształcenie ogólne</h4>

                            <p className="par-1 text font-semibold">W Szkole Podstawowej w Cisownicy realizujemy
                                zajęcia:</p>


                            {/* listy nauczycieli */}

                            {/* info container */}
                            <div className='w-full  mx-auto max-w-5xl px-8'>
                                <dl className='divide-y divide-gray-200'>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>Zajęcia dydaktyczno-wyrównawcze:</dt>
                                        <dd className='info-item-dd'>
                                            Agnieszka Choińska<br/>
                                            Edyta Badura <br/>
                                            Chowaniok Gabriela <br/>
                                            Sztwiertnia Krystyna <br/>
                                            Holisz Klaudia <br/>
                                            Kobiela Izabela
                                        </dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>Zajęcia kreatywne:</dt>
                                        <dd className='info-item-dd'>
                                            Gabriela Chowaniok
                                        </dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>
                                            Zajęcia sportowe:
                                        </dt>
                                        <dd className='info-item-dd'>
                                            Adam Heczko
                                        </dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>Zajęcia socjoterapeutyczne:</dt>
                                        <dd className='info-item-dd'>Krzysztof Jastrzębski</dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>Zajęcia teatralne:</dt>
                                        <dd className='info-item-dd'>Ewelina Czermak-Najbor</dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>Zajęcia umuzykalniające:</dt>
                                        <dd className='info-item-dd'>Elżbieta Stanieczek</dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>Zajęcia logopodyczne:</dt>
                                        <dd className='info-item-dd'>Edyta Badura<br/> Dorota Somerlik</dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>„Robo-Sami”- zajęcia kreatywne z robotyki:</dt>
                                        <dd className='info-item-dd'>Samuel Gogółka</dd>
                                    </div>
                                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                                        <dt className='info-item-dt'>„Matematyczni poszukiwacze”- zajęcia rozwijające
                                            matematyczne talenty:
                                        </dt>
                                        <dd className='info-item-dd'>Beata Pieńkowska</dd>
                                    </div>
                                </dl>
                            </div>
                            {/*end listy nauczycieli*/}
                        </div>
                        <div className="mt-12">
                            <ul className="mb-4">
                                <li>Beneficjent: <strong>Gmina Goleszów</strong></li>
                                <li>Projekt dofinansowany w ramach Funduszy Europejskich dla Śląskiego 2021-2027
                                    (Europejski
                                    Fundusz Społeczny+)
                                </li>
                                <li>Wartość wydatków kwalifikowalnych: <strong>716 132,55 zł</strong></li>
                                <li>Wartość dofinansowania: <strong>680 325,92 zł</strong></li>
                                <li>Okres realizacji projektu: <strong>2024-07-01 - 2026-06-30</strong></li>
                            </ul>
                            <p className='par-1'>
                                Celem projektu jest stworzenie równych warunków rozwoju dla uczniów szkół podstawowych,
                                funkcjonujących na terenie Gminy Goleszów, poprzez organizację specjalistycznych zajęć
                                dla 506 uczniów, doposażenie szkół w pomoce dydaktyczne i materiały potrzebne do
                                prowadzenia zajęć oraz udział 49 nauczycieli w studiach podyplomowych, szkoleniach i
                                kursach podnoszących kwalifikacje. W projekcie biorą udział następujące szkoły
                                podstawowe:
                            </p>
                            <ol className="ms-8 mb-8">
                                <li>1. Szkoła Podstawowa w Cisownicy;</li>
                                <li>2. Szkoła Podstawowa w Goleszowie;</li>
                                <li>3. Szkoła Podstawowa w Bażanowicach;</li>
                                <li>4. Szkoła Podstawowa w Dzięgielowie.</li>
                            </ol>

                            <ul>
                                <p>
                                    Spodziewane efekty projektu:
                                </p>
                                <li>- Liczba przedstawicieli kadry szkół i placówek systemu oświaty, którzy uzyskali
                                    kwalifikacje po opuszczeniu programu -&nbsp;44 os.
                                </li>
                                <li>- Liczba uczniów, którzy nabyli kwalifikacje po opuszczeniu programu - 453 os.</li>
                            </ul>
                            <div className="mt-8">
                                <p>Dokumenty do pobrania:</p>
                                <ul>
                                    <li className='text-blue-700 text-lg hover:text-blue-500'><a
                                        href={`${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/formularz_rekrutacji_do_projektu.pdf`}
                                        target="_blank"
                                        rel="noreferrer">Formularz rekrutacyjny</a></li>
                                    <li className='text-blue-700 text-lg hover:text-blue-500'><a
                                        href={`${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/regulamin_rekrutacji_do_projektu.pdf`}
                                        target="_blank"
                                        rel="noreferrer">Regulamin rekrutacji do projektu
                                        Równe warunki rozwoju dla uczniów szkół podstawowych
                                        w Gminie Goleszów</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectRownePage;