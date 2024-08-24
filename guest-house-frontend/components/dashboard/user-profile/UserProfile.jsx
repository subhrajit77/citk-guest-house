import { Box, Heading, Text, Flex, Icon, Avatar, VStack, Badge } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, CalendarIcon, CheckCircleIcon, TimeIcon } from '@chakra-ui/icons';

export default function UserProfile({ user }) {
    // Format dates to ensure consistency
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Box p={6} bg="white" shadow="lg" rounded="lg" maxW="sm" mx="auto">
            <Flex alignItems="center" mb={6}>
                <Avatar size="xl" name={user.name} src={user.avatarUrl} mr={4} />
                <Box>
                    <Heading as="h2" size="xl">{user.name}</Heading>
                    <Text fontSize="lg" color="gray.500">{user.position}</Text>
                </Box>
            </Flex>
            <VStack align="start" spacing={4}>
                <Flex align="center">
                    <Icon as={EmailIcon} color="gray.500" w={5} h={5} mr={2} />
                    <Text fontSize="md">{user.email}</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={PhoneIcon} color="gray.500" w={5} h={5} mr={2} />
                    <Text fontSize="md">{user.phone}</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={CheckCircleIcon} color="green.500" w={5} h={5} mr={2} />
                    <Text fontSize="md"><strong>Booking Status:</strong> {user.bookingStatus}</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={CalendarIcon} color="blue.500" w={5} h={5} mr={2} />
                    <Text fontSize="md"><strong>Start Date:</strong> {formatDate(user.startDate)}</Text>
                </Flex>
                <Flex align="center">
                    <Icon as={TimeIcon} color="purple.500" w={5} h={5} mr={2} />
                    <Text fontSize="md"><strong>End Date:</strong> {formatDate(user.endDate)}</Text>
                </Flex>
            </VStack>
        </Box>
    );
}
