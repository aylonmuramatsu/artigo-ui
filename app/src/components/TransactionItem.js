import React from 'react';
import * as UI from '../ui/TransactionItem.ui'

export default function TransactionItem({ item }){
  return (
    <UI.Container>
      <UI.ContainerHeader>
        <UI.Title>{item.name}</UI.Title>
        <UI.CostTitle>{item.cost.money()}</UI.CostTitle>
      </UI.ContainerHeader>
    </UI.Container>
  )
}