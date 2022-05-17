import { Box } from "@chakra-ui/react";
import UrlInput from "@/components/UrlInput";
import ShortenResult from "@/components/ShortenResult";
import HistoryAccordion from "@/components/HistoryAccordion";
import { useState } from "react";
import { urlInfoProp } from "@/types/url";

function App() {
  const [urlInfo, setUrlInfo] = useState<urlInfoProp>({
    originUrl: "",
    shortenUrl: ""
  });
  return (
    <div className="App">
      <Box m="0 auto" w="80%" h="100vh" minH="40rem" maxW="1920px">
        <ShortenResult shortenUrl={urlInfo.shortenUrl} />
        <UrlInput setUrlInfo={setUrlInfo} />
        <HistoryAccordion urlInfo={urlInfo}/>
      </Box>
    </div>
  );
}

export default App;
