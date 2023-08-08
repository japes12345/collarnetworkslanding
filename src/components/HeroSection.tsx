import {
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Container bg="white" minHeight="70vh" textAlign="center" display={'flex'} alignItems={'center'}>
      <Center >
        <VStack>
          <Container textAlign="center">
            <Heading fontSize="4xl" mb={4} color="black.500">
              Welcome to Collar
            </Heading>
            <Heading fontSize="xl" mb={4} color="black.500">
              We build bespoke financial software for global clients.
            </Heading>
            <Button onClick={()=> window.open('https://pukzi11x7je.typeform.com/to/u3nv0DxB', '_blank')}>
              Get In Touch
            </Button>
          </Container>
        </VStack>
      </Center>
    </Container>
  );
};
