import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { PopupContent, CloseButton, PopupOverlay } from "./styles";

const InstructionsPopup = ({ showPopup, setShowPopup }) => {
  return (
    <div>
      <Popup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        overlay={<PopupOverlay />}
      >
        {(close) => (
          <PopupContent>
            <h2>Instruções de Uso</h2>

            <p>
              Bem-vindo ao Virtus Bank! Este é um ambiente de simulação. As
              transações realizadas aqui são fictícias e não afetam suas
              finanças reais.
            </p>

            <h3>Como Entrar:</h3>
            <p>Você pode entrar com uma das contas pré-existentes:</p>
            <ul className="fictitious-accounts">
              <li>
                <strong>Email:</strong> joao@virtus.com <strong>Senha:</strong>{" "}
                123456
              </li>
              <li>
                <strong>Email:</strong> maria@virtus.com <strong>Senha:</strong>{" "}
                123456
              </li>
            </ul>
            <p>
              Ou criar sua{" "}
              <Link to="/signup">
                <strong>própria conta clicando aqui</strong>
              </Link>{" "}
              ou clicando em <strong>"Cadastre-se já!"</strong> na tela de
              login.
            </p>

            <h3>Recursos:</h3>
            <ul>
              <li>
                <strong>Saldo Atual: </strong> Visualize seu saldo disponível.
              </li>
              <li>
                <strong>Receber PIX: </strong> Gere um código PIX para receber
                pagamentos.
              </li>
              <li>
                <strong>Pagar PIX: </strong> Utilize uma chave PIX para realizar
                pagamentos.
              </li>
              <li>
                <strong>Extrato da Conta: </strong> Consulte seu histórico de
                transações.
              </li>
            </ul>

            <p>
              Lembre-se, este é um ambiente de aprendizado. Explore, experimente
              e divirta-se!
            </p>

            <CloseButton onClick={close}>Fechar</CloseButton>
          </PopupContent>
        )}
      </Popup>
    </div>
  );
};

export default InstructionsPopup;
