import { useState } from "react";
import { Button } from "../../styles/buttons";
import { ModalStyled } from "./style";

export const ModalAdd = ({ showModal, setShowModal }) => {
  const [balance, setBalance] = useState("");
  const [expense, setExpense] = useState(0);

  const addTasks = (inputs) => {
    if (parseFloat(inputs[1].value)) {
      const values = {
        description: inputs[0].value,
        value: inputs[1].value,
        type: inputs[2].value,
      };

      const some = balance.reduce((acc, act) => {
        return (acc += act.value);
      }, 0);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    addTasks(e.target);
  };

  return (
    <ModalStyled>
      <div className="divClose">
        <h2>Cadastrar Finanças</h2>
        <span onClick={() => setShowModal(!showModal)}>x</span>
      </div>
      <div className="divForm">
        <form onSubmit={() => formSubmit()}>
          <label htmlFor="name">Descrição</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex: supermercado"
            required
          />
          <label htmlFor="value">Valor</label>
          <input
            type="text"
            name="value"
            id="value"
            placeholder="0.00"
            required
          />

          <select required>
            <option value="">Selecione uma opção</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
          <Button type="submit">Adicionar</Button>
        </form>
      </div>
    </ModalStyled>
  );
};
