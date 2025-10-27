import {useState} from "react";
import {PaperClipIcon} from "@heroicons/react/20/solid";
import {LinkIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import img1 from "../assets/zspcisownica-1.jpg";
import img2 from "../assets/zspcisownica-2.jpg";
import img3 from "../assets/zspcisownica-3.jpg";
import img4 from "../assets/zspcisownica-4.jpg";
import Alert from "./Alert";
import AlertRecruit from "./AlertRecruit";

function Hero() {
    const [open, setOpen] = useState(false);
    const [openRecruit, setOpenRecruit] = useState(false);

    function onShow() {
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
    }

    function onShowRecruit() {
        setOpenRecruit(true);
    }

    function onCloseRecruit() {
        setOpenRecruit(false);
    }

    return (
        <header>
            <div className="relative isolate">
                {/* svg graphic 1 */}
                <svg
                    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                    />
                </svg>

                {/* svg graphic 2 */}
                <div
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                        }}
                    />
                </div>

                {/* hero */}
                <div className="overflow-hidden">
                    <div
                        className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pt-16 lg:px-8 lg:pt-32 lg:flex lg:items-center">
                        {/* left container */}
                        <div className="flex-1 -translate-y-2">
                            {/* name of school */}
                            <h1 className="text-center lg:text-left text-4xl font-semibold tracking-tight text-blue-600 sm:text-5xl drop-shadow-md sm:leading-[1.5]">
                                Zespół Szkolno-Przedszkolny <br/>
                                <span className="text-blue-400 sm:text-5xl">w Cisownicy</span>
                            </h1>
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                                <a
                                    href="#notices"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white shadow-sm uppercase hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Ogłoszenia
                                </a>
                                {/*<Link*/}
                                {/*    to="/documents"*/}
                                {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white shadow-sm uppercase hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                {/*>*/}
                                {/*    Dokumenty*/}
                                {/*</Link>*/}
                                {/* button show alertRecruit */}
                                {/*<button*/}
                                {/*    onClick={onShowRecruit}*/}
                                {/*    type="button"*/}
                                {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white shadow-sm uppercase hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                {/*>*/}
                                {/*    Rekrutacja Klasa 1*/}
                                {/*</button>*/}
                                {/*<AlertRecruit open={openRecruit} onClose={onCloseRecruit}/>*/}
                                {/* end show alertRecruit */}
                                {/*<a*/}
                                {/*    href="https://naborp-kandydat.vulcan.net.pl/gminagoleszow/Candidates/Add"*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noreferrer"*/}
                                {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white shadow-sm uppercase hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                {/*>*/}
                                {/*    Rekrutacja do przedszkoli*/}
                                {/*</a>*/}
                                {/* button show alert */}
                                {/*<button*/}
                                {/*    onClick={onShow}*/}
                                {/*    type="button"*/}
                                {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white shadow-sm uppercase hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                {/*>*/}
                                {/*    Harmonogram - przedszkola*/}
                                {/*</button>*/}
                                {/*<Alert open={open} onClose={onClose}/>*/}
                                {/* end show alert */}
                                <a
                                    href="https://uonetplus.vulcan.net.pl/gminagoleszow"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md bg-white px-3.5 py-2.5 uppercase text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    E-dziennik
                                </a>
                                <a
                                    href="https://www.spcisownica.edu.pl/dokumenty/plan_lekcji2526.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md bg-white px-3.5 py-2.5 uppercase text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    Plan lekcji
                                </a>
                            </div>

                            {/* link */}
                            <div className="overflow-hidden rounded-md bg-white shadow w-fit mt-20">
                                <ul role="list" className="flex divide-x divide-gray-200">
                                    {/*<li className="px-6 py-2">*/}
                                    {/*    <a*/}
                                    {/*        href="https://uonetplus.vulcan.net.pl/gminagoleszow"*/}
                                    {/*        className="text-blue-800 hover:text-blue-900 hover:underline"*/}
                                    {/*        target="_blank"*/}
                                    {/*        rel="noreferrer"*/}
                                    {/*    >*/}
                                    {/*        <PaperClipIcon*/}
                                    {/*            className="inline h-5 w-5 flex-shrink-0"*/}
                                    {/*            aria-hidden="true"*/}
                                    {/*        />{" "}*/}
                                    {/*        E-dziennik*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li className="px-6 py-2">
                                        <a
                                            href="https://www.spcisownica.edu.pl/dokumenty/statut.pdf"
                                            className="text-blue-800 hover:text-blue-900 hover:underline"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <PaperClipIcon
                                                className="inline h-5 w-5 flex-shrink-0"
                                                aria-hidden="true"
                                            />{" "}
                                            Statut
                                        </a>
                                    </li>
                                    <li className="px-6 py-2">
                                        <Link
                                            to="/accessibility"
                                            className="text-blue-800 hover:text-blue-900 hover:underline"
                                        >
                                            <LinkIcon
                                                className="inline h-5 w-5 flex-shrink-0"
                                                aria-hidden="true"
                                            />{" "}
                                            Deklaracja dostępności
                                        </Link>
                                    </li>
                                    <li className="px-6 py-2">
                                        <a
                                            href="https://www.spcisownica.edu.pl/dokumenty/standardy_ochrony.pdf"
                                            className="text-blue-800 hover:text-blue-900 hover:underline"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <PaperClipIcon
                                                className="inline h-5 w-5 flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            Standardy ochrony małoletnich
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* right container */}
                        <div className="flex space-x-12 justify-center pe-8">
                            {/* photo 2 */}
                            <div className="flex flex-col space-y-8 translate-y-16">
                                <div className="relative">
                                    <img
                                        src={img1}
                                        alt="zsp cisownica"
                                        className="aspect-[2/3] w-40 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="relative">
                                    <img
                                        src={img2}
                                        alt="zsp cisownica"
                                        className="aspect-[2/3] w-40 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                            {/* photo 3 */}
                            <div className="flex flex-col space-y-8">
                                <div className="relative">
                                    <img
                                        src={img3}
                                        alt="zsp cisownica"
                                        className="aspect-[2/3] w-40 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div className="relative">
                                    <img
                                        src={img4}
                                        alt="zsp cisownica"
                                        className="aspect-[2/3] w-40 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
