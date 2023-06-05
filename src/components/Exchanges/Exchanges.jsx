import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HighOrder from '../HighOrder/HighOrder';
import Loader from '../Loader/Loader';
export const server = "https://api.coingecko.com/api/v3";

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      }catch(error){
        setError(true);
        setLoading(false);
      }
    }

    fetchExchanges();

  }, []);


  if(error) {
    return (
      <div className='errorMessage'>
        {"Error while Fetching Exchanges"}
      </div>
    );
  }

  return (
    <>

    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
        <main>
          {exchanges.map((i) => {
             return(
              <article key={i.name}>
              <img src={i.image} alt={"Exchange"} />
              <h2>{i.trust_score_rank}</h2>
              <p>{i.name}</p>
            </article>
             )
            })
          }
        </main>
        </>
      )}
    </div>

    </>
  )
}

const ExchangesNewComponent = HighOrder("/exchanges");

export default ExchangesNewComponent;