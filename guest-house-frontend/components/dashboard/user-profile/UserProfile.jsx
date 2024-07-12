import { Box, Heading, Text } from '@chakra-ui/react';

export default function UserProfile({ user }) {
    return (
        <Box p={4} bg="white" shadow="md" rounded="md">
            <Heading as="h2" size="lg" mb={4}>Profile</Heading>
            <Text><strong>Name:</strong> {user.name}</Text>
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Phone:</strong> {user.phone}</Text>
        </Box>
    );
}


