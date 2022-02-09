import { useRouting } from "expo-next-react-navigation";
import { Box, Button, Text } from "native-base";
import React from "react";
import { Container } from "../components/Container";

export function StartScreen() {
  const { navigate } = useRouting();
  function onPress() {
    navigate({
      routeName: "About",
      params: { id: "chris" },
      web: { as: `/about` },
    });
  }
  return (
    <Container flex={1} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={"2xl"} fontWeight="black" mb={"2.5"}>
        Expo + Next.JS = ❤️
      </Text>
      <Button onPress={onPress}>About</Button>
    </Container>
  );
}
