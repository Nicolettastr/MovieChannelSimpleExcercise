import logo from "../../public/Movie.svg.png";

const Navbar = () => {
    const options = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Movies",
            link: "/movies",
        },
        {
            id: 3,
            name: "Blog",
            link: "/blog",
        },
        {
            id: 4,
            name: "Contact",
            link: "/contact",
        },
    ];

    return (
        <section className='navbar'>
            <img src={logo} alt='logo' />
            <div>
                <ul className='optionsList'>
                    {options.map((option) => (
                        <li key={option.id}>{option.name}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
