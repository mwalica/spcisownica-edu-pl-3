import { Link } from "react-router-dom"

const navigation = {
    main: [
        { name: 'Ochrona danych', href: '/data-protection' },
        { name: 'Deklaracja dostępności', href: '/accessibility' },
        { name: 'Statut', href: `${import.meta.env.VITE_SITE_DOMAIN}/dokumenty/statut.pdf` },
        { name: 'BIP', href: 'http://spcisownica.biposwiata.pl/' },
        { name: 'MEN', href: 'https://www.gov.pl/web/edukacja-i-nauka' },
        { name: 'Kuratorium oświaty', href: 'https://kuratorium.katowice.pl/' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-gray-50">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-800" target={item.href.indexOf("http") !==-1 ? "_blank" : null} rel={item.href.indexOf("http") !==-1 ? "noreferrer" : null}>
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                {/* <div className="mt-10 flex justify-center space-x-10">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div> */}
                <p className="mt-10 text-center text-sm leading-5 border-t pt-8">
                    &copy; {new Date().getFullYear()} Zespół Szkolno-Przedszkolny w Cisownicy
                </p>
            </div>
        </footer>
    )
}
