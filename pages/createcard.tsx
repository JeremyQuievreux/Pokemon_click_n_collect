import axios from 'axios'
import React , { useState } from 'react'

import styles from '../styles/pages/CreateCard.module.scss'

import { typesPKM } from '../utils/selectorLists'
import { rarityList } from '../utils/selectorLists'
import { priceList } from '../utils/selectorLists'

type CardInfos = {
    gen: number | "",
    dex_number: number | "",
    name: string,
    type1:string,
    type2:string,
    description: string,
    picURL: string,
    price: number | "",
    height: number | "",
    weight: number | "",
    rarity: string,
}

const CreateCard = () => {

    const [ cardInfos , setCardInfos ] = useState<CardInfos>({
        gen: "", 
        dex_number: "", 
        name: "", 
        type1: "", 
        type2: "", 
        description: "", 
        picURL: "", 
        price: "", height: "", 
        weight: "", 
        rarity: ""})

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        setCardInfos({...cardInfos, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.post("/api/cards/addCardToDB", cardInfos)
            .then(res => {
                if (res.data.error === false) {
                    setCardInfos({
                        gen: "", 
                        dex_number: "", 
                        name: "", 
                        type1: "", 
                        type2: "", 
                        description: "", 
                        picURL: "", 
                        price: "", 
                        height: "", 
                        weight: "", 
                        rarity: ""})
                    console.log("Card created");
                } else {
                    console.log("Card creation failed");
                    console.log(res.data.message);
                }
                }
            )

    }

  return (
    <div className={styles.createcard_container}>
        <form onSubmit={handleSubmit}>
        <h2>Ajouter carte en BDD : </h2>
            <div className={styles.form_line}>
                <label>Génération :</label>
                <input 
                    type="number" 
                    placeholder="Génération"
                    id='gen'
                    name='gen' 
                    value={cardInfos.gen} 
                    onChange={onChangeInput}/>
            </div>
            <div className={styles.form_line}>
                <label>N° Pokédex :</label>
                <input 
                    type="number" 
                    id='dex_number'
                    name='dex_number'
                    placeholder="N° Dex" 
                    value={cardInfos.dex_number}
                    onChange={onChangeInput}
                    />
            </div>
            <div className={styles.form_line}>
                <label>Nom Pokémon :</label>
                <input 
                    type="text"
                    id='name'
                    name='name'
                    placeholder="ex: Pikachu" 
                    value={cardInfos.name}
                    onChange={onChangeInput}
                    />
            </div>
            <div className={styles.form_line}>
                <label>Type 1 :</label>
                <select 
                    placeholder="ex: Eau" 
                    id='type1'
                    name='type1'
                    value={cardInfos.type1}
                    onChange={onChangeInput}
                    >
                    <option value="">Choisir un type</option>
                    {typesPKM.map((type, index) => {
                        return <option key={index} value={type}>{type}</option>
                    })}
                </select>
            </div>
            <div className={styles.form_line}>
                <label>Type 2 :</label>
                <select 
                    placeholder="ex: Feu" 
                    id='type2'
                    name='type2'
                    value={cardInfos.type2}
                    onChange={onChangeInput}
                    >
                    <option value="">Choisir un type</option>
                    {typesPKM.map((type, index) => {
                        return <option key={index} value={type}>{type}</option>
                    })}
                </select>
            </div>
            <div className={styles.form_line}>
                <label>URL Image :</label>
                <input 
                    type="text" 
                    placeholder="www.image.domaine"
                    id='picURL'
                    name='picURL'
                    value={cardInfos.picURL}
                    onChange={onChangeInput} 
                    />
            </div>
            <div className={styles.form_line}>
                <label>Prix :</label>
                <select 
                    id='price'
                    name='price'
                    value={cardInfos.price}
                    onChange={onChangeInput}
                    >
                    <option value="">Choisir un prix</option>
                    {priceList.map((price, index) => {
                        return <option key={index} value={price}>{price}</option>
                    })}
                </select>
            </div>
            <div className={styles.form_line}>
                <label>Rareté :</label>
                <select 
                    id='rarity'
                    name='rarity'
                    value={cardInfos.rarity}
                    onChange={onChangeInput}
                    >
                    <option value="">Choisir rareté</option>
                    {rarityList.map((rarity, index) => {
                        return <option key={index} value={rarity}>{rarity}</option>
                    })}
                </select>
            </div>
            <div className={styles.form_line}>
                <label>Hauteur (cm) :</label>
                <input 
                    type="number" 
                    placeholder="ex: 100" 
                    id='height'
                    name='height'
                    value={cardInfos.height}
                    onChange={onChangeInput}
                    />
            </div>
            <div className={styles.form_line}>
                <label>Poids (gr) :</label>
                <input 
                    type="number" 
                    placeholder="ex: 200"
                    id='weight'
                    name='weight'
                    value={cardInfos.weight}
                    onChange={onChangeInput}
                     />
            </div>
            <div className={styles.form_line}>
                <label>Description :</label>
                <input 
                    type="text" 
                    placeholder="ex: blablabla"
                    id='description'
                    name='description'
                    value={cardInfos.description}
                    onChange={onChangeInput}
                     />
            </div>
            <button>Ajouter à la BDD</button>
        </form>
    </div>
  )
}

export default CreateCard