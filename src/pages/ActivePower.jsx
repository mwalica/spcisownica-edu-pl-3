import PageTitle from "../components/PageTitle"


function ActivePowerPage() {
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
                        <PageTitle title='Aktywny do kwadratu' subtitle='Projekty'/>

                        {/* content */}
                        <div>

                            <p className='par-1'>
                                Nasza szkoła w programie <span className="text-red-800">Aktywny do Kwadratu</span>! 🏃‍♀️🤸‍♂️<br/>
                                Z radością informujemy, że nasza szkoła bierze udział w programie <span className="text-red-800">Aktywny do Kwadratu</span>
                                – inicjatywie promującej aktywność fizyczną, zdrowy styl życia i rozwój osobisty
                                uczniów. To coś więcej niż tylko zajęcia sportowe! Dzięki ciekawym treningom prowadzonym
                                przez wykwalifikowaną kadrę, uczniowie mają szansę:</p>
                            <p className="leading-8">
                                ✅ rozwijać swoje pasje i umiejętności,<br/>
                                ✅ dbać o zdrowie i sprawność fizyczną,<br/>
                                ✅ wzmacniać więzi z rówieśnikami,<br/>
                                ✅ spędzać wolny czas w aktywny i twórczy sposób,<br/>
                                ✅ uczyć się pracy zespołowej i organizacji czasu,<br/>
                                ✅ redukować stres i napięcie poprzez sport,<br/>
                                ✅ budować pewność siebie i poczucie sprawczości.<br/>
                                To świetna okazja, by połączyć przyjemne z pożytecznym – aktywność fizyczną z dobrą
                                zabawą i rozwojem osobistym. 💪🌟
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default ActivePowerPage;