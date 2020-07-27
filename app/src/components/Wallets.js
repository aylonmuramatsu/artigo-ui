import React, { useState, useEffect } from 'react'
import * as UI from '../ui/Wallets.ui'
import { useFetch } from '../hooks/useFetch'
import WalletItem from './WalletItem'

export default function Wallets(){
  const [wallets, setWallets] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await useFetch('/wallets');
      setWallets(data)
    })()

  }, [])
  return (
    <UI.Container horizontal={true}  showsHorizontalScrollIndicator={false} decelerationRate="fast">
      {wallets.map((wallet) => (
        <WalletItem key={wallet.id} {...wallet}/>
      ))}
    </UI.Container>
  )
}