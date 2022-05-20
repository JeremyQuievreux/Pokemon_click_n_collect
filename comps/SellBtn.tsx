//Base
import React, { useContext } from 'react'
import styles from '../styles/comps/SellBtn.module.scss'
import { BsCoin } from "react-icons/bs";
//Context
import { SellCardModalContext } from '../context/SellCardModalContext'
import { UserContext } from '../context/UserContext';
//Type
import { PokemonType } from '../types/PokemonType';

type CardAndQuantityType = {
    card: PokemonType,
    quantity: number
    dex_number: number
}

type SellBtnProps = {
    card: CardAndQuantityType
}

const BuyBtn = ({card}:SellBtnProps) => {
    //Context
    const { userInfos } = useContext(UserContext);
    const { setShowSellCardModal, setSellCardModalInfos} = useContext(SellCardModalContext);

  return (
    <div className={styles.sell_line}>
        <p>{card.card.price} <BsCoin/></p>
        <button onClick={()=> {
            setShowSellCardModal(true);
            setSellCardModalInfos({cardID: card.card._id, cardName: card.card.name, cardPrice: card.card.price, userID: userInfos?._id, userCoin: userInfos?.pokeCoin})
        }}>Vendre</button>
    </div>
  )
}

export default BuyBtn