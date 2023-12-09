import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, RadioGroup, Radio, Button } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [currentPage, setCurrentPage] = useState(1);
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changePage = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };
  const btn = new Array(50).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${currentPage}`
          //https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&page=1&sparkline=false
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, currentPage]);
  if (error)
    return <ErrorComponent message={"Error While fetching the Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value="inr">INR- ₹</Radio>
              <Radio value="usd">USD- $ </Radio>
              <Radio value="eur">EURO- €</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent = {"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w = {"full"} overflowX = {"auto"} p = {"8"}>
            {/* <Button onClick={() => changePage(2)} bgColor={"blackAlpha.900"} color={"white"}>2</Button> */}
            {btn.map((item, index) => {
              return(
                <Button
                key={index}
                onClick={() => changePage(index + 1)}
                bgColor={"blackAlpha.900"}
                color={"white"}
              >
                {index + 1}
              </Button>
              )
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
