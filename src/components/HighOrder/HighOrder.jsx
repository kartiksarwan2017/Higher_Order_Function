import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Card, CardHeader, CardBody, Image, Text } from '@chakra-ui/react';
import "./HighOrder.scss";
export const server = "https://api.coingecko.com/api/v3";


const HighOrder = (
  fetchingUrl,
  Heading,
  headingText,
  errorMessage = "Sorry for the inconvenience"
) =>
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
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (error) {
      return <div className="errorMessage">{errorMessage}</div>;
    }

    return (
      <>
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <main>
                {Heading && <Heading text={headingText} />}
                <div className="card-container">
                {arr.map((i) => (
                  <Card key={i.name} className="card-details">
                    <Image src={i.image} alt={"Img"} boxSize='200px' className="cardImg" />
                    <CardHeader>
                      <Heading fontSize='2xl' className="card-header">{i.market_cap_rank}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text fontSize='2xl'>{i.name}</Text>
                      {i.current_price && <Text fontSize='xl'>${i.current_price}</Text>}
                    </CardBody>
                  </Card>
                ))}
                </div>
              </main>
            </>
          )}
        </div>
      </>
    );
  };

export default HighOrder;
