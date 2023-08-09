import PageTitle from "../components/PageTitle"
import { LinkIcon } from '@heroicons/react/20/solid'

function LaboratoriaPage() {
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
                        <PageTitle title='Laboratoria przyszłości' subtitle='Edukacja' />

                        {/* content */}
                        <div>
                            <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">NASZA SZKOŁA W PROGRAMIE LABORATORIA PRZYSZŁOŚCI.</h4>
                            <p className="par-1">
                                <strong>Laboratoria Przyszłości</strong> to inicjatywa edukacyjna realizowana przez Ministerstwo Edukacji i Nauki we współpracy z Centrum GovTech w Kancelarii Prezesa Rady Ministrów. Naszą wspólną misją jest stworzenie nowoczesnej szkoły, w której zajęcia będą prowadzone w sposób ciekawy, angażujący uczniów oraz sprzyjający odkrywaniu ich talentów i rozwijaniu zainteresowań.</p>

                            <p className="par-1"><strong>Celem inicjatywy</strong> jest wsparcie wszystkich szkół podstawowych w budowaniu wśród uczniów kompetencji przyszłości z tzw. kierunków STEAM (nauka, technologia, inżynieria, sztuka oraz matematyka). W ramach Laboratoriów Przyszłości organy prowadzące szkoły otrzymają od państwa wsparcie finansowe warte ponad miliard złotych, dzięki któremu miliony polskich uczniów będą mogły uczyć się poprzez eksperymentowanie i zdobywać w ten sposób praktyczne umiejętności. Wsparcie będzie przekazane jeszcze w 2021 roku w całości z góry – bez konieczności wniesienia wkładu własnego.</p>

                            <p className="par-1"><strong>Laboratoria Przyszłości</strong> to Program skierowany do szkół podstawowych oraz ogólnokształcących szkół artystycznych. Jego celem jest budowanie kompetencji kreatywnych i technicznych wśród uczniów. W ramach Programu szkoły otrzymają od państwa wsparcie finansowe na zakup wyposażenia technicznego niezbędnego do rozwoju umiejętności praktycznych wśród dzieci i młodzieży.</p>

                            <p className="par-1"><strong>Kreatywne myślenie</strong> oraz obsługa narzędzi to jedne z podstawowych umiejętności decydujących o rozwoju cywilizacyjnym, gospodarczym i społecznym. Wzrost innowacyjności oraz rozwój technologiczny spowodował, że umiejętności matematyczne, w zakresie nauk przyrodniczych, technologii i inżynierii są dziś ważniejsze niż kiedykolwiek wcześniej.</p>

                            <p className="par-1"><strong>W ramach Laboratoriów Przyszłości</strong> szkoły otrzymają wsparcie finansowe na zakup wyposażenia technicznego potrzebnego w kształtowaniu i rozwijaniu umiejętności manualnych i technicznych, umiejętności samodzielnego i krytycznego myślenia, zdolności myślenia matematycznego oraz umiejętności w zakresie nauk przyrodniczych, technologii i inżynierii, stosowania technologii informacyjno-komunikacyjnych, jak również pracy zespołowej, dobrej organizacji i dbania o porządek na stanowisku pracy oraz radzenia sobie w życiu codziennym.
                            </p>
                            <ul className="flex flex-col gap-2 text-blue-600">
                                <li><a className="hover:text-blue-900 hover:underline" href="https://www.gov.pl/web/laboratoria/uchwala" target="_blank" rel="noreferrer"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}Laboratoria przyszłości - uchwała</a></li>

                                <li><a className="hover:text-blue-900 hover:underline" href="https://www.gov.pl/web/laboratoria" target="_blank" rel="noreferrer"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}Laboratoria przyszłości - o programie</a></li>

                                <li><a className="hover:text-blue-900 hover:underline" href="https://www.youtube.com/watch?v=bY7JTuDc6D0" target="_blank" rel="noreferrer"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}Film</a></li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default LaboratoriaPage