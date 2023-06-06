// Chakra imports
import {
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import {
  tablesTableData,
  dashboardTableData,
  LocationData,
  fishermanTableData,
  fishermanTeamTableData,
} from "variables/general";
// import MiniStatistics from "../../../components/MiniStatistic/MiniStatistics";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import TopFisherman from "./components/TopFisherman";
import MiniStatistics from "./components/MiniStatistics";
import FishermanTeam from "./components/FishermanTeam";
import Fisherman from "./components/Fisherman";
import Location from "./components/Location";

import NelayanTeamAPI from "api/NelayanTeamAPI";

function Nelayan() {
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={3} spacing="24px">
        <MiniStatistics
          title={"Total Fisherman Team"}
          amount={"455"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Fisherman"}
          amount={"200"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Fisherman Active"}
          amount={"100"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>

      <Flex my="5" gap="3">
        <TopFisherman
          title={"Top 5 Most Invest Fisherman"}
          captions={["Name/Email"]}
          data={tablesTableData}
        />
        <Location
          title="Location Fisherman"
          captions={[
            "Country",
            "Provinsi",
            "Kota/Kab",
            "Kecamatan",
            "Kelurahan",
            "Postal-Code",
            "Actions",
          ]}
          data={LocationData}
        />
      </Flex>

      <Fisherman
        title={"Fisherman Table"}
        textColor={"blue"}
        captions={[
          "Name",
          "Fisherman Team",
          "Address & Phone",
          "Gender",
          // "Role",
          "Status",
          "Actions",
        ]}
        data={fishermanTableData}
      />
      <FishermanTeam
        title={"Fisherman Team Table"}
        captions={[
          "Name",
          "Phone",
          "Year-Formed",
          "Address/Location",
          "Balance",
          "Quantity",
          "Total Assets",
          "Divident Yield",
          "Debt To Equit Ratio",
          "Market Cap",
          "Actions",
        ]}
        data={fishermanTeamTableData}
      />
    </Flex>
  );
}

export default Nelayan;
