import coins from "../../images.js";


function Card({ symbol, price }) {
    return (
        <div className='border-5 rounded-md border-amber-700 w-200 h-100 bg-white'>
            <div className={`flex`}>
                <img src={coins[symbol]} alt={symbol} className='w-30 m-10'/>
                <h1
                    className='text-[20px] text-amber-700 m-16 ml-90
                    font-extrabold bg-amber-300 p-5 border-3 rounded-full'>{symbol}/USDT</h1>
            </div>
            <div className='my-12'>
                <h1 className='text-center text-[25px] text-amber-700 font-extrabold'>{price}</h1>
            </div>
        </div>
    )
}

export default Card
