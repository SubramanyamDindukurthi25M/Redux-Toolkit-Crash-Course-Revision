import spinner from '../assets/Spinner.gif'

// ES6-Arrow function
export const Loader = () => {
    return (
        <>
            <img 
                src={spinner} 
                alt="spinner" 
            />
        </>
    )
}