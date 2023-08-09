import PageTitle from "../../components/PageTitle"

function RulesPage() {
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
                        <PageTitle title='Zasady' subtitle='Przedszkole Równia' />

                        {/* content */}
                        <div className="flex flex-col items-center space-y-4">
                            {/* info container */}
                            <div className="flex-1">
                                <h4 className="text-purple-500 font-medium text-2xl py-4 text-center">Procedura przyprowadzania i odbierania dzieci z oddziału przedszkolnego</h4>
                                <h6 className="text-blue-600 font-medium py-2 indent-4 text-lg">Przyprowadzanie dziecka do oddziału przedszkolnego</h6>
                                <ol className="list-decimal flex flex-col space-y-3 ps-4">
                                    <li>Dzieci są przyprowadzane do placówki i odbierane z placówki przez opiekunów prawnych bądź przez osoby upoważnione na piśmie przez rodziców (upoważnienia znajdują się w dokumentacji nauczyciela). Są oni odpowiedzialni za ich bezpieczeństwo w drodze do placówki i z placówki do domu.</li>
                                    <li>Opiekunowie osobiście powierzają dziecko nauczycielowi - wychowawcy.</li>
                                    <li>PW godzinach od 8 do 8.30 rodzice (wskazani opiekunowie) przyprowadzają dziecko do oddziału przedszkolnego.</li>
                                    <li>Rodzice (opiekunowie prawni) zobowiązani są przyprowadzić do placówki dzieci zdrowe i czyste. Dziecka chorego lub podejrzanego o chorobę nie należy przyprowadzać do placówki.</li>
                                </ol>
                                <h6 className="text-blue-600 font-medium py-2 indent-4 text-lg">Odbieranie dziecka z oddziału przedszkolnego</h6>
                                <ol className="list-decimal flex flex-col space-y-3 ps-4">
                                    <li>    Dzieci mogą być przyprowadzane i odbierane przez inne osoby upoważnione na piśmie przez rodziców (opiekunów prawnych). Upoważnienie pozostaje w dokumentacji placówki.</li>
                                    <li>Rodzice (opiekunowie prawni) ponoszą odpowiedzialność prawną za bezpieczeństwo dziecka odebranego z placówki przez upoważnioną przez nich osobę.</li>
                                    <li>Z terenu placówki można pozwolić dziecku odejść dopiero wtedy, gdy rodzic (osoba upoważniona) dotarł na miejsce pobytu grupy.</li>
                                    <li>Rodzice (opiekunowie prawni) zobowiązani są przyprowadzić do placówki dzieci zdrowe i czyste. Dziecka chorego lub podejrzanego o chorobę nie należy przyprowadzać do placówki.</li>
                                    <li>Nauczyciel odmówi wydania dziecka, w przypadku gdy stan osoby odbierającej dziecko wskazuje na spożycie alkoholu czy zachowanie agresywne. W takim przypadku personel placówki ma obowiązek zatrzymać dziecko do czasu wyjaśnienia sprawy. W tych okolicznościach nauczyciel zobowiązany jest skontaktować się z drugim rodzicem lub osobą upoważniona do odbioru. O zaistniałym fakcie powinien zostać poinformowany dyrektor lub jego zastępca.</li>
                                    <li>Nauczyciel nie ponosi odpowiedzialności za dziecko pozostające na terenie przedszkola pod opieką rodziców (opiekunów prawnych).</li>
                                    <li>W przypadku, gdy dziecko nie zostanie odebrane po zakończeniu zajęć, nauczyciel zobowiązany jest powiadomić telefonicznie rodziców ( opiekunów prawnych). Jeśli nie ma możliwości skontaktowania się z rodzicami (opiekunami prawnymi) lub osobami upoważnionymi do odbioru, nauczyciel powiadamia Dyrektora Szkoły, który w dalszym etapie działań podejmuje decyzję o powiadomieniu Policji. W przypadku braku możliwości powiadomienia Dyrektora, nauczyciel sam podejmuje decyzję o powiadomieniu Policji.</li>
                                    <li>Życzenie rodziców dotyczące nieodbierania dziecka przez jednego z rodziców musi być poświadczone przez orzeczenie sądowe.</li>
                                    <li>Obowiązkiem rodziców (opiekunów prawnych) i nauczyciela jest przestrzeganie zasad przyprowadzania i odbierania dzieci.</li>

                                </ol>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default RulesPage