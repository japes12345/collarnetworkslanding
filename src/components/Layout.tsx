import { Box, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <Box bg="#FCFC95" height="100vh">
      <VStack spacing={10} w="full" align="center">
        {/* <Header name="Collar"/> */}
        {children}
      </VStack>
    </Box>
  );
};
