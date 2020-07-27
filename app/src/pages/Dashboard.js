import React from 'react';
import * as UI from '../ui/Dashboard.ui'
import Wallets from '../components/Wallets';
import Transactions from '../components/Transactions';
import colors from '../system/colors';

export default function Dashboard(){

  return (
    <UI.Container>
      <UI.Title>Minhas Carteiras</UI.Title>
      <Wallets/>
      <UI.Title style={{color: colors.MIDNIGHT_BLUE, fontWeight: 'bold'}}>Contas Próximas</UI.Title>
      <Transactions/>
    </UI.Container>
  )
}