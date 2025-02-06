import PageTitle from "../components/PageTitle"
import img1 from "../assets/aktywna_tablica.jpg"
import img2 from "../assets/aktywna_tablica_2.jpg"
import img3 from "../assets/aaktywna_tablica_3.jpg"
import img4 from "../assets/aktywna_tablica_4.jpg"
import logo_1 from "../assets/aktywna-tablica-logo.jpg"

const tasks = [
    {
        id: "1",
        name: "Przekazanie Radzie Pedagogicznej informacji nt. realizacji programu \"Aktywna tablica\"",
        realization: "Zapoznanie RP z zasadami uczestnictwa w programie i korzyściami płynącymi z jego realizacji.",
        person: "Dyrektor szkoły",
        date: "wrzesień 2024"

    },
    {
        id: "2",
        name: "Wyznaczenie szkolnego e-koordynatora do koordynowania działań w zakresier stosowania TIK w szkole",
        realization: "Powołanie e-koordynatora przez Dyrektora.",
        person: "Dyrektor szkoły",
        date: "wrzesień 2024"

    },
    {
        id: "3",
        name: "Powołanie nauczycielskich zespołów samokształceniowych, które będą wspierać dyrektora i nauczycieli w zorganizowaniu pracy szkoły z wykorzystaniem TIK.",
        realization: "Powołanie zarządzeniem Dyrektora szkoły zespołów samokształceniowych: nauczycieli przedmiotów, edukacji wczesnoszkolnej, specjalistów.",
        person: "Dyrektor szkoły",
        date: "wrzesień-październik 2024"

    },
    {
        id: "4",
        name: "Ustalenie zasad korzystania z TIK w szkole dla uczniów i nauczycieli, opracowanie planu pracy. Nawiązanie współpracy ze szkołami w ramach międzyszkolnej sieci współpracy nauczycieli.",
        realization: "Zawarcie porozumienia o współpracy ze Szkołą Podstawową w Bażanowicach.Ustalenie harmonogramu spotkań międzyszkolnej sieci współpracy nauczycieli. Uzgodnienie zasad pracy, przygotowanie planu pracy oraz analiza potrzeb w zakresie stosowania TIK.",
        person: "Dyrektor szkoły, E-koordynator Zespołu TIK",
        date: "październik 2024"

    },
    {
        id: "5",
        name: "Utworzenie zakładki TIK na stronie internetowej szkoły.",
        realization: "Stworzenie zakładki AKTYWNA TABLICA na stronie internetowej szkoły",
        person: "opiekun strony internetowej, E-koordynator Zespołu TIK",
        date: "listopad 2024"

    },
    {
        id: "6",
        name: "Udział w co najmniej trzech spotkaniach organizowanych w ramach międzyszkolnej sieci współpracy nauczycieli.",
        realization: "Zorganizowanie co najmniej trzech spotkań w formie stacjonarnej lub online, m.in. z wykorzystaniem aplikacji Microsoft Teams.",
        person: "E-koordynator Zespołu TIK",
        date: "na bieżąco"
    },
    {
        id: "7",
        name: "Uczestniczenie w konferencjach i szkoleniach z zakresu TIK w nauczaniu przez co najmniej pięciu nauczycieli.",
        realization: "Szkolenie z zakresu wykorzystywania tablicy interaktywnej podczas zajęć. Wybór form doskonalenia i udział w szkoleniach z zakresu wykorzystania TIK w nauczaniu.",
        person: "Nauczycielskie zespoły samokształceniowe",
        date: "na bieżąco"
    },
    {
        id: "8",
        name: "Zorganizowanie lekcji otwartych z wykorzystaniem TIK w nauczaniu, w ramach uczestniczenia w międzyszkolnej sieci współpracy nauczycieli.",
        realization: "Dzielenie się przyjętymi rozwiązaniami i doświadczeniami z innymi nauczycielami. Przeprowadzenie lekcji otwartej z: informatyki, techniki, kodowania, matematyki, fizyki, edukacji wczesnoszkolnej.",
        person: "wyznaczeni nauczyciele",
        date: "styczeń-czerwiec 2025"
    },
    {
        id: "9",
        name: "Dzielenie się przyjętymi rozwiązaniami i doświadczeniami z innymi nauczycielami – udostępnianie w międzyszkolnej sieci współpracy nauczycieli przydatnych linków, stron internetowych, przykłady dobrych praktyk.",
        realization: "Udostępnianie materiałów (ciekawych linków) na stronie internetowej szkoły w zakładce Aktywna Tablica Wymiana dobrych praktyk z nauczycielami. Stworzenie bazy aplikacji, gier edukacyjnych i stron WWW przydatnych w nauczaniu różnych przedmiotów z wykorzystaniem TIK.",
        person: "E-koordynator Wszyscy nauczyciele i wychowawcy",
        date: "na bieżąco"
    },
    {
        id: "10",
        name: "Wykorzystywanie TIK na zajęciach edukacyjnych w każdym oddziale Szkoły Podstawowej, w wymiarze co najmniej 5 godzin zajęć edukacyjnych średnio w każdym tygodniu nauki.",
        realization: "Prowadzenie zajęć z wykorzystaniem TIK w wymiarze co najmniej 5 godzin w każdym oddziale. Dokumentowanie prowadzonych zajęć w formie przyjętej w szkole.",
        person: "Wszyscy nauczyciele i wychowawcy",
        date: "na bieżąco"
    },
    {
        id: "11",
        name: "Ocena wpływu stosowania TIK na zaangażowanie nauczycieli w proces nauczania i uczniów w proces uczenia się.",
        realization: "Przeprowadzenie ewaluacji wewnętrznej.",
        person: "E-koordynator",
        date: "czerwiec 2025"
    }
]


function ActiveBoardPage() {
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
                        <PageTitle title='Aktywna tablica' subtitle='Projekty'/>

                        {/* content */}
                        <div>
                            <div className="flex justify-center">
                                <img src={logo_1} alt="logo aktywna tablica" className="text-center mb-8"/>
                            </div>

                            <p className='par-1'>
                                Z ogromną radością pragniemy poinformować, że nasza szkoła, dzięki wsparciu
                                merytorycznemu i finansowemu gminy Goleszów oraz zaangażowaniu Wójt Gminy Goleszów - <b>Sylwii
                                Cieślar</b>, nasza szkoła otrzymała dofinansowanie na zakup sprzętu w programie <b>„Aktywna
                                Tablica”</b>. Program ten ma na celu rozwijanie szkolnej
                                infrastruktury oraz
                                kompetencji uczniów i nauczycieli w zakresie technologii informacyjno-komunikacyjnej.
                                Zostaliśmy objęci wsparciem finansowym ze względu na kształcenie uczniów ze specjalnymi
                                potrzebami edukacyjnymi, w tym z niepełnosprawnościami. W naszej placówce pojawił się
                                tzw. „magiczny dywan” FunFloor wyposażony w dedykowane dla placówek edukacyjnych
                                oprogramowanie w wersji EDU. Pakiet wyposażony jest w 210 gier: 50 gier z pakietu fun,
                                50 gier z pakietu edu, 10 gier z pakietu ekologia oraz 100 gier z pakietu język
                                angielski. Ponadto w dwóch salach lekcyjnych umieszczono nowoczesne 65” monitory
                                interaktywne, programy multimedialne mTalent (stworzone przez specjalistów,
                                najnowocześniejsze na polskim rynku, wielokrotnie nagradzane, pozwalające na całkowitą
                                indywidualizację przebiegu nauczania) itp. Sprzęt służy do prowadzenia zajęć
                                specjalistycznych w nowoczesny i atrakcyjny dla młodych ludzi sposób, przygotowując ich
                                do wyzwań współczesnego świata. Z tego miejsca serdeczne podziękowania kierujemy do
                                gminy Goleszów za okazane pomoc i wsparcie przy pozyskaniu środków oraz ich rozliczeniu.
                                W sumie w ramach rządowego programu „Aktywna tablica” nasza szkoła otrzymała dotację w
                                wysokości 35 tys. zł.
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <img src={img1} alt="program aktywna tablica"
                                     className="w-2/3 border-8 shadow-xl border-white"/>
                                <img src={img2} alt="program aktywna tablica"
                                     className="w-2/3 border-8 shadow-xl border-white"/>
                                <img src={img3} alt="program aktywna tablica"
                                     className="w-2/3 border-8 shadow-xl border-white"/>
                                <img src={img4} alt="program aktywna tablica"
                                     className="w-2/3 border-8 shadow-xl border-white"/>
                            </div>
                            <h4 className="text-purple-500 font-medium text-base py-4">Harmonogram działań dotyczących
                                wdrożenia TIK w Szkole Podstawowej im. Jury
                                Gajdzicy w Cisownicy, w ramach rządowego programu rozwijania szkolnej infrastruktury
                                oraz kompetencji uczniów i nauczycieli w zakresie technologii
                                informacyjno-komunikacyjnych – „Aktywna tablica”</h4>

                            {/* info container */}
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div
                                            className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                            <table className="table-auto min-w-full divide-gray-300">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col"
                                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6">
                                                        Zadanie
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800">
                                                        Sposób realizacji
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800">
                                                        Osoby odpowiedzialne
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800">
                                                        Termin
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                {tasks.map((task) => (
                                                    <tr key={task.id}>
                                                        <td className="whitespace-wrap px-3 py-4 text-sm align-top">{task.name}</td>
                                                        <td className="whitespace-wrap px-3 py-4 text-sm align-top">{task.realization}</td>
                                                        <td className="whitespace-wrap px-3 py-4 text-sm align-top">{task.person}</td>
                                                        <td className="whitespace-wrap px-3 py-4 text-sm align-top">{task.date}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*    end info container */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActiveBoardPage;