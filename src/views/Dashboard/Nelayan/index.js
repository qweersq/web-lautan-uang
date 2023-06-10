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
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { URL_API } from "constant/data";

import NelayanTeamAPI from "api/NelayanTeamAPI";
import { useState } from "react";
import { useEffect } from "react";

function Nelayan() {
  const iconBoxInside = useColorModeValue("white", "white");

  // const [totalFisherman, setTotalFisherman] = useState(null);
  // const [totalFishermanTeam, setTotalFishermanTeam] = useState(null);
  // const [totalFishermanActive, setTotalFishermanActive] = useState(null);

  // const [fishermanData, setFishermanData] = useState(null);
  // const [fishermanTeamData, setFishermanTeamData] = useState(null);

  // useEffect(() => {
  //   fetchData();

  //   let totalFisherman = 0;
  //   let totalFishermanTeam = 0;
  //   fishermanData.forEach((fisherman) => {
  //     totalFisherman++;
  //   });
  //   fishermanTeamData.forEach((fisherman) => {
  //     totalFishermanTeam++;
  //   });
  // }, []);
  // async function fetchData() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       Accept: `application/json`,
  //     };

  //     const [fishermanResponse, fishermanTeamResponse] = await Promise.all([
  //       axios.get(`${URL_API}/api/fisherman`, { headers }),
  //       axios.get(`${URL_API}/api/fisherman-tim`, { headers }),
  //     ]);
  //     setFishermanData(fishermanResponse.data.data);
  //     setFishermanTeamData(fishermanTeamResponse.data.data);
  //     console.log(fishermanResponse.data.data);
  //     console.log(fishermanTeamResponse.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
            // "Postal-Code",
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
          "Year-Formed",
          "Phone",
          "Address/Location",
          "Detail",
          "Actions",
        ]}
        data={fishermanTeamTableData}
      />
    </Flex>
  );
}

export default Nelayan;
