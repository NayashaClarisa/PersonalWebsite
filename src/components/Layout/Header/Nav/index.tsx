import NavItem from '../NavItem'

const Nav = () => {
    return (
        <nav className = "flex items-center gap-5">
            <NavItem
                href = "/"
                label = "Home"
            />
            {/* <NavItem
                href = "/"
                label = "Experience"
            />
            <NavItem
                href = "/"
                label = "Certificate"
            />
            <NavItem
                href = "/"
                label = "Contact"
            /> */}
        </nav>
    )
}

export default Nav