import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Searchform } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <Searchform />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant={"income"}>R$12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/03/2023</td>
            </tr>

            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant={"outcome"}>- R$61,30</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/03/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
