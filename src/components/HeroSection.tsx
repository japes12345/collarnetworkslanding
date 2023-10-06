import {
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Container bg="#FCFC95" minHeight="70vh" textAlign="center" display={'flex'} alignItems={'center'}>
      <Center >
        <VStack>
          <Container textAlign="center">
            
            <img src="Collar_Wordmark_Black.svg" alt="Collar Logo" />
            
            
            <Heading fontSize="xl" mb={4} color="black.500">
              We build bespoke financial software for global clients.
            </Heading>
            
            <Button  onClick={()=> window.open('https://pukzi11x7je.typeform.com/to/u3nv0DxB', '_blank')}>
              Get In Touch
            </Button>
            <Text pt="10px">© Collar Networks, Inc. 2023</Text>
            
          </Container>
          <Image pt="60px" width="150px" src="public/orangeclean.png"></Image>

        </VStack>
      </Center>
    </Container>
  );
};
