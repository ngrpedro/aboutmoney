import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function Searchform() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
