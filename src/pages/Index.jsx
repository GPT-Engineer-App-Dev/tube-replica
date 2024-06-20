import { Box, Flex, Image, Input, IconButton, Spacer, Avatar } from "@chakra-ui/react";
import { FaSearch, FaVideo, FaTh, FaBell } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" align="center" padding="1.5rem" boxShadow="md">
        <Image src="/youtube-logo-placeholder.svg" alt="YouTube Logo" boxSize="80px" />
        <Spacer />
        <Flex flex="1" maxW="600px" mx="4">
          <Input placeholder="Search" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </Flex>
        <Spacer />
        <IconButton aria-label="Create" icon={<FaVideo />} mx="2" />
        <IconButton aria-label="Apps" icon={<FaTh />} mx="2" />
        <IconButton aria-label="Notifications" icon={<FaBell />} mx="2" />
        <Avatar name="User" src="https://bit.ly/broken-link" />
      </Flex>
    </Box>
  );
};

export default Index;