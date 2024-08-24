import {
    Avatar,
    Badge,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Progress,
    TableContainer,
    Table as ChakraTable,
    Thead,
    Th,
    Tbody,
    Td,
    Text,
    Tr,
    IconButton,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaEllipsisV } from "react-icons/fa";
import React from "react";

export default function ArgonTable({ data = [] }) {
    const textColor = useColorModeValue("gray.700", "white");
    const colorStatus = useColorModeValue("white", "black.400");

    return (
        <TableContainer>
            <ChakraTable variant="simple" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>
                            <Text
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                            >
                                Name
                            </Text>
                        </Th>
                        <Th>
                            <Text
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                            >
                                Email ID
                            </Text>
                        </Th>
                        <Th>
                            <Text
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                            >
                                Date of Booking
                            </Text>
                        </Th>
                        <Th>
                            <Text
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                            >
                                Status
                            </Text>
                        </Th>
                        <Th>
                            <Text
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="bold"
                            >
                                Actions
                            </Text>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.length > 0 ? (
                        data.map((row, index) => (
                            <Tr key={index}>
                                {/* Name and Avatar */}
                                <Td>
                                    <Flex align="center">
                                        <Avatar
                                            src={row.logo}
                                            w="40px"
                                            h="40px"
                                            borderRadius="full"
                                            mr="10px"
                                        />
                                        <Flex direction="column">
                                            <Text
                                                fontSize="sm"
                                                color={textColor}
                                                fontWeight="bold"
                                            >
                                                {row.name}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Td>

                                {/* Email ID */}
                                <Td>
                                    <Text
                                        fontSize="sm"
                                        color="gray.500"
                                        fontWeight="normal"
                                    >
                                        {row.email}
                                    </Text>
                                </Td>

                                {/* Date of Booking */}
                                <Td>
                                    <Text
                                        fontSize="sm"
                                        color={textColor}
                                        fontWeight="normal"
                                    >
                                        {row.date}
                                    </Text>
                                </Td>

                                {/* Status Bar */}
                                <Td>
                                    <Progress
                                        value={row.statusProgress}
                                        size="sm"
                                        colorScheme={row.status === "Active" ? "green" : "red"}
                                        borderRadius="10px"
                                        bg="gray.300"
                                    />
                                    <Text
                                        fontSize="sm"
                                        color={row.status === "Active" ? "green.400" : "red.400"}
                                        fontWeight="bold"
                                        mt="2px"
                                    >
                                        {row.status}
                                    </Text>
                                </Td>

                                {/* Actions Menu */}
                                <Td>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            icon={<FaEllipsisV />}
                                            variant="outline"
                                            size="sm"
                                        />
                                        <MenuList>
                                            <MenuItem icon={<ChevronDownIcon />}>
                                                View
                                            </MenuItem>
                                            <MenuItem icon={<ChevronDownIcon />}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem icon={<ChevronDownIcon />}>
                                                Delete
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan="5">
                                <Text
                                    fontSize="sm"
                                    color="gray.400"
                                    textAlign="center"
                                    py="1rem"
                                >
                                    No data available
                                </Text>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </ChakraTable>
        </TableContainer>
    );
}
