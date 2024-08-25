import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import './BookingDetails.css'; // Import custom CSS for additional styling

export default function BookingDetails({ bookings = [] }) {
    return (
        <Box p={4} bg="white" shadow="lg" rounded="lg" mt={8}>
            <Heading as="h2" size="lg" mb={6} color="teal.500">Booking Details</Heading>
            <Table variant="striped" colorScheme="teal" className="custom-table">
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
                            <Tr key={booking.id} className="table-row">
                                <Td>{booking.id}</Td>
                                <Td>{booking.date}</Td>
                                <Td className={`status-${booking.status.toLowerCase()}`}>{booking.status}</Td>
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
