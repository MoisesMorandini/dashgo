import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import React from "react";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6" >
        <SideBar />
        <Box flex="1" p="8" borderRadius={8} bg="gray.800">
          <Heading size='large' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' boderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
              <Input name='name' label='Nome completo' />
              <Input name='email' label='E-mail' type='email' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
              <Input name='password' type='password' label='Senha' />
              <Input name='password_confirmation' type='password' label='Confirmação da senha' />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
              <Button colorScheme='pink'>Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box >
  )
}