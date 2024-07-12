import { Box, VStack, Link, Text, Flex } from '@chakra-ui/react';
import { FiHome, FiUser, FiCalendar } from 'react-icons/fi';

export default function Sidebar() {
    return (
        <Box bg="gray.800" color="white" w="250px" p={4} minH="100vh" shadow="md">
            <Text fontSize="2xl" mb={6} fontWeight="bold" color="blue.400">Argon</Text>
            <VStack align="start" spacing={6}>
                <Link href="/dashboard" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p={2} rounded="md">
                    <Flex align="center"><FiHome /> <Text ml={2}>Dashboard</Text></Flex>
                </Link>
                <Link href="/profile" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p={2} rounded="md">
                    <Flex align="center"><FiUser /> <Text ml={2}>Profile</Text></Flex>
                </Link>
                <Link href="/bookings" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p={2} rounded="md">
                    <Flex align="center"><FiCalendar /> <Text ml={2}>Bookings</Text></Flex>
                </Link>
            </VStack>
        </Box>
    );
}

