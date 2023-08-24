import { Main, Body, Logo, Spacing } from './styles'
import { Input, Button } from '../../components'

const Login = () => {
    return (
        <Main>
            <Body>
                <Logo>Gerenciador Financeiro</Logo>
                <Input label="Email" placeholder="Digite o email" />
                <Spacing />
                <Input label="Senha" type="password" placeholder="Digite a senha" />
                <Spacing />
                <Button label="Entrar" variant="btn-primary" />
            </Body>
        </Main>
    )
}

export default Login;