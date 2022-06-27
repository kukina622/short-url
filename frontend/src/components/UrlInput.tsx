import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { urlInfoProp } from "@/types/url";
import { SubmitHandler, useForm } from "react-hook-form";
import { apiPostUrl } from "@/api/url";
import Swal from "sweetalert2";

interface urlInputprop {
  setUrlInfo: React.Dispatch<React.SetStateAction<urlInfoProp>>;
}

interface IFormInputs {
  url?: string;
}

function UrlInput({ setUrlInfo }: urlInputprop) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit: SubmitHandler<IFormInputs> = async ({ url }, e) => {
    e?.preventDefault();
    try {
      const res = await apiPostUrl(url as string);
      const shortenUrl = `${process.env.baseURL}/${res.data.mapText}` || "";
      setUrlInfo({ originUrl: url as string, shortenUrl });
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800
      });
      e?.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex p={5} borderWidth="1px" borderRadius="lg" mb={5}>
        <Box flex={10} mr={5}>
          <FormControl>
            <FormLabel htmlFor="url">URL Link</FormLabel>
            <Input
              id="url"
              placeholder="Enter URL"
              {...register("url", { required: true })}
            />
          </FormControl>
        </Box>
        <Box>
          <Button mt={8} colorScheme="purple" type="submit">
            縮網址
          </Button>
        </Box>
      </Flex>
    </form>
  );
}

export default UrlInput;
