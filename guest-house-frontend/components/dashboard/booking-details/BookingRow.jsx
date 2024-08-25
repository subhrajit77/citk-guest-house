import { Tr, Td } from "@chakra-ui/react";

export default function BookingRow({ ...booking }) {
    console.log(booking);

    return (
        <Tr className="table-row">
            <Td>{booking.bookingid}</Td>
            <Td>{booking.arrival_date}</Td>
            <Td className={`status-${booking.status.toLowerCase()}`}>
                {booking.status}
            </Td>
        </Tr>
    );
}
