import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export interface INavbarComponentProps {
    history: any;
}

export interface INavbarComponentState {
}

export default class NavbarComponent extends React.Component<INavbarComponentProps, INavbarComponentState> {
    public props: any;
    constructor(props: INavbarComponentProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>NavBar Title Here</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link id='home' onClick={() => this.props.history.push('/')}>Home</Nav.Link>
                    <Nav.Link id='login' onClick={() => this.props.history.push('/login')}>Login</Nav.Link>
                    <Nav.Link id='account' onClick={() => this.props.history.push('/account')}>Account (authorized route)</Nav.Link>


                </Navbar.Collapse>
            </Navbar>);
    }
}
