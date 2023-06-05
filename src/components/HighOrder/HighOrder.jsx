import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from "../Loader/Loader";
export const server = "https://api.coingecko.com/api/v3";

const HighOrder = (fetchingUrl, Heading, headingText) => 
  function Func() {

    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
          try {
    
            const { data } = await axios.get(`${server}${fetchingUrl}`);
            setArr(data);
            setLoading(false);
          
          }catch(error){
    
            setError(true);
            setLoading(false);
    
          }
        }
    
        fetchData();
      }, []);  


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
                Heading && <Heading text={headingText} />
              }
              {
                arr.map((i) => (
                  <article key={i.name}>
                    <img src={i.image} alt={"Img"} />
                    <h2>{i.market_cap_rank}</h2>
                    <p>{i.name}</p>
                    {
                      i.current_price && 
                      <span>${i.current_price}</span>
                    }
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

export default HighOrder;