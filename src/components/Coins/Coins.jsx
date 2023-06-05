import React, {useState, useEffect} from 'react';
import axios from "axios";
import Loader from "./Loader";
export const server = "https://api.coingecko.com/api/v3";


const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchCoins = async () => {
      try {

        const { data } = await axios.get(`${server}/coins/markets?vs_currency=usd`);
        setCoins(data);
        setLoading(false);
      
      }catch(error){

        setError(true);
        setLoading(false);

      }
    }

    fetchCoins();
  });

  if(error){
    return <div className='errorMessage'>{"Error while fetching coins"}</div>;
  }

  return (
    <>
     <div className='container'>
      {loading ? (
        <Loader />
      ) : (
        <>
         <main>
          {
            coins.map((i) => (
              <article key={i.name}>
                <img src={i.image} alt={"Img"} />
                <h2>{i.market_cap_rank}</h2>
                <p>{i.name}</p>
                <span>${i.current_price}</span>
              </article>
            ))
          }
         </main>
        </>
      )}
     </div>
    </>
  )
}

export default Coins;