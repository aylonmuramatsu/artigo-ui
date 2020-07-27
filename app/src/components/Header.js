import React, { useEffect, useState } from 'react'
import * as UI from '../ui/Header.ui'
import { Text, Image } from 'react-native'
import AvatarImage from '../assets/imgs/avatar.png'
import { useFetch } from '../hooks/useFetch'
export default function Header(){
  const [user, setUser] = useState(null);
  const [wallets, setWallets] = useState([]);

  async function fetchUser(){
    const {data} = await useFetch('/users/1')
    setUser(data);
  }

  async function getWallets(){
    const { data } = await useFetch('/wallets');
    setWallets(data);
  }
  useEffect(() => {
    Promise.all([
      fetchUser(),
      getWallets()
    ])

  }, [])
  return (
    <UI.Header>
      <UI.Avatar source={AvatarImage}/>
      <UI.UserInfo>
        <UI.Welcome>Seja Bem-vindo,</UI.Welcome>
        <UI.Username>{user?.name}</UI.Username>
      </UI.UserInfo>
      <UI.BalanceContainer>
        <UI.BalanceTitle>Saldo</UI.BalanceTitle>
        <UI.Balance>{wallets.map(({balance}) => balance).reduce((prev, actually) => (prev + actually), 0).money()}</UI.Balance>
      </UI.BalanceContainer>
    </UI.Header>
  )
}