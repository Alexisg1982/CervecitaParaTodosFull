

import { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./quote";
import Loader from "./loader";

const initialQuote = {
    text: "",
    author: "",
};

const ApiPoke = () => {
    const [quote, setQuote] = useState(initialQuote);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        updateQuote();
    }, []);

    const updateQuote = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
            const newQuote = response.data;
            const text = newQuote.name;
            const author = "Pokémon";

            setQuote({ text, author });

            setTimeout(() => {
                setLoading(false);
            }, 1500);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img
                src="https://pokeapi.co/media/sprites/pokemon/132.png"
                alt="Pokemon"
                width="200px"
                key="ditto-image"
            />
            {loading ? <Loader /> : <Quote quote={quote} key="quote" />}
            <button onClick={updateQuote}>Obtener cita</button>
        </div>
    );
};

export default ApiPoke;