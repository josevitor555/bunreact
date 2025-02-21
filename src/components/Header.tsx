export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full">
            <div className="logo">
                <h1 className="text-2xl"> Logo Here </h1>
            </div>

            <div className="nav-menu">
                <ul className="flex text-1xl">
                    <li className="hover:underline font-semibold"> <a href="#"> Home </a> </li>
                    <li className="hover:underline font-semibold"> <a href="#"> Service </a> </li>
                    <li className="hover:underline font-semibold"> <a href="#"> About </a> </li>
                    <li className="hover:underline font-semibold"> <a href="#"> Logout </a> </li>
                </ul>
            </div>

            <div className="buttons">
                <button type="button"> Click Here </button>
            </div>
        </header>
    )
}