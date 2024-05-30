import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: <FaLaptop size="100px" />,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with cutting-edge features.",
    image: <FaMobileAlt size="100px" />,
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for on-the-go use.",
    image: <FaTabletAlt size="100px" />,
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      <Box as="main" mt={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>Your one-stop shop for the latest electronics</Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <VStack spacing={4}>
                {product.image}
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;