"use client";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { FiActivity, FiUsers, FiShoppingCart, FiPercent } from "react-icons/fi";

import Header from "../../components/dashboard/header/Header";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import UserProfile from "../../components/dashboard/user-profile/UserProfile";
// import BookingDetails from "../../components/dashboard/booking-details/BookingDetails";
import StatsCard from "../../components/dashboard/statscard/StatsCard";
import Table from "../../components/dashboard/table/Table";
import BookingDetails from "../../components/dashboard/booking-details/BookingDetails";

const user = {
    name: "Jessica Jones",
    email: "jessica@example.com",
    phone: "123-456-7890",
    avatarUrl: "https://bit.ly/broken-link",
};

export default function Dashboard() {
    return (
        <Box minH="100vh" bg="gray.100">
            <Header user={user} />
            <Box display="flex">
                <Sidebar />
                <Box flex="1" p={4}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
                        <StatsCard
                            title={"Traffic"}
                            stat={"350,897"}
                            change={"3.48%"}
                            changeType={"increase"}
                            icon={<FiActivity size={"3em"} />}
                        />
                        
                    </SimpleGrid>
                    <UserProfile user={user} />
                    {/* <BookingDetails bookings={bookings} /> */}
                </Box>
            </Box>
            <Table />
            <BookingDetails />

        </Box>
    );
}
