import PageTitle from "../components/PageTitle"

const teachers = [
    { name: "Edyta Badura", role: "wychowanie przedszkolne" },
    { name: "Barbara Bocek", role: "język angielski, logopedia" },
    { name: "Klaudia Brańka", role: "pedagog szkolny, wychowanie do życia w rodzinie" },
    { name: "Agnieszka Choińska", role: "plastyka, nauczanie zintegrowane, terapia pedagogiczna (urlop)" },
    { name: "Monika Cieślar", role: "wychowanie przedszkolne" },
    { name: "Małgorzata Czyż", role: "biologia, przyroda, wychowawca świetlicy" },
    { name: "Aleksandra Chmiel", role: "terapia pedagogiczna, nauczyciel wspomagający" },
    { name: "Małgorzata Jurek", role: "religia, logopedia" },
    { name: "Izabela Kobiela", role: "nauczanie zintegrowane" },
    { name: "Gabriela Chowaniok", role: "nauczanie zintegrowane" },
    { name: "Przemysław Misiarz", role: "wychowanie fizyczne" },
    { name: "Ewelina Czermak-Najbor", role: "język polski" },
    { name: "Beata Pieńkowska", role: "matematyka" },
    { name: "Anna Pieszka", role: "nauczanie zintegrowane, wychowawca świetlicy" },
    { name: "Renata Polok", role: "język angielski" },
    { name: "Elżbieta Stanieczek", role: "muzyka, bibliotekarz" },
    { name: "Krystyna Sztwiertnia", role: "nauczanie zintegrowane, logopedia" },
    { name: "ks. Marek Twardzik", role: "religia" },
    { name: "Robert Zając", role: "wychowanie fizyczne" },
    { name: "Adam Heczko", role: "wychowanie fizyczne" },
    { name: "Agnieszka Macha", role: "język niemiecki, nauczyciel wspomagający" },
    { name: "Marek Walica", role: "informatyka" },
    { name: "Andrzej Kloske", role: "doradztwo zawodowe" },
    { name: "Agata Gwóźdź", role: "psycholog szkolny" },
    { name: "Magdalena Dziendziel", role: "historia, wos" },
    { name: "Paweł Burzawa", role: "fizyka" },
    { name: "Małgorzata Szklorz", role: "chemia" },
    { name: "Monika Droździk", role: "język polski, edukacja dla bezpieczeństwa" },
    { name: "Samuel Gogółka", role: "religia, technika" },
    { name: "Paweł Dobrucki", role: "plastyka" },
    { name: "Wiesława Machalica", role: "wychowawca oddziału przedszkolnego" },
    { name: "Elżbieta Wójcik", role: "wychowawca oddziału przedszkolnego" },
    { name: "Renata Stanieczek", role: "wychowawca przedszkola" },
    { name: "Gabriela Sliwka", role: "wychowawca przedszkola" },
    { name: "Justyna Smolik", role: "wychowawca przedszkola" },
    { name: "Arleta Maly", role: "wychowawca przedszkola" },
    { name: "Dorota Somerlik", role: "nauczyciel wspomagający" },
    { name: "Klaudia Holisz", role: "nauczanie zintegrowane" },
    { name: "Weronika Dąbrowiecka", role: "geografia, matematyka" }
]

function TeachersPage() {
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
                        <PageTitle title='Nauczyciele' subtitle='Informacje' />

                        {/* content */}
                        <div>
                            {/* info container */}


                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6">
                                                            Nauczyciel
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800">
                                                            Przedmiot
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {teachers.map((teacher) => (
                                                        <tr key={teacher.name}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-800 sm:pl-6">
                                                                <strong className="font-medium">{teacher.name}</strong>
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm">{teacher.role}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeachersPage