import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import Fields from "./Components/Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

 


  return (
    <div className="App">
      <Header />
      <div className="Form">
        <Stack spacing={6} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button color="success" onClick={addData} variant="contained">
            <AddIcon />
          </Button>
        </Stack>
        {/* //data show */}
        <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {data.map((element, index) => {
            return (
             <Fields name={element.name} email={element.email} index={element.index} data={data} setData={setData}/> 
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
