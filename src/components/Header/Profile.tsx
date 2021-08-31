import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Moisés Morandini</Text>
          <Text color="gray.300" fontSize="small">
            moises-morandini@hotmail.com
          </Text>
        </Box>
      }
      <Avatar size="md" name="Moisés Morandini"
        src="https://github.com/MoisesMorandini.png"
      />
    </Flex>
  );
}