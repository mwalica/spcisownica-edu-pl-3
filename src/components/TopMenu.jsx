import { Fragment, useState } from "react"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

import { useScrollPosition } from "../utils/useScrollPosition"

import { Link, useResolvedPath } from "react-router-dom"
import TopBar from "./TopBar"

const information = [
    { name: "O szkole", href: "about" },
    { name: "Historia", href: "history" },
    { name: "Patron", href: "patron" },
    { name: "Stypendia", href: "stipend" },
    { name: "Nauczyciele", href: "teachers" },
    { name: "Biblioteka", href: "library" },
    { name: "Bezpieczeństwo", href: "security" },
    { name: "Ogłoszenia", href: "notices" },
    { name: "Deklaracja dostępności", href: "accessibility" },
    { name: "Laboratoria przyszłości", href: "laboratoria" },
]

const parents = [
    { name: "Rada Rodziców", href: "counsel-parents" },
    { name: "Składka", href: "contribution" },
    { name: "Rady dla rodziców", href: "advice-for-parents" },
    { name: "Rady psychologa", href: "advice-psychologist" },
    { name: "Przydatne linki", href: "useful-link" },
]

const preschoolCis = [
    { name: "Informacje", href: "preschool-cis/info" },
    { name: "Wydarzenia", href: "preschool-cis/events" },
    { name: "Rozkład dnia", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/rozklad_dnia_cisownica.pdf` },
    { name: "Dokumenty", href: "preschool-cis/documents" },
]

const preschoolRow = [
    { name: "Informacje", href: "preschool-row/info" },
    { name: "Wydarzenia", href: "preschool-row/events" },
    { name: "Zasady", href: "preschool-row/rules" },
    { name: "Rozkład dnia", href: `preschool-row/schedule` },
    { name: "Dokumenty", href: "preschool-row/documents" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const TopMenu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { pathname } = useResolvedPath()
    console.log(pathname)

    const scrollPosition = useScrollPosition()
    console.log(scrollPosition)

    return (
        <header className={`sticky top-0 z-40 transition-shadow ${scrollPosition > 0 || pathname !== "/" ? "bg-white opacity-95 shadow shadow-gray-200" : "bg-transparent shadow-none"}`}>
            <TopBar />
            {/* start nav */}
            <nav
                className=' mx-auto flex max-w-7xl items-center justify-between py-6 px-4'
                aria-label='Global'
            >
                {/* mobile open button */}
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className='sr-only'>Otwórz menu główne</span>
                        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>
                </div>

                {/* nav on desktop */}

                <Popover.Group className='hidden lg:flex lg:gap-x-12'>
                    <Link to='/' className='top-menu-item'>
                        Home
                    </Link>

                    <Popover className='relative'>
                        <Popover.Button className='flex items-center gap-x-1 top-menu-item'>
                            Informacje
                            <ChevronDownIcon
                                className='h-5 w-5 flex-none text-gray-400'
                                aria-hidden='true'
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-800/5'>
                                {({ close }) => (
                                    <>
                                        {information.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className='block rounded-lg px-3 py-2 text-sm top-menu-item hover:bg-gray-50'
                                                onClick={() => close()}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </>
                                )}

                            </Popover.Panel>
                        </Transition>

                    </Popover>
                    <Popover className='relative'>
                        <Popover.Button className='flex items-center gap-x-1 top-menu-item'>Rodzice
                            <ChevronDownIcon
                                className='h-5 w-5 flex-none text-gray-400'
                                aria-hidden='true'
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-800/5'>
                                {({ close }) => (
                                    <>
                                        {parents.map(item => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className='block rounded-lg px-3 py-2 text-sm top-menu-item hover:bg-gray-50'
                                                onClick={() => close()}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </>
                                )}
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link to='/events' className='top-menu-item'>
                        Wydarzenia
                    </Link>
                    <Link to='/documents' className='top-menu-item'>
                        Dokumenty
                    </Link>

                    <Popover className='relative'>
                        <Popover.Button className='flex items-center gap-x-1 top-menu-item'>Przedszkole Cisownica
                            <ChevronDownIcon
                                className='h-5 w-5 flex-none text-gray-400'
                                aria-hidden='true'
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-64 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-800/5'>
                                {({ close }) => (
                                    <>
                                        {preschoolCis.map(item => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className='block rounded-lg px-3 py-2 text-sm top-menu-item hover:bg-gray-50'
                                                onClick={() => close()}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </>
                                )}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Popover className='relative'>
                        <Popover.Button className='flex items-center gap-x-1 top-menu-item'>Przedszkole Równia
                            <ChevronDownIcon
                                className='h-5 w-5 flex-none text-gray-400'
                                aria-hidden='true'
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-64 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-800/5'>
                                {({ close }) => (
                                    <>
                                        {preschoolRow.map(item => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className='block rounded-lg px-3 py-2 text-sm top-menu-item hover:bg-gray-50'
                                                onClick={() => close()}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </>
                                )}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>

                <div className='hidden xl:flex xl:flex-1 xl:justify-end'>
                    <a
                        href='https://spcisownica.admin.datocms.com'
                        target="_blank"
                        rel="noreferrer"
                        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-200'
                    >
                        Logowanie
                    </a>
                </div>
            </nav>
            {/* end nav */}

            <Dialog
                as='div'
                className='lg:hidden'
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className='fixed inset-0 z-10' />
                <Dialog.Panel className='fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    {/* close icon */}
                    <div className='flex items-center justify-end'>
                        <button
                            type='button'
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className='sr-only'>Zamknij menu</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                    </div>

                    {/* mobile menu */}
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='space-y-2 py-6'>
                                <Disclosure as='div' className='-mx-3'>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50'>
                                                Informacje
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? "rotate-180" : "",
                                                        "h-5 w-5 flex-none text-gray-400"
                                                    )}
                                                    aria-hidden='true'
                                                />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className='mt-2 space-y-2'>
                                                {information.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as={Link}
                                                        to={item.href}
                                                        className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-800 hover:bg-gray-50'
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    to='/'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Rodzice
                                </Link>
                                <Link
                                    to='/'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Wydarzenia
                                </Link>
                                <Link
                                    to='/'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Dokumenty
                                </Link>
                                <Link
                                    to='/'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Przedszkole Cisownica
                                </Link>
                                <Link
                                    to='/'
                                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Przedszkole Równia
                                </Link>
                            </div>
                            <div className='py-6'>
                                <a
                                    href='#'
                                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default TopMenu
