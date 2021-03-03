import {
  Box,
  Button,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import Newsletter from '../NewsletterWithDarkBg/Newsletter';
import * as Logos from './Brands';

function Hero() {
  return (
    <Box
      as="section"
      bg={mode('gray.50', 'gray.800')}
      pt="24"
      pb="12"
      overflow="hidden"
    >
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Stack
          align="flex-start"
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '20', lg: '8' }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: 'xl' }} pt="10">
            <Heading
              color={mode('gray.900', 'gray.100')}
              as="h1"
              size="3xl"
              mt="8"
              fontWeight="extrabold"
            >
              All-in-one online form & survey builder
            </Heading>
            <Text color={mode('gray.900', 'gray.100')} mt="5" fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              adipiscing elit.
            </Text>
            <Button
              mt="8"
              minW="14rem"
              colorScheme="blue"
              size="lg"
              height="14"
              px="8"
              fontSize="md"
              fontWeight="bold"
            >
              Get Started for free
            </Button>
          </Box>
          <Img
            pos="relative"
            marginEnd="-20rem"
            w="56rem"
            src="https://res.cloudinary.com/adebayosegun/image/upload/v1611835286/Chakra%20UI/screenshot-base.png"
            alt="Screening talent"
          />
        </Stack>

        <Box>
          <Text color={mode('gray.900', 'gray.100')} fontWeight="medium">
            Proudly trusted by 5,000+ companies and individuals
          </Text>
          <SimpleGrid
            mt="8"
            columns={{ base: 2, md: 3, lg: 6 }}
            color="gray.500"
            alignItems="center"
            spacing={{ base: '12', lg: '24' }}
            fontSize="2xl"
          >
            <Logos.ChatMonkey />
            <Logos.Wakanda />
            <Logos.Lighthouse />
            <Logos.Plumtic />
            <Logos.WorkScout />
            <Logos.Finnik />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
export default Hero;
