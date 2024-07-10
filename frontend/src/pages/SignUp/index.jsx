import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Background, ButtonContainer, InputContainer, Wrapper } from "./styles";
import background from "../../assets/banner.png";
import logoVirtusBank from "../../assets/logo.png";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AlertNotice, Alert } from "../../components/Alerts";

const SignUp = () => {
  const navigate = useNavigate();
  const { userSignUp } = useAuth();

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleToSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, insira um endereço de e-mail válido.");
      return;
    }
    if (password !== passwordConfirm) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    setIsLoading(true);

    const data = { firstName, lastName, email, password };
    try {
      const response = await userSignUp(data);
      if (response.id) {
        setErrorMessage(null);
        setShowSuccess(true);
        setSuccessMessage("Usuário cadastrado com sucesso!");
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/dashboard");
        }, 1500);
      } else {
        setErrorMessage("Erro ao cadastrar. Verifique os dados.");
        setShowSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocorreu um erro inesperado ao cadastrar.");
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
          width={172}
          height={61}
        />
        <AlertNotice />
        <InputContainer>
          <Input
            placeholder="NOME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            placeholder="SOBRENOME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Input
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="SENHA"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            placeholder="CONFIRMAR SENHA"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
          {successMessage && showSuccess && !errorMessage && (
            <Alert type="success">{successMessage}</Alert>
          )}
          {errorMessage && <Alert type="error">{errorMessage}</Alert>}
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignUp} disabled={isLoading}>
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </Button>
          <p>
            Já tem uma conta? <Link to="/">Entre já!</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
};

export default SignUp;
