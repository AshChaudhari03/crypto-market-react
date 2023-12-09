import React from 'react'
import { Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const CoinCard = (props) => {
    return (
        <Link to={`/coin/${props.id}`} target="_blank">
      <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} m={"4"} transition={"all 0.3s"}
      css={{
        "&:hover":{
            transform: "scale(1.1)",
        },
      }}
      >
        <img src={props.img} w={"10"} h={"10"} alt={"Exchange"} />
        <Heading size={"md"} noOfLines={1}>
            {props.symbol}
        </Heading>
        <Text noOfLines={1}>{props.name}</Text>
        <Text noOfLines={1}>{props.price ? `${props.currencySymbol}${props.price}`: "NA"}</Text>

      </VStack>
    </Link>
  );
}

export default CoinCard