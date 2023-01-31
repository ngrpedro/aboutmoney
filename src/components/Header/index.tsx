import {
  HeaderContainer,
  HeaderContent,
  LogoContianer,
  NewTransactionButton,
} from "./styles";
import logo from "../../assets/coins-green.png";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContianer>
          <img src={logo} alt="" />
          <span>Money-Tracker</span>
        </LogoContianer>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
