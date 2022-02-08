import { StyleSheet } from "react-native";
import {
  Center,
  Text,
  Box,
  Stack,
  AspectRatio,
  HStack,
  Heading,
  Code,
  Link,
  VStack,
} from "native-base";
import { Image } from "react-native";
import { Button, ColorModeSwitch } from "ui";
import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <Center
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <VStack alignItems="center" space="md">
        <HStack alignItems="center" space="2xl">
          <AspectRatio w={24} ratio={1.66}>
            <Image
              source={{ uri: "http://localhost:3000/images/nextjs-logo.png" }}
              resizeMode="contain"
            />
          </AspectRatio>
          <Text fontSize="4xl">+</Text>
          <Image
            source={{ uri: "http://localhost:3000/images/nativebase-logo.svg" }}
            resizeMode="contain"
          />
        </HStack>
        <Heading>Welcome to NativeBase</Heading>
        <Text lineHeight={36}>
          Edit <Code>src/pages/index.js</Code> and save to reload.
        </Text>
        <HStack alignItems="center" space="sm">
          <Link href="https://nextjs.org/docs/getting-started" isExternal>
            <Text
              _light={{ color: "gray.700" }}
              _dark={{ color: "gray.400" }}
              underline
              fontSize={"xl"}
            >
              Learn NextJS
            </Text>
          </Link>
          <Text>/</Text>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
        </HStack>
      </VStack>
      <ColorModeSwitch />
      <Link mt="6" href="https://docs.nativebase.io" isExternal>
        <Button>Welcome</Button>
      </Link>
    </Center>
  );
}
