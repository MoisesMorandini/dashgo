import { Box, Button, Checkbox, Flex, Text, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px={["4", "4", "6"]} >
        <Sidebar />
        <Box flex="1" p="8" borderRadius={8} bg="gray.800">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="large" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>

                {isWideVersion && <Th>Data de cadastro</Th>}

                <Th width="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Moisés Morandini</Text>
                    <Text fontSize="sm" color="gray.300">moises-morandini@hotmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="18" />}>
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Moisés Morandini</Text>
                    <Text fontSize="sm" color="gray.300">moises-morandini@hotmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="18" />}>
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Moisés Morandini</Text>
                    <Text fontSize="sm" color="gray.300">moises-morandini@hotmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="18" />}>
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box >
  )
}