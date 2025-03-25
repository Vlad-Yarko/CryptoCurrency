import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Error422 from "../Error422/Error422.jsx";
import ListCard from "../ListCard/ListCard.jsx";
import Card from "../Card/Card.jsx";

import coins from "../../images.js";


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})


function Crypto() {
    const [ data, setData] = useState({})
    const { symbol } = useParams()
    const [ isLoading, setIsLoading ] = useState(true)

    async function loadCrypto(symbol) {
        let response
        try {
            response = await api.get(`/crypto/usdt/${symbol}`)
        } catch (error) {
            if (error.response.status === 422) {
                response = error.response
                return response.data
            } else {
                throw new Error('Page is not found')
            }
        }
        return response.data
    }

    useEffect(() => {
        if (data.symbol) {
            document.title = `${data.symbol} - ${data.price}`
            setIsLoading(false)
        } else if (data.message) {
            document.title = 'Invalid symbol'
            setIsLoading(false)
        } else {
            document.title = 'Loading'
        }
    }, [data])

    useEffect(() => {
        const fetchData = async () => {
            const result = await loadCrypto(symbol)
            setData(result);
            setIsLoading(false)
        }
        setIsLoading(true)
        let intervalId = setInterval(fetchData, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [symbol])

    return (
            <div className='flex h-screen'>
                <div className='w-1/5 pb-30 overflow-y-auto bg-violet-300'>
                    <ListCard img={coins.BTC} name='Bitcoin' state={symbol === 'BTC'} symbol='BTC'/>
                    <ListCard img={coins.TON} name='Ton' state={symbol === 'TON'} symbol='TON'/>
                    <ListCard img={coins.SOL} name='Solana' state={symbol === 'SOL'} symbol='SOL'/>
                    <ListCard img={coins.BNB} name='BNB' state={symbol === 'BNB'} symbol='BNB'/>
                    <ListCard img={coins.ETH} name='Ethereum' state={symbol === 'ETH'} symbol='ETH'/>
                    <ListCard img={coins.PEPE} name='Pepe' state={symbol === 'PEPE'} symbol='PEPE'/>
                    <ListCard img={coins.API3} name='API3' state={symbol === 'API3'} symbol='API3'/>
                    <ListCard img={coins.TRX} name='TRON' state={symbol === 'TRX'} symbol='TRX'/>
                    <ListCard img={coins.SHIB} name='SHIBA INU' state={symbol === 'SHIB'} symbol='SHIB'/>
                    <ListCard img={coins.FLM} name='Flamingo' state={symbol === 'FLM'} symbol='FLM'/>
                    <ListCard img={coins.WOO} name='WOO' state={symbol === 'WOO'} symbol='WOO'/>
                    <ListCard img={coins.BLUR} name='Blur' state={symbol === 'BLUR'} symbol='BLUR'/>
                    <ListCard img={coins.FLOKI} name='FLOKI' state={symbol === 'FLOKI'} symbol='FLOKI'/>
                </div>
                <div className='w-4/5 flex items-center justify-center overflow-y-auto h-screen'>
                    {isLoading ?
                        <div className='h-screen flex justify-center items-center'>
                            <h1 className='text-amber-600 text-[200%] p-9 border-4 rounded-[20px] border-amber-600'>
                                Loading...
                            </h1>
                        </div>
                        : (data.message ? <Error422 data={data}/> : <Card symbol={symbol} price={data.price} />)}
                </div>
            </div>
           )
}


export default Crypto
