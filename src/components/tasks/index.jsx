import { Button, ButtonDlt } from "../../styles/buttons";
import { ContainerStyled } from "../../styles/container";
import { MainStyled } from "./style";

import { ModalAdd } from "../modal";

import trashImg from "../../assets/trash.png";

import { useState } from "react";

export const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MainStyled>
      <ContainerStyled>
        <section className="addNew">
          Tasks
          <Button type="button" onClick={() => setShowModal(!showModal)}>
            Add new
          </Button>
        </section>
        <section className="tasks">
          <ul>
            <li>
              <div className="saida"></div>
              <div className="listInfos">
                <p>Mercado</p>
                <ButtonDlt>
                  <span>1000</span>
                  <img src={trashImg} alt="delete" />
                </ButtonDlt>
              </div>
            </li>

            <li>
              <div className="saida"></div>
              <div className="listInfos">
                <p>Mercado</p>

                <ButtonDlt>
                  <span>1000</span>
                  <img src={trashImg} alt="delete" />
                </ButtonDlt>
              </div>
            </li>

            <li>
              <div className="entrada"></div>
              <div className="listInfos">
                <p>Salário</p>
                <ButtonDlt>
                  <span>10000</span>
                  <img src={trashImg} alt="delete" />
                </ButtonDlt>
              </div>
            </li>
          </ul>
        </section>

        {showModal && (
          <ModalAdd showModal={showModal} setShowModal={setShowModal} />
        )}
      </ContainerStyled>
    </MainStyled>
  );
};
