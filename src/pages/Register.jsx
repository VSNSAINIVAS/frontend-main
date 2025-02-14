import { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, TextField } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [passwordRegister, setPasswordRegister] = useState("");
  const [passwordConfirmRegister, setPasswordConfirmRegister] = useState("");
  const [registerBy, setRegisteredBy] = useState("general user");

  const navigate = useNavigate();

  return (
    <div className="signup">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          borderRadius: "25px",
          padding: "30px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            boxShadow: "0px 3px 14px",
            padding: "30px",
            borderRadius: "50px",
          }}
        >
          <div>
            <h1
              style={{
                color: "#3B5998",
                marginLeft: "100px",
                fontSize: "20px",
              }}
            >
              Sign Up
            </h1>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                marginRight: "10px",
                fontSize: "16px",
                display: "inline-block",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Name
            </p>
            <TextField
              id="outline-basic"
              size="small"
              label="Enter your name"
              value={nameRegister}
              onChange={(e) => setNameRegister(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                marginRight: "10px",
                fontSize: "16px",
                display: "inline-block",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Email
            </p>
            <TextField
              id="outline-basic"
              size="small"
              label="Enter your email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "20px", zIndex: 10 }}>
            <p
              style={{
                marginRight: "10px",
                fontSize: "16px",
                display: "inline-block",
                marginTop: "-5px",
                fontWeight: "bold",
                marginBottom: "10px",
                marginLeft: "-6px",
              }}
            >
              Date of birth
            </p>
            <div style={{ zIndex: 100 }}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                marginBottom: "6px",
                fontWeight: "bolder",
                marginRight: "20px",
                marginTop: "8.5px",
              }}
            >
              Role{" "}
            </p>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={registerBy}
                onChange={(e) => setRegisteredBy(e.target.value)}
              >
                <FormControlLabel
                  value="general user"
                  control={<Radio />}
                  label="Genearl User"
                />
                <FormControlLabel
                  value="recruiter"
                  control={<Radio />}
                  label="Recruiter"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ marginTop: "30px" }}>
            <p
              style={{
                fontSize: "16px",
                display: "block",
                marginTop: "-5px",
                marginBottom: "15px",
                marginLeft: "100px",
                fontWeight: "bold",
              }}
            >
              Password
            </p>

            <TextField
              id="outline-basic"
              size="small"
              label="Enter your password"
              type="password"
              style={{
                width: "300px",
              }}
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <p
              style={{
                fontSize: "16px",
                display: "block",
                marginTop: "-5px",
                marginBottom: "15px",
                marginLeft: "75px",
                fontWeight: "bold",
              }}
            >
              Confirm Password
            </p>
            <TextField
              id="outline-basic"
              size="small"
              label="Re-enter your password"
              type="password"
              style={{
                width: "300px",
              }}
              value={passwordConfirmRegister}
              onChange={(e) => setPasswordConfirmRegister(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3B5998",
                marginTop: "10px",
                marginBottom: "20px",
                marginLeft: "80px",
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <div className="signUpBackground">
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <p style={{ marginTop: "25px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <p
              style={{
                fontSize: "20px",
                color: "white",
                marginTop: "20px",
              }}
            >
              Already have a account?
            </p>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Button
                style={{ backgroundColor: "white", marginBottom: "25px" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
