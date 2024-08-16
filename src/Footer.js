import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="/aboutme" class="nav-link px-2 text-muted">About Me</a></li>
            </ul>
            <p className="text-center text-muted">spartanswordfish</p>
        </footer>
    );
}

export default Footer;