import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Skills Shop</h3>
            <div>
                <button>Spells</button>
                <button>Abilities</button>
                <button>Skills</button>
            </div>

            <CartWidget />
        </nav>
    )
}


export default NavBar