import { PersonIcon } from "components/Icons/Icons";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import BanInvestor from "./components/BanInvestor";
import { tablesTableData, investorData } from "variables/general";
import TopInvestor from "../Dashboard/components/TopInvestor";
const {
  Flex,
  Text,
  useColorModeValue,
  SimpleGrid,
  Box,
} = require("@chakra-ui/react");

function Investor() {
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid
        columns={3}
        spacing="24px"
        gridTemplateColumns="1fr 0.7fr"
        my="4"
      >
        <TopInvestor
          title={"Top Investor"}
          captions={["Name/Email"]}
          data={tablesTableData}
        />
        <Box>
          <MiniStatistics
            title={"Total Investor"}
            amount={"120"}
            percentage={5}
            icon={<PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <Box marginTop="24px">
            {/* Menambahkan margin top untuk memberikan spasi antara MiniStatistics */}
            <MiniStatistics
              title={"Total Investor Data-Belum Aktif"}
              amount={"50"}
              percentage={- 2}
              icon={<PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
            />
          </Box>
        </Box>
      </SimpleGrid>

      {/* <Box >  */}
      <BanInvestor
        captions={[
          "Name",
          "Contacts",
          "Gender",
          "Address/Location",
          "Birth-Date",
          "NIK",
          "NPWP",
          "Reg-Date",
          "Balance",
          "Actions",
        ]}
        data={investorData}
      />
      {/* </Box> */}
    </Flex>
  );
}

export default Investor;
