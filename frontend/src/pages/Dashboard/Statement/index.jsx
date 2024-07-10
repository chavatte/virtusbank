import React, { useEffect, useState } from "react";
import { transactions } from "../../../services/resources/pix";
import {
  StatementContainer,
  StatementItemContainer,
  StatementItemImage,
  StatementItemInfo,
  NoTransactionsMessage,
} from "./styles";
import PayIMG from "../../../assets/pay.png";
import ReceiveIMG from "../../../assets/receive.png";

const StatementItemData = ({ user, value, type, updatedAt }) => {
  const imageSrc = type === "paid" ? PayIMG : ReceiveIMG;
  return (
    <StatementItemContainer>
      <StatementItemImage
        src={imageSrc}
        alt={type === "paid" ? "Pagamento" : "Recebimento"}
      />

      <StatementItemInfo>
        <p className="primary-color">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </p>

        <p>
          {type === "paid" ? "Pago a " : "Recebido de "}
          <strong>
            {user.firstName} {user.lastName}{" "}
          </strong>
        </p>
        <p>
          {updatedAt.split(" ")[0]} às {updatedAt.split(" ")[1]}
        </p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
};

const Statement = () => {
  const [statements, setStatements] = useState([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data.transactions);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <StatementContainer>
      {statements.length > 0 ? (
        statements.map((statement) => (
          <StatementItemData key={statement.id} {...statement} />
        ))
      ) : (
        <NoTransactionsMessage>
          <p>Não foram realizadas transações ainda.</p>
        </NoTransactionsMessage>
      )}
    </StatementContainer>
  );
};

export default Statement;
