import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function BookingDetails({ bookings = [] }) {
    return (
        <Box p={4} bg="white" shadow="md" rounded="md" mt={4}>
            <Heading as="h2" size="lg" mb={4}>Booking Details</Heading>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Booking ID</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <Tr key={booking.id}>
                                <Td>{booking.id}</Td>
                                <Td>{booking.date}</Td>
                                <Td>{booking.status}</Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan={3} textAlign="center">No bookings available</Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Box>
    );
}
