import PageTitle from "../components/PageTitle"

function AccessibilityPage() {
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
                        <PageTitle title='Deklaracja dostępności' subtitle='Informacje' />

                        {/* content */}
                        <div>
                            <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">Oświadczenie w sprawie dostępności</h4>
                            <p className="par-1">Szkoła Podstawowa im. Jury Gajdzicy w Cisownicy zobowiązuje się zapewnić dostępność swojej strony internetowej: http://www.spcisownica.edu.pl zgodnie z z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.</p>

                            <p className="par-1">Niniejsze oświadczenie w sprawie dostępności ma zastosowanie do <a className="text-blue-800 hover:text-blue-900 hover:underline" href="https://www.spcisownica.edu.pl">https://www.spcisownica.edu.pl</a></p>
                            <ul>
                                <li>Data publikacji strony internetowej: <strong>2018-09-01</strong></li>
                                <li>Data ostatniej istotnej aktualizacji: <strong>2023-08-09</strong></li>
                            </ul>
                            <p className="par-1">Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot publiczny.</p>

                            <p className="par-1">Strona internetowa jest częściowo zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych z powodu niezgodności lub wyłączeń wymienionych poniżej:</p>
                            <ol className="list-decimal flex flex-col space-y-3 ps-8 my-2 font-medium">
                                <li>filmy nie posiadają audiodeskrypcji</li>
                                <li>niektóre zdjęcia z wydarzeń nie posiadają pełnych opisów alternatywnych</li>
                                <li>mapy są wyłączone z obowiązku zapewniania dostępności</li>
                                <li>dokumenty w PDF nie są dokumentami edytowalnymi</li>
                                <li>część plików nie jest dostępnych cyfrowo</li>
                            </ol>
                            <p className="par-1">Wygląd strony:</p>
                            <ol className="list-decimal flex flex-col space-y-3 ps-8 my-2 font-medium">
                                <li>zastosowano prawidłowy kontrast strona internetowa</li>
                                <li>posiada konsekwentna, spójna i logiczną nawigację ułatwiającą przeglądanie treści</li>
                                <li>tytuły stron prawidłowo wdrożone w całym serwisie, każda strona posiada swój własny tytuł stworzony w oparciu o jeden ustalony wzorzec</li>
                                <li>pułapki klawiaturowe - wykluczone</li>
                                <li>wszelkie informacje zawarte w serwisie są redagowane w sposób zrozumiały i czytelny</li>
                                <li>na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki</li>
                            </ol>
                            <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">Informacje zwrotne i dane kontaktowe</h4>
                            <p className="par-1">
                                W przypadku problemów z dostępnością strony internetowej prosimy o kontakt z sekretariatem szkoły. Adres email: <a href="mailto: zspcisownica@oswiata.goleszow.info.pl" className="text-blue-800 hover:text-blue-900 hover:underline">zspcisownica@oswiata.goleszow.info.pl</a>. Kontaktować można się także dzwoniąc na numer telefonu <a href="tel:338528233" className="text-blue-800 hover:text-blue-900 hover:underline">33 8528233</a> . Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak zapewnienia dostępności.</p>

                            <p className="par-1">Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich elementu. Można także zażądać udostępnienia informacji za pomocą alternatywnego sposobu dostępu, na przykład przez odczytanie niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową lub aplikację mobilną chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna także określić dogodny dla niej sposób przedstawienia tej informacji. Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż w ciągu 7 dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące od dnia wystąpienia z żądaniem. Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji.</p>

                            <p className="par-1">Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do Rzecznika Praw Obywatelskich: <a href="https://bip.brpo.gov.pl/pl" target="_blank" rel="noreferrer" className="text-blue-800 hover:text-blue-900 hover:underline">www.rpo.gov.pl</a>
                            </p>

                            <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">Dostępność architektoniczna</h4>
                            <ol className="list-decimal flex flex-col space-y-3 ps-8 my-2 font-medium">
                                <li>Wejście do szkoły, dostępne jest od strony ulicy Cisowa. Wejścia od innych stron otwierane są tylko okazjonalnie.</li>
                                <li>W budynku nie ma udogodnień dla osób niepełnosprawnych.</li>
                                <li>Szkoła posiada parking ogólnie dostępny.</li>
                                <li>W budynku szkoły nie ma zainstalowanej windy.</li>
                                <li>Dla osób na wózkach dostępne są tylko W budynku szkoły nie ma zainstalowanych platform, pochylni, informacji głosowych czy pętli indukcyjnych.</li>
                                <li>W budynku nie ma oznaczeń w alfabecie brajla ani oznaczeń kontrastowych lub w druku powiększonym dla osób niewidomych i słabo widzących</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccessibilityPage