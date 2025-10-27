import PageTitle from "../components/PageTitle"
import logo from "../assets/projects_logo_1.png"

const teachersCis = [
    {name: "Gabriela Śliwka", role: "Stymulowanie rozwoju psychoruchowego z elementami Integracji sensorycznej"},
    {name: "Michalina Tengler", role: "Zajęcia kreatywne - zajęcia rozwijające uzdolnienia i kreatywność"},
]

const teachersRow = [
    {name: "Weronika Dąbrowiecka", role: "Zajęcia plastyczno-artystyczne"},
    {name: "Klaudia Chwistek", role: "Trening sensoryczno-motoryczny"},
    {name: "Agnieszka Kłek", role: "Trening sprawności manualnych"},
    {
        name: "Edyta Badura",
        role: "Wspomaganie rozwoju dzieci z wykorzystaniem elementów logorytmiki i terapii pedagogicznej"
    },
]


function ProjectsPreschoolPage() {
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
                        <PageTitle title='Gmina Goleszów wspiera edukację przedszkolną' subtitle='Projekty unijne'/>

                        {/* content */}
                        <div>
                            <img
                                src={logo}
                                alt="loga i znaki projektu"
                                className="w-full border-8 shadow-lg border-white"
                            />
                            {/*<h4 className="text-purple-500 font-medium text-base py-4">Zajęcia realizowane w ramach*/}
                            {/*    projektu Fundusze Europejskie dla Śląskiego*/}
                            {/*    2021-2027 <br/>(Europejski Fundusz Społeczny+)<br/>*/}
                            {/*    dla Priorytetu: FESL.06.00-Fundusze Europejskie dla edukacji<br/>*/}
                            {/*    dla Działania: FESL.06.01-Edukacja przedszkolna</h4>*/}
                            <h4 className="text-purple-500 font-medium text-base py-4">
                                Nasze przedszkole w Cisownicy, a także oddziały przedszkolne w Równi uczestniczą w
                                projekcie „Gmina Goleszów wspiera edukację przedszkolną”, realizowanym w latach
                                2024–2026 i współfinansowanym z Funduszy Europejskich dla Śląskiego 2021–2027 (EFS+).
                            </h4>
                            <p>
                                Celem projektu jest zapewnienie wszystkim dzieciom równych szans rozwojowych,
                                poszerzenie oferty edukacyjnej, doposażenie placówek oraz podniesienie kwalifikacji
                                nauczycieli.
                            </p>

                            <p className="my-4">Zajęcia prowadzone w przedszkolu w Cisownicy:</p>
                            <ul className="text-blue-700">
                                <li>1) Zajęcia &quot;Stymulowanie rozwoju psychoruchowego z elementami Integracji
                                    sensorycznej&quot;.
                                </li>
                                <li>2) Zajęcia kreatywne - zajęcia rozwijające uzdolnienia i kreatywność.</li>
                            </ul>
                            <p className="my-4">Zajęcia prowadzone w oddziałach przedszkolnych w Równi:</p>
                                <ul className="text-blue-700">
                                    <li>1) Zajęcia plastyczno- artystyczne</li>
                                    <li>2) Trening sensoryczno- motoryczny</li>
                                    <li>3) Trening sprawności manualnych</li>
                                    <li>4) Wspomaganie rozwoju dzieci z wykorzystaniem elementów logorytmiki i terapii
                                        pedagogicznej
                                    </li>
                                </ul>

                            <p className="mt-8">Dodatkowo w ramach projektu 3 nauczycielki podniosą swoje kwalifikacje poprzez studia
                                podyplomowe i kursy.</p>

                            <p className="mt-8">Obie placówki zostaną doposażone w wiele nowoczesnych narzędzi wspierających naukę i
                                zabawę. Zakupione zostaną m.in.zestawy plastyczne, artystyczne, akcesoria sensoryczne i
                                terapeutyczne, pomoce sensoplatyczne i wiele innych.</p>


                            <p className="mt-8">Na działania realizowane w obu placówkach przedszkolnych przeznaczono <b>66 610,81 zł</b></p>


                        {/* info container */}
                        {/*<div className="mt-8 flow-root">*/}
                        {/*    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">*/}
                        {/*        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">*/}
                        {/*            <div*/}
                        {/*                className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">*/}
                        {/*                <table className="min-w-full divide-y divide-gray-300">*/}
                        {/*                    <thead className="bg-gray-50">*/}
                        {/*                    <tr>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6">*/}
                        {/*                            Nauczyciel*/}
                        {/*                        </th>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800">*/}
                        {/*                            Rodzaj zajęć terapeutycznych*/}
                        {/*                        </th>*/}
                        {/*                    </tr>*/}
                        {/*                    </thead>*/}
                        {/*                    <tbody className="divide-y divide-gray-200 bg-white">*/}
                        {/*                    {teachersCis.map((teacher) => (*/}
                        {/*                        <tr key={teacher.name}>*/}
                        {/*                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-800 sm:pl-6">*/}
                        {/*                                <strong className="font-medium">{teacher.name}</strong>*/}
                        {/*                            </td>*/}
                        {/*                            <td className="whitespace-nowrap px-3 py-4 text-sm">{teacher.role}</td>*/}
                        {/*                        </tr>*/}
                        {/*                    ))}*/}
                        {/*                    </tbody>*/}
                        {/*                </table>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<p className="par-1 text font-semibold mt-8">Przedszkole w Równi - zajęcia dodatkowe z*/}
                        {/*    projektu 2024/2025</p>*/}


                        {/* info container */}
                        {/*<div className="mt-8 flow-root">*/}
                        {/*    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">*/}
                        {/*        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">*/}
                        {/*            <div*/}
                        {/*                className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">*/}
                        {/*                <table className="min-w-full divide-y divide-gray-300">*/}
                        {/*                    <thead className="bg-gray-50">*/}
                        {/*                    <tr>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6">*/}
                        {/*                            Nauczyciel*/}
                        {/*                        </th>*/}
                        {/*                        <th scope="col"*/}
                        {/*                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800">*/}
                        {/*                            Rodzaj zajęć terapeutycznych*/}
                        {/*                        </th>*/}
                        {/*                    </tr>*/}
                        {/*                    </thead>*/}
                        {/*                    <tbody className="divide-y divide-gray-200 bg-white">*/}
                        {/*                    {teachersRow.map((teacher) => (*/}
                        {/*                        <tr key={teacher.name}>*/}
                        {/*                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-800 sm:pl-6">*/}
                        {/*                                <strong className="font-medium">{teacher.name}</strong>*/}
                        {/*                            </td>*/}
                        {/*                            <td className="whitespace-nowrap px-3 py-4 text-sm">{teacher.role}</td>*/}
                        {/*                        </tr>*/}
                        {/*                    ))}*/}
                        {/*                    </tbody>*/}
                        {/*                </table>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </div>
</section>
)
}

export default ProjectsPreschoolPage