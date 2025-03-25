import { useNavigate } from "react-router-dom";


function ListCard({ img, name, state, symbol }) {
    const navigate = useNavigate()

    function clickCoin() {
        navigate(`/crypto/${symbol}`)
    }

    return (
        <div className={`cursor-pointer flex border-3 rounded-md border-amber-700 my-4 h-16 ${state ? 'bg-amber-400' : 'bg-white'}`}
        onClick={clickCoin}>
            <img src={img} alt={name} className='w-15 ml-8'/>
            <h1 className='text-lg text-amber-700 ml-15'>{name}</h1>
        </div>
    )
}

export default ListCard
