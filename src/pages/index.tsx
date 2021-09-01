import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SingInFormData = {
  email: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} flexDir="column"
        bg="gray.800" p="8" borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input {...register('email')} error={errors.email}
            type="email" name="email" label="E-mail" />
          <Input {...register('password')} error={errors.password}
            type="password" name="password" label="Senha" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
