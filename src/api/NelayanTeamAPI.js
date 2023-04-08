import axios from "axios";
import FishermanTeam from "../views/Dashboard/Nelayan/components/FishermanTeam";
import React, { useState, useEffect } from "react";

export default function NelayanTeamAPI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/fisherman-tim", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setData(res.data.data);
          setLoading(false);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const transformData = (data) => {
        if (Array.isArray(data)) {
          return data.map((item) => ({
            Name: item.name,
            Phone: item.phone,
            YearFormed: item.year_formed,
            Address: item.address,
            Balance: item.balance,
            Location: item.location,
            Quantity: item.quantity,
            TotalAssets: item.total_assets,
            Actions: item.actions,
          }));
        } else {
          return [];
        }
    };

    const tablesTableData = transformData(data);

    return (
        <FishermanTeam
            title={"Fisherman Team Table"}
            textColor={"blue"}
            captions={[
                "Name",
                "Phone",
                "Year Formed",
                "Address",
                "Balance",
                "Location",
                "Quantity",
                "Total Assets",
                "Actions",
            ]}
            data={tablesTableData}
        />
    );
}