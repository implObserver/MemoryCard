import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/Store"
import { increments } from "../model/slice/slice";

export const ScoreCounter = () => {
    const score = useSelector((state: RootState) => state.score.score);

    return (
        <span>{score}</span>
    )
}