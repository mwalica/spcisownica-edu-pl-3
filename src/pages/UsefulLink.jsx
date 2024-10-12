import PageTitle from "../components/PageTitle"
import { LinkIcon } from '@heroicons/react/20/solid'


const links = [
    { id: "1", link: "Jak wspierać dziecko w radzeniu sobie z trudnymi emocjami?", desc: "emocjedziecka.pl", href: "https://emocjedziecka.pl/jak-wspierac-dziecko-w-radzeniu-sobie-z-trudnymi-emocjami/" },
    { id: "2", link: "Jak wspierać dziecko w zmianie szkoły?", desc: "emocjedziecka.pl", href: "https://emocjedziecka.pl/jak-wspierac-dziecko-w-zmianie-szkoly/" },
    { id: "3", link: "Błędy, które popełniają rodzice w trakcie rozwodu", desc: "emocjedziecka.pl", href: "https://emocjedziecka.pl/bledy-ktore-popelniaja-rodzice-w-trakcie-rozwodu/" },
    { id: "4", link: "Jak rozmawiać z dzieckiem, gdy ktoś umarł? Jak mówić dziecku o śmierci?", desc: "emocjedziecka.pl", href: "https://emocjedziecka.pl/jak-rozmawiac-z-dzieckiem-gdy-ktos-umarl-jak-mowic-dziecku-o-smierci/" },
    { id: "5", link: "Nastoletnia depresja - poradnik dla rodziców", desc: "forumprzeciwagresji.pl", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/nastoletnia_depresja_poradnik_dla_rodzicow.pdf` },
    { id: "6", link: "Nastoletnia Depresja", desc: "opracowanie Monika Kalinowska", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/depresja_nastoletnia.pdf` },
    { id: "7", link: "Cyberprzemoc - włącz blokadę na nękanie", desc: "opracowanie Anna Borkowska", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/cyberprzemoc1.pdf` },
    { id: "8", link: "FOMO i nadużywanie nowych technologii", desc: "opracowanie Marta Witkowska", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/fomo.pdf` },
    { id: "9", link: "Domowe zasady ekranowe", desc: "opracowanie Katarzyna Blak-Filus", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/domowe_zasady_ekranowe.pdf` },
    { id: "10", link: "Jak radzić sobie ze stresem?", desc: "opracowanie Katarzyna Blak-Filus", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/jak_radzic_stresem.pdf` },
    { id: "11", link: "Hejt - STOP", desc: "", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/hejt_stop.pdf` },
    { id: "12", link: "Jaki posiadasz styl komunikowania się?", desc: "opracowanie Katarzyna Płuska", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/jaki_styl_komunikowania.pdf` },
    { id: "13", link: "Nauka w domu - wskazówki", desc: "opracowanie Magdalena Gdula", href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/nauka_zdalna_wskazowki.pdf` },
]

function UsefulLinkPage() {
    return (<section className="flex-1">
        <div className='relative isolate'>
            {/* svg graphic 2 */}
            <div
                className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
                aria-hidden='true'
            >
                <div
                    className='aspect-[801/600] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
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
                    <PageTitle title='Przydatne linki' subtitle='Pedagog i Psycholog' />

                    {/* content */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="overflow-hidden rounded-md bg-white shadow">
                            <ul role="list" className="flex flex-col divide-y divide-gray-200">
                                {links.map(item => (
                                    <li className="px-6 py-4">
                                        <a href={item.href} className="text-blue-800 hover:text-blue-900 hover:underline" target="_blank" rel="noreferrer"><LinkIcon className="inline h-5 w-5 flex-shrink-0" aria-hidden="true" />{" "}
                                            {item.link}</a> - {item.desc}
                                    </li>
                                ))}

                            </ul>
                        </div>
                        {/* info container */}

                    </div>

                </div>
            </div>
        </div>
    </section>)
}

export default UsefulLinkPage