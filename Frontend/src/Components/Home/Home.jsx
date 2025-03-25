import { useEffect } from "react";


function Home() {

    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <div className='h-screen flex justify-center items-center'>
            <h1 className='text-amber-600 text-[200%] p-9 border-4 rounded-[20px] border-amber-600'>
                Hello my bro! I am really glad that you are here
            </h1>
        </div>
    )
}

export default Home
