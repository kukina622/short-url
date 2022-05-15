import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function UrlInput() {
  return (
    <Flex p={5} borderWidth="1px" borderRadius="lg" mb={5}>
      <Box flex={10} mr={5}>
        <FormControl>
          <FormLabel htmlFor="url">URL Link</FormLabel>
          <Input id="url" name="url" placeholder="Enter URL" />
        </FormControl>
      </Box>
      <Box>
        <Button mt={8} colorScheme="purple">
          縮網址
        </Button>
      </Box>
    </Flex>
  );
}

export default UrlInput;
