import { useRouting } from "expo-next-react-navigation";
import { Box, Button, HStack, Text } from "native-base";
import React from "react";
import { Container } from "../components/Container";

export function AboutScreen() {
  const { navigate, push, getParam, goBack } = useRouting();
  function onPress() {
    goBack();
  }
  return (
    <Container flex={1} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={"2xl"} fontWeight="black" mb={"2.5"}>
        About Screen
      </Text>
      <HStack space={2}>
        <Button onPress={onPress}>Go Back</Button>
        <Button
          onPress={() =>
            navigate({
              routeName: "details",
            })
          }
        >
          Detail Screen
        </Button>
      </HStack>
    </Container>
  );
}
