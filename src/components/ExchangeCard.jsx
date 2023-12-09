import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = (props) => {
    return (
        <a href={props.url} target="blank">
      <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} m={"4"} transition={"all 0.3s"}
      css={{
        "&:hover":{
            transform: "scale(1.1)",
        },
      }}
      >
        <img src={props.img} w={"10"} h={"10"} alt={"Exchange"} />
        <Heading size={"md"} noOfLines={1}>
            {props.rank}
        </Heading>
        <Text noOfLines={1}>{props.name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
