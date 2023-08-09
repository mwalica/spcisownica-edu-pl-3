import { PaperClipIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const tabs = [
    { name: 'Bezpieczna szkoła' },
    { name: 'Bezpieczeństwo cyfrowe' },
    { name: 'Ochrona danych' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Security() {
    return (
        <Tab.Group>
            <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
                    {tabs.map(tab => (
                        <Tab as={Fragment} key={tab.name}>
                            {({ selected }) => (
                                /* Use the `selected` state to conditionally style the selected tab. */
                                <button
                                    className={
                                        classNames(
                                            selected
                                                ? 'border-purple-600 text-blue-600 outline-none'
                                                : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800',
                                            'whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                        )
                                    }
                                >
                                    {tab.name}
                                </button>
                            )}
                        </Tab>
                    ))}

                </Tab.List>
            </div>


            <Tab.Panels>
                <Tab.Panel className="p-8">
                    <p className="par-1">
                        Dokument opracowany w Departamencie Wychowania i Kształcenia Integracyjnego Ministerstwa Edukacji Narodowej z udziałem ekspertów, po konsultacji z innymi resortami i instytucjami odpowiedzialnymi za bezpieczeństwo.</p>
                    <a href="https://www.spcisownica.edu.pl/dokumenty/bezpieczna_szkola.pdf" className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><PaperClipIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />BEZPIECZNA SZKOŁA Zagrożenia i zalecane działania profilaktyczne w zakresie bezpieczeństwa fizycznego i cyfrowego uczniów</a></Tab.Panel>
                <Tab.Panel className="p-8">
                    <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">Zasady postępowania dla uczniów</h4>
                    <ol className="list-decimal flex flex-col space-y-2">
                        <li>Nie udostępniaj w sieci swoich danych, takich jak imię, nazwisko, adres, numer telefonu</li>
                        <li>Nie zakładaj profili na portalach społecznościowych bez wiedzy i zgody rodziców</li>
                        <li>Nie udostępniaj swoich zdjęć nieznanym osobom</li>
                        <li>Nie rób zdjęć i nie nagrywaj filmów z udziałem osób, które sobie tego nie życzą</li>
                        <li>Nie umawiaj się z osobami znanymi tylko przez internet</li>
                        <li>Informuj rodziców lub nauczycieli, jeśli zdarzy się, że kontaktuje się z Tobą przez internet osoba, której nie znasz</li>
                        <li>Informuj rodziców lub nauczycieli o każdej podejrzanej sytuacji, w której czujesz się niepewnie</li>
                        <li>Zgłaszaj rodzicom lub nauczycielom każdą sytuację, w której zostałeś obrażony, np. w prywatnych komentarzach</li>
                        <li>Podchodź z rozwagą do informacji znalezionych w sieci - nie wszystkie są prawdziwe</li>
                        <li>Nie wykorzystuj zdjęć, których nie jesteś autorem (np. publikując je na swoich profilach społecznościowych)</li>
                        <li>Pamiętaj, że nikt nie jest anonimowy w internecie - nawet jeśli nie podajesz swojego prawdziwego imienia, łatwo można zweryfikować, że to Ty zamieściłeś w internecie jakąś informację/komentarz/zdjęcie</li>
                        <li>Komentując posty i zdjęcia innych, a także pisząc wiadomości tekstowe, pamiętaj o kulturze, nie używaj wulgaryzmów, nie obrażaj innych</li>
                        <li>Nie podłączaj do komputera Pendrive’ów, co do których nie masz pewności, że są bezpieczne</li>
                        <li>Nie klikaj w podejrzane linki</li>
                        <li>Jeśli masz jakiekolwiek wątpliwości, skonsultuj się z rodzicem lub nauczycielem</li>
                    </ol>
                </Tab.Panel>
                <Tab.Panel className="p-8">
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
                                <a href="https://www.spcisownica.edu.pl/dokumenty/przetwarzanie_danych_osobowych.pdf" className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><PaperClipIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}Informacja o przetwarzaniu danych osobowych</a>
                            </dd>
                        </div>
                    </dl>


                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Security