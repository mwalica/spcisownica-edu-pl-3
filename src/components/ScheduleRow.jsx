import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const tabs = [
    { name: 'Grupa Tygryski' },
    { name: 'Grupa Sówki' },
]

const schedule1 = [
    { id: "1", time: "6.30 - 8.00", description: "Schodzenie się dzieci. Zabawy dowolne wg zainteresowań - manipulacyjne, konstrukcyjne, tematyczne, dydaktyczne, inne – służące realizacji pomysłów dzieci." },
    { id: "2", time: "8.00 - 8.30", description: "Przywitanie w kręgu. Zabawy integrujące grupę, zabawy ruchowe w kole, ćwiczenia poranne." },
    { id: "3", time: "8.30 - 9.00", description: "Śniadanie. Czynności związane z higieną osobistą." },
    { id: "4", time: "9.00 - 10.00", description: "Zajęcia dydaktyczne będące realizacją wybranych treści z programu wychowania przedszkolnego , uwzględniające różne rodzaje aktywności: słowną, muzyczną, plastyczną, matematyczną, badawczą." },
    { id: "5", time: "10.00 - 10.30", description: "Drugie śniadanie. Czynności związane z higieną osobistą." },
    { id: "6", time: "10.30 - 12.00", description: "Zabawy w ogrodzie przedszkolnym, na boisku, placu zabaw. Obserwacje przyrodnicze, spacery i zajęcia w terenie." },
    { id: "7", time: "12.00 - 12.30", description: "Obiad. Czynności związane z higieną osobistą." },
    { id: "8", time: "12.30 - 14.00", description: "Odpoczynek po obiedzie- słuchanie muzyki relaksacyjnej, słuchanie bajek literackich." },
    { id: "9", time: "14.00 - 14.30", description: "Podwieczorek. Czynności związane z higieną osobistą." },
    { id: "10", time: "14.30 - 16.30", description: "Zabawy dowolne według zainteresowań; Zabawy i ćwiczenia ruchowe w ogrodzie przedszkolnym (lub na sali). Odbiór dzieci." },
]

const schedule2 = [
    { id: "1", time: "6.30 - 8.00", description: "Schodzenie się dzieci. Zabawy dowolne wg zainteresowań dzieci - manipulacyjne, konstrukcyjne, tematyczne, dydaktyczne, inne - służące realizacji pomysłów dzieci. Indywidualne wspomaganie i korygowanie rozwoju, praca z dzieckiem uzdolnionym" },
    { id: "2", time: "8.00 - 8.30", description: "Przywitanie w kręgu. Realizacja zadań edukacyjnych i wychowawczych poprzez zajęcia z całą grupą. Zestaw ćwiczeń porannych. Ćwiczenia muzyczno-ruchowe." },
    { id: "3", time: "8.30 - 9.00", description: "Śniadanie. Czynności związane z higieną osobistą." },
    { id: "4", time: "9.00 - 10.30", description: "Realizacja zadań edukacyjnych poprzez zajęcia z całą grupą. Zabawy podejmowane z inicjatywy dzieci, manipulacyjne, konstrukcyjne, tematyczne, dydaktyczne, inne. Indywidualne wspomaganie i korygowanie rozwoju, praca z dzieckiem uzdolnionym. Drugie śniadanie." },
    { id: "5", time: "10.30 - 12.00", description: "Zabawy w ogrodzie przedszkolnym, na boisku, placu zabaw. Obserwacje przyrodnicze, spacery i zajęcia w terenie." },
    { id: "6", time: "12.00 - 12.30", description: "Obiad. Czynności związane z higieną osobistą." },
    { id: "7", time: "12.30 - 13.00", description: "Ćwiczenia relaksacyjne, słuchanie bajek, ćwiczenia grafomotoryczne. Zajęcia indywidualne z dziećmi, dostosowane do ich możliwości i potrzeb." },
    { id: "8", time: "13.00 - 14.00", description: "Zabawy i ćwiczenia ruchowe w ogrodzie przedszkolnym (lub na sali). Praca w kąciku przyrody, obserwacje przyrodnicze." },
    { id: "9", time: "14.00 - 14.30", description: "Podwieczorek. Czynności związane z higieną osobistą." },
    { id: "10", time: "14.30 - 16.30", description: "Zabawy integrujące grupę, zabawy tematyczne, wg zainteresowań; Zabawy dydaktyczne, ćwiczenia graficzne, plastyczne, muzyczne. Praca indywidualna lub w małych zespołach. Odbiór dzieci." },
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