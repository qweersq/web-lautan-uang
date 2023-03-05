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
import { tablesTableData, dashboardTableData } from "variables/general";
import Authors from "./components/Authors";
import React, { useEffect, createContext } from "react";
import MiniStatistics from "./components/MiniStatistics";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "components/Card/Card";
import Transaction from "./components/Transaction";
import GraphTransaction from "./components/GraphTransaction";
import InvestorDecline from "./components/InvestorDecline";

export const authError = createContext();

export default function Dashboard() {
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
          title={"Total Transaksi"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Jumlah Investor"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Jumlah Nelayan"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>

      <Grid templateColumns='repeat(3, 4fr)' sx={{ mt: "30px" }} gap={10}>
        <GridItem colSpan={2}  w='100%' h='100%'>
          <GraphTransaction
            title={"Transaction Graph"}
            list={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]}
            data={[30, 40, 45, 50, 49, 60, 70, 91]}
          />
        </GridItem>
        <GridItem colSpan={1} w='100%' h='100%'>
          <InvestorDecline
            title={"Investor Decline"}
            captions={["Name/Email"]}
            data={tablesTableData}
          />
        </GridItem>

      </Grid>

      <Box sx={{ mt: "30px" }}>
        <Transaction
          title={"Transaction Table"}
          textColor={"blue"}
          captions={[
            "Fisherman Team",
            "Investor Name",
            "Quantity",
            "Status",
            "Actions",
            "Actions",
          ]}
          data={tablesTableData}
        />
      </Box>
    </Flex>
  );
}
