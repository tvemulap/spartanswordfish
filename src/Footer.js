import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
                <li class="nav-item"><a href="/aboutme" class="nav-link px-2 text-muted">About Me</a></li>
                <li class="nav-item"><a href="/" disabled class="nav-link px-2 text-muted">Resume</a></li>
            </ul>
            <p class="text-center text-muted">spartanswordfish</p>
        </footer>
    );
}

export default Footer;