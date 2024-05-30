import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, Input, Link, SimpleGrid, Text, VStack, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Computers",
    price: 1200,
    description: "High performance laptop for all your needs.",
    image: <FaLaptop size="100px" />,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Mobile Phones",
    price: 800,
    description: "Latest smartphone with cutting-edge features.",
    image: <FaMobileAlt size="100px" />,
  },
  {
    id: 3,
    name: "Tablet",
    category: "Tablets",
    price: 600,
    description: "Portable and powerful tablet for on-the-go use.",
    image: <FaTabletAlt size="100px" />,
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1500]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

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

        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={4}
        />

        <Select placeholder="Select category" onChange={handleCategoryChange} mb={4}>
          <option value="Computers">Computers</option>
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Tablets">Tablets</option>
        </Select>

        <Box mb={8}>
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            min={0}
            max={1500}
            step={50}
            defaultValue={[0, 1500]}
            onChangeEnd={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0} />
            <SliderThumb boxSize={6} index={1} />
          </Slider>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <VStack spacing={4}>
                {product.image}
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">${product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;