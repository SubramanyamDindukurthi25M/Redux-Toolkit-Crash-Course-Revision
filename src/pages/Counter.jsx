import { useSelector,useDispatch } from "react-redux"
import {increment,decrement,incrementBy5} from '../redux/features/counterSlice'

export const Counter = () => {
    // get state from redux-store
    const counterValue = useSelector((state) => {
        return state.counter.count
    })

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementBy5 = () => {
        dispatch(incrementBy5(5))
    }

    return (
        <>
            <div className="buttons">
                <h2 className="my-2 mx-2">
                    Count - <span className="text-secondary">{counterValue}</span>
                </h2>
                <div className="btn-container mx-3">
                    <button
                        className="btn btn-primary btn-sm m-2"
                        onClick={handleIncrement}
                    >
                        Increment 
                    </button>
                    <button
                        className="btn btn-danger btn-sm m-2"
                        onClick={handleDecrement}
                    >
                        Decrement 
                    </button>
                    <button
                        className="btn btn-success btn-sm"
                        onClick={handleIncrementBy5}
                    >
                        IncrementBy5 
                    </button>
                </div>
            </div>
        </>
    )
}