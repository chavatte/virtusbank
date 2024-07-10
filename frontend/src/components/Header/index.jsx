import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HeaderContainer, HeaderWrapper, UserInfo, Alert } from "./styles";
import logoVirtusBank from "../../assets/logo.png";
import UserCircle from "../UserCicle";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const initials = user
    ? user.firstName.substr(0, 1) + user.lastName.substr(0, 1).toUpperCase()
    : "";

  const handleLogoff = () => {
    navigate("/");
  };

  const currentHour = new Date().getHours();

  let greeting = "";
  if (currentHour < 12) {
    greeting = "Bom dia";
  } else if (currentHour < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoVirtusBank} alt="logo Virtus Bank" width={172} height={61} />
        <Alert>
          <p>
            Conteúdo Educacional!
            <br /> Pseudotransações!
          </p>
        </Alert>
        {user && (
          <UserInfo>
            <UserCircle initials={initials} />
            <div>
              <p>
                {greeting},{" "}
                <span className="primary-color font-bold">
                  {user.firstName} {user.lastName}
                </span>
              </p>
              <p>
                C/C:{" "}
                <strong>
                  {user.accountNumber}-{user.accountDigit}
                </strong>
              </p>
            </div>
            {/* eslint-disable-next-line */}
            <a href="#" onClick={handleLogoff}>
            Sair
            </a>
          </UserInfo>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
