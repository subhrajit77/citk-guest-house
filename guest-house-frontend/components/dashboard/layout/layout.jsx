// layout/Layout.js
import { Box, Flex } from '@chakra-ui/react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

export default function Layout({ children }) {
    return (
        <Box minHeight="100vh" bg="gray.50">
            <Header />
            <Flex>
                <Sidebar />
                <Box flex="1" p={4}>
                    {children}
                </Box>
            </Flex>
        </Box>
    );
}


