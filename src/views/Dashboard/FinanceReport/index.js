// Chakra imports
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  useColorModeValue,
  Button,
  ButtonGroup,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
} from "@chakra-ui/react";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import {
  tablesTableData,
  dashboardTableData,
  fishermanTeamCatchDetail,
  fishermanTeamCatchData,
} from "variables/general";
import Authors from "./components/Authors";
import React, { useEffect, createContext } from "react";
import MiniStatistics from "./components/MiniStatistics";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "components/Card/Card";
import Transaction from "./components/Transaction";
import GraphTransaction from "./components/GraphTransaction";
import InvestorDecline from "./components/InvestorDecline";
import FishermanCatch from "./components/FishermanCatch";
import FishermanCatchOrder from "./components/FishermanCatchOrder";

import {} from "variables/general";
import AnimalType from "./components/AnimalType";
import { animalTypeData } from "variables/general";

export const authError = createContext();

export default function FinanceReport() {
  const iconBoxInside = useColorModeValue("white", "white");

  const [token, setToken] = React.useState("");
  const navigate = useHistory();
  const [error, setError] = React.useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      await axios
        .post("http://localhost:8000/api/auth/refresh", {
          token: localStorage.getItem("token"),
          accept: "application/json",
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.access_token);
          setToken(response.data.access_token);
        });
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      navigate.push("/auth/signin");
    }
  };

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <authError value={error} />

      <SimpleGrid columns={3} spacing="24px">
        <MiniStatistics
          title={"Total Laporan"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Telah Membuat Report"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Yang Belum Report"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>

      <Box sx={{ mt: "30px" }}>
        <Flex gap={2}>
          <FishermanCatch
            title={"Fisherman Catch Table"}
            textColor={"blue"}
            captions={["Fisherman Team Name", "Weight", "Actions"]}
            data={fishermanTeamCatchData}
            fishcatchDetail={fishermanTeamCatchDetail}
          />
          <AnimalType
            title={"Animal Type"}
            textColor={"blue"}
            captions={["Name", "Description", "Actions"]}
            data={animalTypeData}
            // fishcatchDetail={fishermanTeamCatchDetail}
          />
        </Flex>
      </Box>

      <Flex gap={4} my={5}>
        <FishermanCatchOrder
          title="Most Animal Type Catch"
          captions={["Name", "Total"]}
          data={fishermanTeamCatchDetail}
        />
        <FishermanCatchOrder
          title="Fisherman Team Most Catch"
          captions={["Name", "Total"]}
          data={fishermanTeamCatchDetail}
        />
        <FishermanCatchOrder
          title="Fisherman Team Most Catch"
          captions={["Name", "Total"]}
          data={fishermanTeamCatchDetail}
        />
      </Flex>
    </Flex>
  );
}
