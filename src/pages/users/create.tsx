import Link from "next/link";
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No minímo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`CreateUser -> values`, values)
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6" >
        <Sidebar />
        <Box as="form" onSubmit={handleSubmit(handleCreateUser)}
          flex="1" p={["6", "8"]} borderRadius={8} bg="gray.800">
          <Heading size='large' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width='100%'>
              <Input {...register('name')} error={errors.name}
                name='name' label='Nome completo' />
              <Input {...register('email')} error={errors.email}
                name='email' label='E-mail' type='email' />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={["6", "8"]} width='100%'>
              <Input {...register('password')} error={errors.password}
                name='password' type='password' label='Senha' />
              <Input {...register('password_confirmation')} error={errors.password_confirmation}
                name='password_confirmation' type='password' label='Confirmação da senha' />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href="/users" passHref>
                <Button colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme='pink'
                isLoading={formState.isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box >
  )
}