import { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Navbar_ extends Component {
    render() {
        return (
            <>
                <Navbar bg="transparent" variant="light" expand="lg" className="shadow-md">
                    <Container className="px-4 py-2">
                        <Navbar.Brand href="/" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                            WB
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-gray-900" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto space-x-6 text-gray-700">
                                <Nav.Link href="/" className="hover:text-indigo-600">Home</Nav.Link>
                                <NavDropdown title="Listagem" id="basic-nav-dropdown" className="hover:text-indigo-600">
                                    <NavDropdown.Item href="/clientes" className="text-gray-700 hover:text-indigo-600">Clientes</NavDropdown.Item>
                                    <NavDropdown.Item href="/produtos" className="text-gray-700 hover:text-indigo-600">Produtos</NavDropdown.Item>
                                    <NavDropdown.Item href="/servicos" className="text-gray-700 hover:text-indigo-600">Serviços</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/consumos" className="text-gray-700 hover:text-indigo-600">Consumos</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Cadastrar" id="basic-nav-dropdown" className="hover:text-indigo-600">
                                    <NavDropdown.Item href="/cadastrar_cliente" className="text-gray-700 hover:text-indigo-600">Cliente</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_produto" className="text-gray-700 hover:text-indigo-600">Produto</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_servico" className="text-gray-700 hover:text-indigo-600">Serviço</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
