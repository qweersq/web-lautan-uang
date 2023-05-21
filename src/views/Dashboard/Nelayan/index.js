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
import { tablesTableData, dashboardTableData, LocationData, fishermanTableData } from "variables/general";
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

      <Flex mt='5'>
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

      <Grid sx={{ mt: "30px" }} gap={10}>
        <GridItem>
          <NelayanTeamAPI />
        </GridItem>
        <GridItem>
          <Fisherman
            title={"Fisherman Table"}
            textColor={"blue"}
            captions={[
              "Name",
              "Fisherman Team",
              "Address & Phone",
              "Gender",
              "Role",
              "Status",
              "Actions",
            ]}
            data={fishermanTableData}
          />
        </GridItem>
      </Grid>

      {/* <Projects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      /> */}
    </Flex>
  );
}

export default Nelayan;
