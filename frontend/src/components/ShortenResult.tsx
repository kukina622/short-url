import { Box, Button, Text } from "@chakra-ui/react";

function ShortenResult() {
  return (
    <Box mb={5}>
      <Text fontSize="2rem" textAlign={"center"} mb={2}>
        https://elearning.yuntech.edu.tw/sys/reg/ssoLogin.php
      </Text>
      <Button m="0 auto" colorScheme="purple" display="block">
        複製
      </Button>
    </Box>
  );
}
export default ShortenResult;
