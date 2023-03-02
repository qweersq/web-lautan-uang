// Chakra imports
import {
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Button,
  ButtonGroup,
  Text
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
      await axios.post("http://localhost:8000/api/auth/refresh", {
        token: localStorage.getItem("token"),
        accept: "application/json",
      }).then((response) => {
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
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <authError value={error} />
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Box sx={{ mt: "30px" }}>
        <Authors
          title={"Orders Table"}
          captions={["Author", "Function", "Status", "Employed", "Aksi"]}
          data={tablesTableData}
        />
      </Box>
    </Flex>
  );
}
