import PageTitle from "../components/PageTitle"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { LinkIcon } from '@heroicons/react/20/solid'

function LibraryPage() {
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
                        <PageTitle title='Biblioteka' subtitle='Informacje' />

                        {/* content */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="overflow-hidden rounded-md bg-white shadow">
                                <ul role="list" className="flex divide-x divide-gray-200">

                                    <li className="px-6 py-4">
                                        <a href="https://m020129.molnet.mol.pl/" className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}
                                            Biblioteka Online</a>

                                    </li>
                                    <li className="px-6 py-4">

                                        <a href="https://spcisownica.edu.pl/dokumenty/biblioteka_on_line.pdf" className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><PaperClipIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}Biblioteka instrukcje</a>

                                    </li>

                                </ul>
                            </div>
                            {/* info container */}
                            <div className="flex-1">
                                <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">Regulamin wypożyczania i udostępniania bezpłatnych podręczników oraz materiałów edukacyjnych</h4>
                                <ol className="list-decimal flex flex-col space-y-3 ps-8">
                                    <li>Podręczniki i materiały edukacyjne gromadzone są w bibliotece szkolnej i stanowią własność szkoły.</li>
                                    <li>Każdy podręcznik posiada numer inwentarzowy i jest przypisany do konkretnego ucznia.</li>
                                    <li>Podręczniki są wypożyczane na okres wskazany przez wychowawcę, jednak nie dłużej niż okres jednego roku szkolnego.</li>
                                    <li>Podręczniki należy zwrócić do biblioteki szkolnej w wyznaczonym wcześniej terminie.</li>
                                    <li>Udostępnione książki należy chronić przed zniszczeniem i zgubieniem. Wypożyczający powinien zwrócić uwagę na ich stan a zauważone uszkodzenia niezwłocznie zgłosić nauczycielowi bibliotekarzowi.</li>
                                    <li>Wypożyczający ponosi pełną odpowiedzialność materialną w przypadku zgubienia lub zniszczenia podręcznika.*</li>
                                    <li>Wypożyczający jest zobowiązany do przechowywania podręcznika w okładce.</li>
                                    <li>Podręczniki należy szanować jako dobro wspólne. W podręczniku nie wolno niczego pisać i zaznaczać. Podręczniki należy w wyznaczonym do tego miejscu podpisać - imieniem i nazwiskiem.</li>
                                    <li>W przypadku zmiany szkoły przez ucznia podręczniki należy zwrócić do biblioteki szkolnej.</li>
                                    <li>Na bieżąco należy dokonywać drobnych napraw czy ewentualnie wymiany okładki.</li>
                                    <li>Wypożyczający podpisuje oświadczenie, które jest zobowiązaniem do stosowania zasad niniejszego regulaminu.</li>
                                </ol>
                                <hr className="my-8" />
                                <p className="text-sm text-blue-800">*W przypadku zniszczenia, zgubienia lub nieoddania do biblioteki szkolnej wypożyczonych podręczników / materiałów edukacyjnych, rodzice /opiekunowie prawni/ ponoszą odpowiedzialność finansową zgodnie z art. 22 ak ust. 3 ustawy o systemie oświaty (Dz.U.z 20014r. poz.811)</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LibraryPage
