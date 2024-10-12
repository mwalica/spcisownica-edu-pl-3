import PageTitle from "../components/PageTitle"

function PatronPage() {
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
                        <PageTitle title='Patron szkoły' subtitle='Jerzy Gajdzica' />

                        {/* content */}
                        <div>
                            <p className="par-1"> <strong>Jerzy Gajdzica</strong> albo, jak sam się podpisywał - Jura to postać szczególna w historii Cisownicy. Jako prosty chłop, gospodarujący na 15-morgowym gospodarstwie, a zarazem furman wożący towary do Krakowa, Wieliczki czy na Słowacczyznę, bywał w szerokim świecie, skąd przywoził książki, głównie o tematyce religijnej i historycznej. To zamiłowanie do książek, a także umiejętność czytania i pisania Jura Gajdzica wyniósł z rodzinnego domu w Cisownicy, gdzie języka ojczystego uczono się z Biblii, postylli czy kancjonałów ewangelickich. Jura Gajdzica sam oprawiał zakupione książki w deskę i skórę, a następnie ozdobnie je wytłaczał i okuwał. Swoje książki również pieczętował, umieszczając u dołu karty tytułowej własne nazwisko. Pieczęć z napisem <em>Jura Gajdzica</em> przygotował sobie jako wklejkę na osobnych karteczkach. Był to najstarszy chłopski ekslibris polski. Jura Gajdzica jest też autorem pamiętnika Dlo pamięci Narodu ludzkiego, w którym zapisywał ważne wydarzenia z lat 1805-1823. Zapiski te podają lokalne wydarzenia historyczne, zawierają też interesujące uwagi dotyczące pogody, nieurodzaju, drożyzny czy chorób. Na uwagę zasługuje fakt, iż pamiętnik pochodzi z czasów gdy polska wieś była pogrążona w analfabetyzmie, a szlachcic często podpisywał się trzema krzyżykami. Na wniosek Rady Pedagogicznej 28 września 1960 roku Kuratorium Okręgu Szkolnego w Katowicach nadało naszej szkole imię <strong>Jury Gajdzicy</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default PatronPage