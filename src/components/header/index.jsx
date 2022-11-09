import { useState } from "react";

import { HeaderStyled } from "./style";

export const Header = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const realDate = `${day}/${month}/${year}`;

  return (
    <HeaderStyled>
      <section>
        <div className="date">
          <span>{realDate}</span>
        </div>
        <div className="saldo">
          <p>Saldo: </p>
          <span>10.000</span>
        </div>
        <div className="despesas">
          <p>Despesas:</p>
          <span>5.000</span>
        </div>
      </section>
    </HeaderStyled>
  );
};
