import { PhoneIcon } from "@heroicons/react/24/solid"
import { EnvelopeIcon } from "@heroicons/react/24/solid"

const TopBar = () => {
    return (
        <div className='hidden lg:block bg-gradient-to-b from-blue-800 to-blue-600'>
            <div className='mx-auto flex max-w-7xl items-start justify-start p-2 lg:px-8 text-white/75'>
                <a href='tel:338528233' className="text-white opacity-75 hover:text-white/90 duration-200 hover:no-underline">
                    <PhoneIcon className='inline h-6 w-6 ' />&nbsp;33 8528233&nbsp;&nbsp;|{" "}
                </a>
                <a href='mailto: zspcisownica@oswiata.goleszow.info.pl' className="text-white opacity-75 hover:text-white/90 duration-200 hover:no-underline">
                    &nbsp;&nbsp;<EnvelopeIcon className='inline h-6 w-6 ' />&nbsp;
                    zspcisownica@oswiata.goleszow.info.pl &nbsp;&nbsp;|&nbsp;&nbsp;
                </a>
                <a href="http://spcisownica.biposwiata.pl/" target="_blank" rel="noreferrer" className="text-white opacity-75 hover:text-white/90 duration-200 hover:no-underline">&nbsp;
                    BIP
                </a>
            </div>
        </div>
    )
}

export default TopBar