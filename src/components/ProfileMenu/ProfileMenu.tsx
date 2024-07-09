import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import "./ProfileMenu.css";
import { user } from "../..";

const ProfileMenu: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await user.save_email({ email: email, password: password });
  };

  return (
    <div
      className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-lg p-4"
      style={{ zIndex: 9999 }}
    >
      <div
        className="flex justify-between items-center mb-4"
        style={{ color: "black" }}
      >
        <h2 className="text-xl font-bold">WELCOME</h2>
      </div>
      <p className="text-sm mb-4" style={{ color: "black" }}>
        SIGN UP TO START EARNING POINTS FOR FREE GOODIES, SAVE YOUR FAVORITE
        PRODUCTS, AND MORE.
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#FBBF24",
            color: "#FFFFFF",
            mb: 2,
            width: "100%",
            "&:hover": {
              backgroundColor: "#F6AD10",
            },
          }}
          fullWidth
          className="my-4"
          disabled={loading || email.length == 0 || password.length < 6}
        >
          {loading ? "Loading..." : "GET LOGIN CODE"}
        </Button>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <FormControlLabel
          sx={{ color: "black" }}
          control={
            <Checkbox
              name="news"
              sx={{
                color: "#FBBF24",
                "&:hover": {
                  color: "#F6AD10",
                },
              }}
            />
          }
          label="Email me with news and offers"
        />
        <p className="text-xs text-gray-600">
          By signing in, you agree to our{" "}
          <a href="#" className="text-blue-600">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600">
            terms of service
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default ProfileMenu;
