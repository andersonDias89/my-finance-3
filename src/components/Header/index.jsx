import { Logo } from "./Logo"
import { Navegation } from "./Navegation"
import { Profile } from "./Profile"

export const Header = () => {
    return (
        <header className="w-ful  bg-secondary ">
            <div className="h-16 flex w-11/12 m-auto justify-between items-center">
                <Logo />
                <Navegation />
                <Profile />
            </div>
        </header>
    )
}