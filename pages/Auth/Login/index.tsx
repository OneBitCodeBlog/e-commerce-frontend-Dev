import LoginForm from '../../../components/LoginForm';
import MainComponent from '../../../components/shared/MainComponent';
import SignUpForm from '../../../components/SignUpForm';

const Login: React.FC = () => {
  return (
    <MainComponent>
      <div className="p-4 text-center">
        <h2>Entrar</h2>

        <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />

        <br />

        <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
      </div>
    </MainComponent>
  )
}

export default Login;