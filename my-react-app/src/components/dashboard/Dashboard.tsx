import React from "react";
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, CircularProgress } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Dummy Data (Replace with API Data)
const analyticsData = {
  revenue: "$75,420",
  transactions: 3250,
  uptime: "99.98%",
};

const chartData = [
  { month: "Jan", users: 800 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 1500 },
  { month: "Apr", users: 1800 },
  { month: "May", users: 2000 },
];

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl">
      {/* Top Banner */}
      <Box sx={{ my: 4, textAlign: "center", position: "relative" }}>
        <Card sx={{ position: "relative", overflow: "hidden", borderRadius: 4 }}>
          <CardMedia component="img" height="300" image="https://www.clicdata.com/wp-content/uploads/2018/08/banner.jpg" alt="Dashboard" />
          <CardContent
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              🚀 Business Analytics Dashboard
            </Typography>
            <Typography variant="h6">Track your growth in real time</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4 }}>
            <Typography variant="h5">💰 Total Revenue</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#4CAF50" }}>{analyticsData.revenue}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4 }}>
            <Typography variant="h5">📦 Transactions</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#FF9800" }}>{analyticsData.transactions}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ textAlign: "center", p: 3, boxShadow: 4 }}>
            <Typography variant="h5">⚡ Uptime</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#2196F3" }}>{analyticsData.uptime}</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* User Growth Chart */}
      <Box sx={{ my: 5, p: 4, backgroundColor: "#f9f9f9", borderRadius: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          📈 User Growth Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#673AB7" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
};

export default Dashboard;
