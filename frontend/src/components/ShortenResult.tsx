import { Box, Button, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";

interface shortenResultprop {
  shortenUrl: string;
}

function ShortenResult({ shortenUrl }: shortenResultprop) {
  function copyToclip() {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(shortenUrl).then(() => {
      Swal.fire({
        icon: "success",
        text: '複製成功',
        showConfirmButton: false,
        timer: 800
      });
    });
  }
  return (
    <Box mb={5}>
      {shortenUrl === "" || (
        <>
          <Text fontSize="2rem" textAlign={"center"} mb={2}>
            {shortenUrl}
          </Text>
          <Button
            m="0 auto"
            colorScheme="purple"
            display="block"
            onClick={() => copyToclip()}
          >
            複製
          </Button>
        </>
      )}
    </Box>
  );
}
export default ShortenResult;
