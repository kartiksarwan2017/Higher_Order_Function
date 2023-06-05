import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
              <article key={i.name}>
                <img src={i.image} alt={"Exchange"} />
                <h2>{i.trust_score_rank}</h2>
                <p>{i.name}</p>
              </article>
            })
          }
        </main>
        </>
      )}
    </div>

    </>
  )
}

export default Exchanges;