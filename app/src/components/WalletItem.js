import React from 'react';
import * as UI from '../ui/WalletItem.ui';
export default function WalletItem({
  name,
  account,
  agency,
  digit,
  balance
}){
  return(
    <UI.Container>
      <UI.BankTitle>{name}</UI.BankTitle>
      <UI.BankInfo>
        <UI.BankInfoAccount>Conta: {account}-{digit}</UI.BankInfoAccount>
        <UI.BankInfoAccount>Agencia: {agency}</UI.BankInfoAccount>
        <UI.BankInfoBalance>{balance.money()}</UI.BankInfoBalance>
      </UI.BankInfo>
    </UI.Container>
  )
}