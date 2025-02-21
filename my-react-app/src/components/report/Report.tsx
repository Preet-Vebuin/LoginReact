import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import reports from "../../data/reports.json"; 
import chartData from "../../data/chart.json"

const Report: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          📊 Business Reports
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Analyzing key metrics & insights
        </Typography>
      </Box>

      {/* Report Cards */}
      <Grid container spacing={3}>
        {reports.map((report) => (
          <Grid item xs={12} sm={6} md={4} key={report.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" height="180" image={report.img} alt={report.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {report.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {report.date}
                </Typography>
                <Typography variant="h5" color="primary" mt={1}>
                  ${report.value.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Revenue Chart */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InsertChartIcon sx={{ mr: 1 }} /> Revenue Growth (Last 3 Months)
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3f51b5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default Report;
