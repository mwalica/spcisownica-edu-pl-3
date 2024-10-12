import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const tabs = [
    { name: 'Dokumenty ogólne' },
    // { name: 'Nabór' },
]

const generalDocuments = [
    { name: "Rozkład dnia", url: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/rozklad_dnia_cisownica.pdf` },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Documents() {
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
                            generalDocuments.map(document => (
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={document.name}>
                                    <dt className="text-sm font-medium leading-6 text-gray-900">{document.name}</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <a href={document.url} className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><PaperClipIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" " + document.url.slice(document.url.lastIndexOf("/") + 1)}</a>
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

export default Documents