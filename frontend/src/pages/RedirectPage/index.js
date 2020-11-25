import React from 'react';
import Header from '../../components/Header';
import { StatsContainer } from './style';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShortnedService from '../../services/shortnerService';


class RedirectPage extends React.Component {
    constructor(props){
        super(props);        
        this.state = {
            isLoading: false,
            url: '',
            errorMessage: ''
        }
    }

    async componentDidMount(){
        const {code} = this.props.match.params;
        try {
            const service = new ShortnedService();
            const {url} = await service.getLink(code);
            window.location = url;
        } catch (error) {
            this.state({
                isLoading: false,
                errorMessage: 'Ops, a url solicitada não existe'
            });
        }
    }

    render(){
        const { errorMessage } = this.state;
        return (
            <Container>
                   {errorMessage ? (
                        <>
                        <Header>Seu novo encurtador de URL</Header>
                        <StatsContainer className='text-center'>
                            <FontAwesomeIcon size='3x' color='#f8d7da' icon='exclamation-triangle'/>
                            <p className='mb-3'>{errorMessage}</p>
                            <a className='btn btn-primary' href='/'>Encurtar nova URL</a>
                        </StatsContainer>                        
                        </>
                    ) : (
                        <p className='text-center'>Redirecionando...</p>
                    )}
            </Container>
        )
        
    }
}

export default RedirectPage;