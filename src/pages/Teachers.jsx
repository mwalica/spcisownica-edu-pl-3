import PageTitle from "../components/PageTitle"

const teachers = [
    {name: "Gabriela Szlembarska", role: "nauczyciel, wychowawca kl. I"},
    {name: "Izabela Kobiela", role: "nauczyciel, wychowawca kl. IIa"},
    {name: "Klaudia Holisz", role: "nauczyciel, wychowawca kl. IIb"},
    {name: "Edyta Badura", role: "nauczyciel, wychowawca kl. IIIa"},
    {name: "Elżbieta Bujok", role: "nauczyciel, wychowawca kl. IIIb"},
    {name: "Patryk Lipowczan", role: "nauczyciel, wychowawca kl. IVa"},
    {name: "Monika Droździk", role: "nauczyciel, wychowawca kl. IVb"},
    {name: "Ewelina Czermak-Najbor", role: "nauczyciel, wychowawca kl. Va"},
    {name: "Jadwiga Pipień", role: "nauczyciel, wychowawca kl. Vb"},
    {name: "Adam Heczko", role: "nauczyciel, wychowawca kl. VI"},
    {name: "Barbara Bocek", role: "nauczyciel, wychowawca kl. VIIa"},
    {name: "Samuel Gogółka", role: "nauczyciel, wychowawca kl. VIIb"},
    {name: "Robert Zając", role: "nauczyciel, wychowawca kl. VIIIa"},
    {name: "Beata Pieńkowska", role: "nauczyciel, wychowawca kl. VIIIb"},
    {name: "Tomasz Beczała", role: "nauczyciel"},
    {name: "Paweł Burzawa", role: "nauczyciel"},
    {name: "Magdalena Dziendziel", role: "nauczyciel"},
    {name: "Monika Grzywna", role: "nauczyciel"},
    {name: "Andrzej Kloske", role: "nauczyciel"},
    {name: "Agnieszka Macha", role: "nauczyciel"},
    {name: "Paweł Pieszka", role: "nauczyciel"},
    {name: "Elżbieta Stanieczek", role: "nauczyciel"},
    {name: "Marek Walica", role: "nauczyciel"},
    {name: "Karina Chwastek-Kamieniorz", role: "nauczyciel, katecheta"},
    {name: "Małgorzata Jurek", role: "nauczyciel, katecheta"},
    {name: "Ilona Boruta", role: "nauczyciel wspomagający"},
    {name: "Krzysztof Jastrzębski", role: "nauczyciel wspomagający"},
    {name: "Martyna Mitręga", role: "nauczyciel wspomagający"},
    {name: "Justyna Oleksy", role: "nauczyciel wspomagający"},
    {name: "Joanna Biela", role: "psycholog szkolny"},
    {name: "Klaudia Brańka", role: "pedagog szkolny"},
    {name: "Gabriela Śliwka", role: "pedagog specjalny"},
    {name: "Sara Borkała", role: "wychowawca przedszkola - oddział Równia"},
    {name: "Monika Cieślar", role: "wychowawca przedszkola - oddział Równia"},
    {name: "Agnieszka Kłek", role: "wychowawca przedszkola - oddział Równia"},
    {name: "Arleta Maly", role: "wychowawca przedszkola - przedszkole Cisownica"},
    {name: "Renata Stanieczek", role: "wychowawca przedszkola - przedszkole Cisownica"},
    {name: "Michalina Tengler", role: "wychowawca przedszkola - przedszkole Cisownica"},

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
                        <PageTitle title='Nauczyciele' subtitle='Informacje'/>

                        {/* content */}
                        <div>
                            {/* info container */}


                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div
                                            className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th scope="col"
                                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 dark:text-gray-100 sm:pl-6">
                                                        Nauczyciel
                                                    </th>
                                                    <th scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800 dark:text-gray-100">
                                                        Przedmiot
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody
                                                    className="divide-y divide-gray-200 dark:divide-gray-600 dark:bg-gray-900">
                                                {teachers.map((teacher) => (
                                                    <tr key={teacher.name}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-800 dark:text-gray-100 sm:pl-6">
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