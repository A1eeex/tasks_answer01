import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from './Qute.module.css'

const API = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'

const Quote = () => {
    const [quotes, setQuotes] = useState([]);

    const [selectedQuote, setSelectedQuote] = useState(null)
    const [prevQuote, setPrevQuote] = useState([])
    const [activePrev, setActivePrev] = useState(false)

    useEffect(() => {
        const getQuote = async () => {
            const response = await axios.get(API)
            setQuotes(response.data)
        }
        getQuote()
    }, [])

    console.log('quote >>', quotes)


    const setRandomQuote = () => {
        const random = Math.floor(Math.random() * quotes.length)
        setSelectedQuote(random);
        setPrevQuote(selectedQuote)
        setActivePrev(true)
    }

    const currentQuote = quotes[selectedQuote] ?? {};
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <button
                    className={style.randomBtn}
                    onClick={() => setRandomQuote()}
                >
                    Random quote
                </button>
                <div className={style.currentQuote}>{currentQuote.quote}</div>
                {activePrev &&
                <button className={style.prevQuote} onClick={() => setSelectedQuote(prevQuote)}> &lArr; prev</button>
                }
            </div>

        </div>
    );
};

export default Quote;