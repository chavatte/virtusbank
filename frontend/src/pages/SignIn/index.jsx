import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Background,
  ButtonContainer,
  InputContainer,
  InfoBall,
  Wrapper,
} from "./styles";
import { Alert, AlertNotice } from "../../components/Alerts";
import background from "../../assets/banner.png";
import logoVirtusBank from "../../assets/logo.png";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InstructionsPopup from "../../components/Popup";
import instructionIcon from "../../assets/instruction.png";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { userSignIn } = useAuth();
  const navigate = useNavigate();

  const handleToSignIn = async () => {
    setIsLoading(true);
    try {
      const data = { email, password };
      const response = await userSignIn(data);
      if (response.id) {
        setErrorMessage(null);
        setSuccessMessage(`Bem-vindo, ${response.firstName}!`);
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
          navigate("/dashboard");
        }, 2500);
      } else {
        setErrorMessage("Erro ao autenticar. Verifique seus dados.");
        setShowSuccess(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Usuário ou senha inválida");
      } else {
        setErrorMessage(
          "Falha ao entrar. Por favor, verifique suas credenciais."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Background image={background} />
      <Card width="403px">
        <img
          src={logoVirtusBank}
          alt="logo Virtus Bank"
          width={250}
          height={61}
        />
        <AlertNotice />
        <InputContainer>
          <Input
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="SENHA"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn} disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
          {successMessage && showSuccess && !errorMessage && (
            <Alert type="success">{successMessage}</Alert>
          )}
          {errorMessage && <Alert type="error">{errorMessage}</Alert>}
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadastre-se já!</Link>
          </p>
        </ButtonContainer>
      </Card>
      <InstructionsPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <InfoBall onClick={() => setShowPopup(true)}>
        <img src={instructionIcon} alt="Instruções" />
        <span>Instruções</span>
      </InfoBall>
    </Wrapper>
  );
};

export default SignIn;
