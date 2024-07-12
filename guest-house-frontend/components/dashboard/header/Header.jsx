import { Avatar, Box, Flex, Heading, Input, Spacer, Text } from '@chakra-ui/react';

export default function Header({ user }) {
    return (
        <Box bg="blue.500" color="white" p={4} shadow="md">
            <Flex align="center">
                <Heading as="h1" size="lg">Customer Dashboard</Heading>
                <Spacer />
                <Input placeholder="Search" width="300px" bg="white" color="black" borderRadius="md" />
                <Flex align="center" ml={4}>
                    <Text mr={2}>{user.name}</Text>
                    <Avatar name={user.name} src={user.avatarUrl} />
                </Flex>
            </Flex>
        </Box>
    );
}


