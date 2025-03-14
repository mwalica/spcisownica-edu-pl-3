import {Fragment, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";

const content = [
    {
        id: 1,
        activity:
            "Przyjmowanie zgłoszeń",
        date1: "od 10 marca 2025 r. do 21 marca 2025 r."
    },
    {
        id: 2,
        activity:
            "Podanie do publicznej wiadomości przez komisję rekrutacyjną listy kandydatów zakwalifikowanych do 1 klasy",
        date1: "23 kwietnia 2025 r."
    },
    {
        id: 3,
        activity:
            "Potwierdzenie przez rodzica kandydata woli przyjęcia",
        date1: "od 24 kwietnia 2025 r. do 30 kwietnia 2025 r.",
    },
];

function AlertRecruit({open, onClose}) {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                initialFocus={cancelButtonRef}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform  rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-base text-center font-semibold leading-6 text-gray-900"
                                        >
                                            Harmonogram rekrutacji do klasy 1 Szkoły Podstawowej w
                                            Cisownicy na rok szkolny 2025/2026
                                        </Dialog.Title>
                                        <p className="py-2">Rozpoczynamy rekrutacja do klasy 1. Dokumenty do pobrania związane z rekrutacją:
                                        <ul>
                                            <li><a href="https://spcisownica.edu.pl/dokumenty/zgloszenie_obwod_2526.pdf" target="_blank" rel="noreferrer" className="underline underline-offset-2 text-blue-700">zgłoszenie dla ucznia z obwodu</a></li>
                                            <li><a href="https://spcisownica.edu.pl/dokumenty/wniosek_spoza_obwod_2526.pdf" target="_blank" rel="noreferrer" className="underline underline-offset-2 text-blue-700">wniosek dla ucznia spoza obwodu</a></li>
                                            <li><a href="https://spcisownica.edu.pl/dokumenty/regulamin_rekrutacji_szkola_26.pdf" target="_blank" rel="noreferrer" className="underline underline-offset-2 text-blue-700">regulamin rekrutacji dzieci do klasy pierwszej</a></li>
                                        </ul>
                                        </p>
                                        {/* table */}
                                        <div className="px-4 sm:px-6 lg:px-8">
                                            <div className="mt-8 flow-root">
                                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                    <div
                                                        className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                        <table className="min-w-full divide-y divide-gray-300">
                                                            <thead>
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                                                >
                                                                    L.p.
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                                >
                                                                    Rodzaj czynności
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                                >
                                                                    Terminy w postępowaniu rekrutacyjnym
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200">
                                                            {content.map((item) => (
                                                                <tr key={item.id}>
                                                                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                                        {item.id}
                                                                    </td>
                                                                    <td className="px-3 py-4 text-sm text-gray-500">
                                                                        {item.activity}
                                                                    </td>
                                                                    <td className="px-3 py-4 text-sm text-blue-800">
                                                                        {item.date1}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* table end */}
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:justify-center">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={onClose}
                                    >
                                        Zamknij
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default AlertRecruit;
