import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const content = [
  {
    id: 1,
    activity:
      "Złożenie wniosku o przyjęcie do szkoły wraz z dokumentami potwierdzającymi spełnianie przez kandydata warunków lub kryteriów branych pod uwagę w postępowaniu rekrutacyjnym.",
    date1: "od 11 marca 2024r. do 22 marca 2024r.",
    date2: "od 27 maja 2024r. do 03 czerwca 2024r.",
  },
  {
    id: 2,
    activity:
      "Weryfikacja przez komisję rekrutacyjną wniosków o przyjęcie do szkoły oraz dokumentów potwierdzających spełnianie przez kandydata warunków lub kryteriów branych pod uwagę w postępowaniu rekrutacyjnym.",
    date1: "od 25 marca 2024r. do 05 kwietnia 2024r.",
    date2: "od 4 czerwca 2024r. do 7 czerwca 2024r.",
  },
  {
    id: 3,
    activity:
      "Podanie do publicznej wiadomości przez komisję rekrutacyjną listy kandydatów zakwalifikowanych i kandydatów niezakwalifikowanych.",
    date1: "22 kwietnia 2024r.",
    date2: "14 czerwca 2024r.",
  },
  {
    id: 4,
    activity:
      "Potwierdzenie przez rodzica kandydata woli przyjęcia w postaci pisemnego oświadczenia.",
    date1: "od 23 kwietnia 2024r. do 29 kwietnia 2024r.",
    date2: "od 17 czerwca 2024r. do 20 czerwca 2024r.",
  },
  {
    id: 5,
    activity:
      "Podanie do publicznej wiadomości przez komisję rekrutacyjną listy kandydatów przyjętych i kandydatów nieprzyjętych.",
    date1: "7 maja 2024r.",
    date2: "21 czerwca 2024r.",
  },
];

function AlertRecruit({ open, onClose }) {
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform  rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base text-center font-semibold leading-6 text-gray-900"
                    >
                      Harmonogram rekrutacji do klasy 1 Szkoły Podstawowej w
                      Cisownicy na rok szkolny 2024/2025
                    </Dialog.Title>
                    {/* table */}
                    <div className="px-4 sm:px-6 lg:px-8">
                      <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  >
                                    Terminy w postępowaniu uzupełniającym
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
                                    <td className="px-3 py-4 text-sm text-blue-800">
                                      {item.date2}
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
