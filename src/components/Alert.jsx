import {Fragment, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";

// https://spcisownica.edu.pl/dokumenty/pnabor26/oswiadczenie_woli_2026.pdf!!!!
//https://spcisownica.edu.pl/dokumenty/pnabor26/przedszkole_wola_przyjecia_2026_2027.pdf!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/wniosek_kandydat_2026.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_6_pomoc_spol.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_8_niepelnospr_kandydata.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_1_wielodzietnosc.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_2_samotne_wychowywanie.pdf!!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_3_zatrudnienie.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_4_studia.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_5_rodzenstwo_w_tym_samym_prz.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_7_piecza_zast.pdf!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_9_niepelnospr_rodz.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_10_niepelnospr_rodzicow.pdf!!!!
//http://s139.cyber-folks.pl/domains/spcisownica.vot.pl/public_html/dokumenty/pnabor26/zal_nr_5a_rodzenstwo.pdf!!!!!

const content = [
    {
        id: 1,
        activity:
            "Złożenie wniosku o przyjęcie do: przedszkola i oddziałów przedszkolnych wraz z dokumentami potwierdzającymi spełnianie przez kandydata warunków lub kryteriów branych pod uwagę w postępowaniu rekrutacyjnym.",
        date1: "od 03 marca 2025r. do 17 marca 2025r.",
        date2: "od 02 czerwca 2025r do 09 czerwca 2025r.",
    },
    {
        id: 2,
        activity:
            "Weryfikacja przez komisję rekrutacyjną wniosków o przyjęcie do przedszkola i oddziałów przedszkolnych oraz dokumentów potwierdzających spełnianie przez kandydata warunków lub kryteriów branych pod uwagę w postępowaniu rekrutacyjnym.",
        date1: "od 03 marca 2025r. do 19 marca 2025r.",
        date2: "od 02 czerwca 2025r. do 10 czerwca 2025r.",
    },
    {
        id: 3,
        activity:
            "Podanie do publicznej wiadomości przez komisję rekrutacyjną listy kandydatów zakwalifikowanych i kandydatów niezakwalifikowanych.",
        date1: "3 kwietnia 2025r.",
        date2: "17 czerwca 2025r.",
    },
    {
        id: 4,
        activity:
            "Potwierdzenie przez rodzica kandydata woli przyjęcia w postaci pisemnego oświadczenia.",
        date1: "od 03 kwietnia 2025r. do 10 kwietnia 2025r.",
        date2: "od 17 czerwca 2025r. do 24 czerwca 2025r.",
    },
    {
        id: 5,
        activity:
            "Podanie do publicznej wiadomości przez komisję rekrutacyjną listy kandydatów przyjętych i kandydatów nieprzyjętych.",
        date1: "15 kwietnia 2025r.",
        date2: "27 czerwca 2025r.",
    },
];

function Alert({open, onClose}) {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                initialFocus={cancelButtonRef}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform  rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-base text-center font-semibold leading-6 text-gray-900"
                                        >
                                            Zasady naboru do publicznych przedszkoli prowadzonych przez Gminę Goleszów
                                            na rok szkolny 2026/2027
                                        </Dialog.Title>
                                        <h4 className="text-green-600 py-2">DOKUMENTY DO POBRANIA - REKRUTACJA DO
                                            PRZEDSZKOLA</h4>
                                        <ul>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/wniosek_kandydat_2026.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >WNIOSEK KANDYDATA - wniosek_kandydat_2026.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/oswiadczenie_woli_2026.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE WOLI - oswiadczenie_woli_2026.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/przedszkole_wola_przyjecia_2026_2027.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >Potwierdzenie woli przyjęcia dziecka do przedszkola -
                                                przedszkole_wola_przyjecia_2026_2027.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_1_wielodzietnosc.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o wielodzietności rodziny - zal_nr_1_wielodzietnosc.pdf</a>
                                            </li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_2_samotne_wychowywanie.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o samotnym wychowywaniu dziecka -
                                                zal_nr_2_samotne_wychowywanie.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_3_zatrudnienie.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o zatrudnieniu - zal_nr_3_zatrudnienie.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_4_studia.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o nauce w trybie stacjonarnym - zal_nr_4_studia.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_5_rodzenstwo_w_tym_samym_prz.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o rodzeństwie uczęszczającym do przedszkola -
                                                zal_nr_5_rodzenstwo_w_tym_samym_prz.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_5a_rodzenstwo.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o rodzeństwie uczęszczającym do innego przedszkola -
                                                zal_nr_5a_rodzenstwo.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_6_pomoc_spol.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE o pomocy społecznej - zal_nr_6_pomoc_spol.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_7_piecza_zast.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE piecza zastępcza - zal_nr_7_piecza_zast.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_8_niepelnospr_kandydata.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE O NIEPEŁNOSPRAWNOŚCI KANDYDATA -
                                                zal_nr_8_niepelnospr_kandydata.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_9_niepelnospr_rodz.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE O NIEPEŁNOSPRAWNOŚCI RODZEŃSTWA KANDYDATA - zal_nr_9_niepelnospr_rodz.pdf</a></li>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/pnabor26/zal_nr_10_niepelnospr_rodzicow.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >OŚWIADCZENIE OŚWIADCZENIE O NIEPEŁNOSPRAWNOŚCI RODZICÓW KANDYDATA -
                                                zal_nr_10_niepelnospr_rodzicow.pdf</a></li>
                                        </ul>
                                        <h4 className="text-green-600 py-2">REKRUTACJA DO PRZEDSZKOLI W GMINIE
                                            GOLESZÓW</h4>
                                        <p>W poniedziałek, 2 marca, rozpocznie się rekrutacja do publicznych przedszkoli
                                            oraz oddziałów
                                            przedszkolnych funkcjonujących w szkołach podstawowych, dla których organem
                                            prowadzącym
                                            jest gmina Goleszów. To ważny moment dla rodziców i opiekunów, którzy stają
                                            przed wyborem
                                            miejsca, w którym ich dzieci nawiązywać będą pierwsze relacje, w tym piękne
                                            przyjaźnie, a także
                                            gdzie zdobywać pierwsze doświadczenia edukacyjne.</p>
                                        <p>Gminne przedszkola oraz oddziały przedszkolne funkcjonujące w szkołach
                                            podstawowych
                                            wyróżniają się szczególną, niemal rodzinną atmosferą, sprzyjającą poczuciu
                                            bezpieczeństwa
                                            i budowaniu pozytywnych relacji. Dzieci mają zapewnione zdrowe i smaczne
                                            posiłki
                                            przygotowywane na miejscu, z uwzględnieniem ich potrzeb żywieniowych. Bogata
                                            oferta zajęć
                                            dodatkowych, w tym m.in. artystycznych, sportowych, językowych czy
                                            rozwijających logiczne
                                            myślenie, pozwala dzieciom odkrywać i rozwijać indywidualne pasje oraz
                                            talenty już od
                                            najmłodszych lat. Istotnym atutem placówek prowadzonych przez gminę jest
                                            wielokierunkowo
                                            wykształcona i doświadczona kadra pedagogiczna, która z zaangażowaniem
                                            podchodzi do pracy
                                            z dziećmi. Przedszkolaki mogą liczyć na profesjonalne wsparcie
                                            psychologiczne, pedagogiczne
                                            i logopedyczne, w szczególności dzieci ze specjalnymi potrzebami
                                            edukacyjnymi.</p>
                                        <h4 className="text-green-600 py-2">NAJWAŻNIEJSZE INFORMACJE NA TEMAT
                                            NABORU</h4>
                                        <p>W tym roku nabór do publicznych przedszkoli oraz oddziałów przedszkolnych w
                                            szkołach
                                            podstawowych prowadzony będzie w formie papierowej. Wnioski należy składać
                                            bezpośrednio
                                            w placówkach, w których prowadzona będzie rekrutacja. Nabór rozpocznie się w
                                            poniedziałek,
                                            2 marca, o godz. 8:00 i potrwa do 16 marca do godz. 15:00. Co ważne o
                                            przyjęciu do przedszkola
                                            nie będzie decydować kolejność zgłoszeń. Do wniosku należy dołączyć
                                            dokumenty potwierdzające
                                            spełnianie kryteriów wskazanych przez rodziców. Dokumenty związane z
                                            tegoroczną rekrutacją
                                            będą dostępne w sekretariatach oraz na stronach internetowych poszczególnych
                                            placówek
                                            oświatowych prowadzących nabór, tj.: Przedszkola Publicznego w Goleszowie,
                                            Szkoły
                                            Podstawowej w Bażanowicach, Zespołu Szkolno-Przedszkolnego w Cisownicy,
                                            Zespołu SzkolnoPrzedszkolnego w Dzięgielowie oraz Szkoły Podstawowej w
                                            Goleszowie, bliżej terminu jego
                                            rozpoczęcia.</p>
                                        <p>Do publicznych przedszkoli przyjmowane są dzieci zamieszkałe na terenie gminy
                                            Goleszów,
                                            a w przypadku wolnych miejsc również dzieci spoza gminy. Dla mieszkańców
                                            gmin ościennych,
                                            którzy na przykład pracują na terenie naszej gminy, jest to nie tylko
                                            atrakcyjna oferta edukacyjna,
                                            ale także dogodne rozwiązanie logistyczne, ponieważ placówki oświatowe w
                                            gminie Goleszów
                                            charakteryzują się dobrą lokalizacją i łatwym dojazdem.</p>
                                        <ul>
                                            <li><a className="text-blue-600 font-semibold"
                                                   href="https://spcisownica.edu.pl/dokumenty/zasady_naboru_do_przedszkoli_gmina_goleszow_2026_2027.pdf"
                                                   target="_blank"
                                                   rel="noreferrer"
                                            >zasady_naboru_do_przedszkoli_gmina_goleszow_2026_2027.pdf</a></li>
                                        </ul>
                                        {/* table */}
                                        {/*<div className="px-4 sm:px-6 lg:px-8">*/}
                                        {/*    <div className="mt-8 flow-root">*/}
                                        {/*        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">*/}
                                        {/*            <div*/}
                                        {/*                className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">*/}
                                        {/*                <table className="min-w-full divide-y divide-gray-300">*/}
                                        {/*                    <thead>*/}
                                        {/*                    <tr>*/}
                                        {/*                        <th*/}
                                        {/*                            scope="col"*/}
                                        {/*                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"*/}
                                        {/*                        >*/}
                                        {/*                            L.p.*/}
                                        {/*                        </th>*/}
                                        {/*                        <th*/}
                                        {/*                            scope="col"*/}
                                        {/*                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"*/}
                                        {/*                        >*/}
                                        {/*                            Rodzaj czynności*/}
                                        {/*                        </th>*/}
                                        {/*                        <th*/}
                                        {/*                            scope="col"*/}
                                        {/*                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"*/}
                                        {/*                        >*/}
                                        {/*                            Terminy w postępowaniu rekrutacyjnym*/}
                                        {/*                        </th>*/}
                                        {/*                        <th*/}
                                        {/*                            scope="col"*/}
                                        {/*                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"*/}
                                        {/*                        >*/}
                                        {/*                            Terminy w postępowaniu uzupełniającym*/}
                                        {/*                        </th>*/}
                                        {/*                    </tr>*/}
                                        {/*                    </thead>*/}
                                        {/*                    <tbody className="divide-y divide-gray-200">*/}
                                        {/*                    {content.map((item) => (*/}
                                        {/*                        <tr key={item.id}>*/}
                                        {/*                            <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">*/}
                                        {/*                                {item.id}*/}
                                        {/*                            </td>*/}
                                        {/*                            <td className="px-3 py-4 text-sm text-gray-500">*/}
                                        {/*                                {item.activity}*/}
                                        {/*                            </td>*/}
                                        {/*                            <td className="px-3 py-4 text-sm text-blue-800">*/}
                                        {/*                                {item.date1}*/}
                                        {/*                            </td>*/}
                                        {/*                            <td className="px-3 py-4 text-sm text-blue-800">*/}
                                        {/*                                {item.date2}*/}
                                        {/*                            </td>*/}
                                        {/*                        </tr>*/}
                                        {/*                    ))}*/}
                                        {/*                    </tbody>*/}
                                        {/*                </table>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/* table end */}
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:justify-center">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={onClose}
                                    >
                                        Zamknij
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Alert;
