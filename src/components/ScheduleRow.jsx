import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const tabs = [
    { name: 'Grupa Tygryski' },
    { name: 'Grupa Sówki' },
]

const schedule1 = [
    { id: "1", time: "8.00 - 8.30", description: "Schodzenie się dzieci do przedszkola" },
    { id: "2", time: "8.00 - 9.00", description: "Zabawy dowolne służące realizacji pomysłów dzieci (układanki, puzzle, kolorowanki, rysowanie, klocki, zabawy tematyczne, inne…)" },
    { id: "3", time: "9.00 - 9.10", description: "Prace porządkowe" },
    { id: "4", time: "9.10 - 9.40", description: "Powitanie. Przeliczanie dzieci. Omawianie pogody, określanie pory roku, miesiąca, dnia tygodnia, pory dnia. Zabawy integrujące. Ćwiczenia poranne" },
    { id: "5", time: "9.40 - 10.00", description: "Przygotowanie do śniadania. Dbanie o higienę. Mycie rąk, toaleta" },
    { id: "6", time: "10.00 - 10.30", description: "Śniadanie. Wdrażanie zasad kulturalnego zachowywania się podczas posiłku" },
    { id: "7", time: "10.30 - 10.45", description: "Odpoczynek. Relaks przy muzyce" },
    { id: "8", time: "10.45 - 11.45", description: "Realizacja zdań edukacyjnych z całą grupą" },
    { id: "9", time: "11.45 - 12.15", description: "Zabawy dowolne w sali, zgodne z zainteresowaniem dzieci. Porządkowanie sali." },
    { id: "10", time: "12.15 - 13.00", description: "Spacery. Zabawy ruchowe na świeżym powietrzu, obserwacje przyrodnicze. Dostrzeganie zmian zachodzących w przyrodzie. Rozchodzenie się dzieci do domu." },
]

const schedule2 = [
    { id: "1", time: "8.00 - 8.30", description: "Schodzenie się dzieci do przedszkola. Oznaczanie się na liście obecności" },
    { id: "2", time: "8.00 - 8.50", description: "Zabawy dowolne służące realizacji pomysłów dzieci (manipulacyjne, konstrukcyjne, tematyczne, dydaktyczne, inne). Indywidualna pomoc wspomagająca rozwój dziecka, ćwiczenia ogólnorozwojowe" },
    { id: "3", time: "8.50 - 9.00", description: "Prace porządkowe" },
    { id: "4", time: "9.00 - 9.45", description: "Przywitanie w kręgu. Przeliczanie dzieci. Określanie pory roku, miesiąca, dnia tygodnia, pory dnia. Omawianie pogody. Określanie swojego samopoczucia. Rozmowa swobodna. Gimnastyka buzi i języka. Wybrane zabawy integrujące grupę" },
    { id: "5", time: "9.45 - 10.15", description: "Zabawy i ćwiczenia muzyczno - ruchowe" },
    { id: "6", time: "10.15 - 10.30", description: "Przygotowanie do śniadania, dbanie o higienę" },
    { id: "7", time: "10.30 - 11.00", description: "Śniadanie. Wdrażanie zasad kulturalnego zachowywania się podczas posiłku." },
    { id: "8", time: "11.00 - 11.15", description: "Odpoczynek po śniadaniu, <em>Czas z książką</em>." },
    { id: "9", time: "11.15 - 12.00", description: "Realizacja zadań edukacyjnych poprzez zajęcia z całą grupą. Podsumowanie dnia w kręgu" },
    { id: "10", time: "12.00 - 13.00", description: "Spacery, zabawy ruchowe na powietrzu, obserwacje przyrodnicze, zabawy dowolne na placu przedszkolnym" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ScheduleRow() {
    return (
        <Tab.Group>
            <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
                    {tabs.map(tab => (
                        <Tab as={Fragment} key={tab.name}>
                            {({ selected }) => (
                                /* Use the `selected` state to conditionally style the selected tab. */
                                <button
                                    className={
                                        classNames(
                                            selected
                                                ? 'border-purple-600 text-blue-600 outline-none'
                                                : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800',
                                            'whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                        )
                                    }
                                >
                                    {tab.name}
                                </button>
                            )}
                        </Tab>
                    ))}

                </Tab.List>
            </div>


            <Tab.Panels>
                <Tab.Panel className="p-8">
                    <dl className="divide-y divide-gray-100">
                        {
                            schedule1.map(item => (
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={item.id}>
                                    <dt className="text-sm font-medium leading-6 text-blue-600">{item.time}</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {item.description}
                                    </dd>
                                </div>
                            ))
                        }
                    </dl>
                </Tab.Panel>
                <Tab.Panel className="p-8">
                    <dl className="divide-y divide-gray-100">
                        {
                            schedule2.map(item => (
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={item.id}>
                                    <dt className="text-sm font-medium leading-6 text-blue-600">{item.time}</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        {item.description}
                                    </dd>
                                </div>
                            ))
                        }
                    </dl>
                </Tab.Panel>

            </Tab.Panels>
        </Tab.Group>
    )
}

export default ScheduleRow