import { useDispatch } from "react-redux";
import { Card } from "../../../shared/ui/3dCardTemplate"
import styles from '../styles/PersonCard.module.css'
import { useState } from "react";


export const PersonCard = () => {

    return (
        <div className={`${styles.person}`}>
            <Card></Card>
        </div>
    )
}