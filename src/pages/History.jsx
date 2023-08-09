import PageTitle from "../components/PageTitle"

function HistoryPage() {
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
                        <PageTitle title='Historia' subtitle='Informacje' />

                        {/* content */}
                        <div>
                            <p className="par-1">Historia naszej szkoły sięga roku 1790, kiedy to rozpoczęła działalność pierwsza jednoklasowa szkoła ewangelicka. Nauka odbywała się w wynajętym, drewnianym budynku. Pierwszym nauczycielem tejże szkoły był <strong>Jan Pellar</strong> pochodzący z Cisownicy. W 1835 r. powstał nowy, murowany budynek szkolny, a w 1850 r. wystawiono przy nim wieżę, w której umieszczono dzwony. Podobnie jak wszystkie ówczesne szkoły ewangelickie, szkoła cisownicka była utrzymywaną przez zbór szkołą prywatną i nie otrzymywała żadnych dotacji z funduszy państwowych. Po ustawie o świeckości szkoły z 1869 r., pomimo wielkiej ofiarności mieszkańców problemy finansowe stały się główną przyczyną przekształcenia szkoły w latach 80-tych XIX wieku w szkołę publiczną.</p>
                            <p className="par-1">Z biegiem lat budynek szkoły okazał się niewystarczający. Gmina otrzymała polecenie wybudowania nowej dwuklasowej publicznej szkoły powszechnej. Powstała ona między innymi dzięki inicjatywie i wielkiemu zaangażowaniu ówczesnego <strong>kierownika szkoły Jana Ożany</strong>. Jemu Cisownica zawdzięcza wybudowanie dwuklasowej szkoły, oddanej w 1898 r. (obecnie mieści się w nim przedszkole). Mimo nowego i większego budynku warunki nauki były ciężkie. W dwóch pomieszczeniach odbywały się zajęcia siedmiu, a później ośmiu oddziałów. Przystąpiono więc do budowy nowej szkoły, którą ukończono w 1939 roku. Nowa szkoła była budynkiem dwupiętrowym, w którym mieściły się cztery klasy, kancelaria, kuchnia i jadalnia. Rozpoczęcie nowego roku szkolnego uniemożliwił wybuch II wojny światowej. Cisownica została włączona do Rzeszy Niemieckiej. Nauka rozpoczęła się 22 lutego 1940 r. Była to szkoła niemiecka.</p>

                            <p className="par-1">Po wyzwoleniu nauka w polskiej szkole rozpoczęła się <strong>4 czerwca 1945 r.</strong> Do szkoły uczęszczało 182 uczniów. W następnych latach liczba mieszkańców Cisownicy się powiększyła, gdyż Cementownia Goleszów wybudowała na terenie wsi 7 dwunastorodzinnych bloków mieszkalnych. Spowodowało to wzrost liczby uczniów. Sytuacja ta zmusiła kierownictwo szkoły do ponownego przejścia na dwuzmianowy system nauki, a zajęcia klas I i II odbywały się w budynku starej szkoły, gdzie mieściło się także przedszkole. W związku z tym znów zaistniała potrzeba budowy bądź rozbudowy szkoły. Pierwsza decyzja zapadła w 1947 r. - postanowiono wybudować nową szkołę i w pobliżu niej dom dla nauczycieli, a istniejący budynek przeznaczyć na Dom Dziecka. W latach 1948-49 wybudowany został dom nauczycielski, nie wybudowano jednak szkoły.</p>

                            <p className="par-1">W 1984 r. rozpoczęła się rozbudowa szkoły, a w 1985 r. rozpoczęto remont kapitalny istniejącego budynku. Całość została oddana do użytku <strong>wiosną 1987 roku</strong>, zakończono tym samym tzw. I etap rozbudowy szkoły. Drugi etap to budowa sali gimnastycznej i basenu. Otwarcie sali gimnastycznej nastąpiło 32.11.1994 roku, a kryty basen otwarto <strong>18.12.1997 roku</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryPage