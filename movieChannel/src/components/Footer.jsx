import logo from "../../public/Movie.svg.png";

const Footer = () => {
    return (
        <section className='footer'>
            <img src={logo} alt='logo' />
            <div>&copy; React Master</div>
        </section>
    );
};

export default Footer;
