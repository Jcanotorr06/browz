import Icon from '../public/Icon.svg'
import Save from '../public/Save.svg'
import Export from '../public/Export.svg'
import Themes from '../public/Themes.svg'
import Music from '../public/Music.svg'
import Games from '../public/Games.svg'
import Info from '../public/Info.svg'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 z-30 lg:px-3 lg:py-3 mx-auto w-full mb-8">
            <nav className="bg-main h-12 border border-1 border-accent w-full window-shadow flex items-center">
                <div className="h-full flex items-center justify-center">
                    <div className="px-4 h-full border border-1 border-accent rounded-none">
                        <span>
                            <Icon/>
                        </span>
                    </div>
                </div>
                <div className="h-full flex items-center justify-center ml-auto">
                    <button className="px-6 h-full btn border border-1 border-accent rounded-none">
                        <span>
                            <Save/>
                        </span>
                    </button>
                </div>
                <div className="h-full flex items-center justify-center">
                    <button className="px-6 h-full btn border border-1 border-accent rounded-none">
                        <span>
                            <Export/>
                        </span>
                    </button>
                </div>
                <div className="h-full flex items-center justify-center">
                    <button className="px-6 h-full btn border border-1 border-accent rounded-none">
                        <span>
                            <Themes/>
                        </span>
                    </button>
                </div>
                <div className="h-full flex items-center justify-center">
                    <button className="px-6 h-full btn border border-1 border-accent rounded-none">
                        <span>
                            <Music/>
                        </span>
                    </button>
                </div>
                <div className="h-full lg:flex items-center justify-center hidden">
                    <button className="px-6 h-full btn border border-1 border-accent rounded-none">
                        <span>
                            <Games/>
                        </span>
                    </button>
                </div>
                <div className="h-full flex items-center justify-center">
                    <button className="px-6 h-full btn border border-1 border-accent rounded-none">
                        <span>
                            <Info/>
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar