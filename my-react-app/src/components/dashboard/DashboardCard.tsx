import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface CardProps {
  title: string;
  value: number;
}

const DashboardCard: React.FC<CardProps> = ({ title, value }) => {
  return (
    <Card sx={{ boxShadow: 3, p: 2, textAlign: "center", borderRadius: 2, background: "#1e1e1e", color: "white" }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
        <Typography variant="h4" sx={{ color: "#00C853", fontWeight: 700 }}>{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
