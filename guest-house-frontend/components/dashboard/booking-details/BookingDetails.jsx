"use client";
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";
import "./BookingDetails.css";
import BookingRow from "./BookingRow";
import { useState, useEffect } from "react";
import api from "../../../api";

export default function BookingDetails({ bookings = [] }) {
    const [bookingData, updateBookings] = useState([]);

    async function fetchBookings() {
        const response = await api.get("/booking/");
        updateBookings(response.data);
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <Box p={4} bg="white" shadow="lg" rounded="lg" mt={8}>
            <Heading as="h2" size="lg" mb={6} color="teal.500">
                Booking Details
            </Heading>
            <Table
                variant="striped"
                colorScheme="teal"
                className="custom-table"
            >
                <Thead>
                    <Tr>
                        <Th>Booking ID</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {bookingData.length > 0 ? (
                        bookingData.map((booking) => (
                            <BookingRow key={booking.id} {...booking} />
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan={3} textAlign="center">
                                No bookings available
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Box>
    );
}
