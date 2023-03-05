// Chakra imports
import {
  Box,
  Flex,
  SimpleGrid,
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
import { VictoryChart } from "victory";
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

      {/* Breadcrump */}
      <Box>
        <Button bgColor="transparent">Daily</Button>/
        <Button bgColor="transparent">Weekly</Button>/
        <Button bgColor="transparent">Monthly</Button>
      </Box>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
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

      <SimpleGrid mt="30px">
        <Flex direction="row"  >
          <GraphTransaction
            // mr="10px"
            title={"Transaction Graph"}
            list={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]}
            data={[30, 40, 45, 50, 49, 60, 70, 91]}
          />
          <InvestorDecline
            // ml="10px"
            title={"Investor Decline"}
            captions={["Name/Email"]}
            data={tablesTableData}
          />
        </Flex>
      </SimpleGrid>

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
