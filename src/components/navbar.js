import { Container, Navbar } from 'react-bootstrap';

export default function CustomNavbar(props) {
    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="./logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <b>Cloudbook</b>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}