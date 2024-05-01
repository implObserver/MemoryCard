import { useSelector } from "react-redux"
import { RootState } from "../../../app/Store"

export const ScoreCounter = () => {
    const score = useSelector((state: RootState) => state.score.score);
    return (
        <span>{score}</span>
    )
}