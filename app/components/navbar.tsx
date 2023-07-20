"use client";

import {
  Box,
  Flex,
  Spacer,
  Image,
  Center,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex width="screen" bgColor="gray.100" height="110">
      <Center ml={12}>
        <Image src="/Logo_Blue_90x160.png" height="55px" />
      </Center>
      <Spacer />
      <Center p="4">
        <WrapItem>
          <Avatar mr={8} size="sm" name="Taison Eady" src="" />{" "}
        </WrapItem>
      </Center>
    </Flex>
  );
}
