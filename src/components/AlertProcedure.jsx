import {Fragment, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {PaperClipIcon} from "@heroicons/react/20/solid";


function AlertProcedure({open, onClose}) {
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
                                className="relative transform  rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6 dark:bg-gray-900">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-base text-center font-semibold leading-6 text-gray-900"
                                        >
                                            Procedura wydawania opinii o uczniu
                                        </Dialog.Title>
                                        <p className="py-2 leading-7">
                                            Procedura dotyczy opinii o funkcjonowaniu ucznia w Zespole
                                            Szkolno-Przedszkolnym sporządzanych na wniosek rodzica lub opiekuna
                                            prawnego, przeznaczonych m.in. dla sądu, poradni
                                            psychologiczno-pedagogicznej, lekarza lub psychologa
                                            <ul className="ps-6 text-blue-800 dark:text-blue-200 space-y-2 my-2">
                                               <li>1. Rodzic lub opiekun prawny składa wniosek w sekretariacie Zespołu Szkolno-Przedszkolnego w
                                                   Cisownicy w formie papierowej albo w formie elektronicznej za pośrednictwem adresu do doręczeń
                                                   elektronicznych Zespołu Szkolno-Przedszkolnego w Cisownicy (wzór wniosku dostępny jest na stronie
                                                   internetowej ZSP oraz w sekretariacie)</li>
                                                <li>2. Wniosek zawiera dane ucznia, klasę, cel wydania opinii, jej odbiorcę oraz zakres potrzebnych
                                                    informacji. W razie potrzeby rodzic dołącza formularz wymagany przez instytucję.</li>
                                                <li>3. Pracownik sekretariatu odnotowuje datę wpływu wniosku w rejestrze. Dyrektor przekazuje wniosek
                                                    wychowawcy i odpowiednim specjalistom w celu przygotowania opinii.</li>
                                                <li>4. Zespół Szkolno-Przedszkolny przygotowuje opinię w ciągu 7 dni roboczych od dnia złożenia wniosku.</li>
                                                <li>5. Zespół Szkolno-Przedszkolny informuje rodzica o możliwości odbioru dokumentu. Datę odbioru
                                                    odnotowuje się w rejestrze, a rodzic potwierdza odbiór podpisem.</li>
                                            </ul>
                                            Data wprowadzenia procedury: 05.10.2026 r
                                        </p>
                                        <p className="mt-4">Dokumenty do pobrania:
                                            <ul className="ps-4 text-blue-800 dark:text-blue-200 space-y-2">
                                                <li><a href={`${
                                                    import.meta.env.VITE_SITE_DOMAIN}/dokumenty/wniosek_o_wydanie_opinii_o_uczniu.pdf`}  target="_blank"
                                                       rel="noreferrer" className="font-semibold hover:text-blue-500">
                                                    <PaperClipIcon
                                                        className="inline h-5 w-5 flex-shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    &nbsp;
                                                    Wniosek o wydanie opinii o uczniu</a></li>
                                                <li><a href={`${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/zarzadzenie_procedura_wydawania_opinii_o_uczniu.pdf`}  target="_blank"
                                                       rel="noreferrer" className="font-semibold hover:text-blue-500"><PaperClipIcon
                                                    className="inline h-5 w-5 flex-shrink-0"
                                                    aria-hidden="true"
                                                />&nbsp;Zarzadzenie - procedura wydawania opinii o uczniu</a></li>
                                            </ul>
                                        </p>

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

export default AlertProcedure;
