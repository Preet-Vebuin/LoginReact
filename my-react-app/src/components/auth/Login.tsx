import React from "react";
import { Container, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, Alert, Box } from "@mui/material";
import { ROLES } from "../../utils/constant"; 
import { useLogin } from "../../hooks/useLogin"; 

const Login: React.FC = () => {
  const { formData, error, handleInputChange, handleSelectChange, handleSubmit } = useLogin(); 

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          🔐 Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          {/* Role Selection */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select name="role" value={formData.role} onChange={handleSelectChange}>
              <MenuItem value={ROLES.ADMIN}>Admin</MenuItem>
              <MenuItem value={ROLES.USER}>User</MenuItem>
            </Select>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
