class NavBar extends React.Component {
    render() {
        const links = props.links.map((link, index)=> (
            <li>
                <a href={link.href}>
                    {link.text}
                </a>
            </li>
        ));

        return (
            <nav role="navigation" class="nav">
                <ul class="nav-link" id="nav-ul">
                {links}
                </ul>
            </nav>
        )
    }
}