import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid"
import {useEffect, useState} from "react";
import {RiContrastFill} from "react-icons/ri";

const TopBar = () => {

    const [fontScale, setFontScale] = useState(1);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontScale}rem`;
        if (dark) {
            document.documentElement.classList.add("dark");
            document.body.classList.add("dark:bg-black");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark:bg-black");

        }
    }, [fontScale, dark]);


    return (
        <div className='hidden lg:block bg-gradient-to-b from-blue-800 to-blue-600'>
            <div className='mx-auto flex max-w-7xl items-start justify-start p-2 lg:px-8 text-white/75'>
                <a href='tel:338528233'
                   className="text-white opacity-75 hover:text-white/90 duration-200 hover:no-underline dark:opacity-100">
                    <PhoneIcon className='inline h-6 w-6 '/>&nbsp;33 8528233&nbsp;&nbsp;|{" "}
                </a>
                <a href='mailto: zspcisownica@oswiata.goleszow.info.pl'
                   className="text-white opacity-75 hover:text-white/90 duration-200 hover:no-underline dark:opacity-100">
                    &nbsp;&nbsp;<EnvelopeIcon className='inline h-6 w-6 '/>&nbsp;
                    zspcisownica@oswiata.goleszow.info.pl &nbsp;&nbsp;|&nbsp;&nbsp;
                </a>
                <a href="http://spcisownica.biposwiata.pl/" target="_blank" rel="noreferrer"
                   className="text-white opacity-75 hover:text-white/90 duration-200 hover:no-underline dark:opacity-100">&nbsp;
                    BIP &nbsp;&nbsp;|&nbsp;&nbsp;
                </a>
                <div className="flex-1"></div>
                <div>
                    <button className="text-white"
                            onClick={() => setFontScale(prev => prev === 1 ? 1.2 : 1)}>{fontScale === 1 ?
                        <div className="inline"><span
                            className="text-sm">A</span><span className="text-lg">A</span>++</div> :
                        <div><span className="text-lg">A</span><span
                            className="text-sm">A</span>--</div>}
                    </button>
                    &nbsp;&nbsp;
                    <button onClick={() => setDark(prev => !prev)}
                            className="text-white transition duration-300">
                        <RiContrastFill className='inline h-6 w-6 -mt-1' />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TopBar