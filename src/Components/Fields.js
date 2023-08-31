import React from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';




const Fields = ({name, email, index, data, setData}) => {

  const remove =(index)=> {
    let arr=data;
    arr.splice(index,1)
   setData([...arr]);
  }

  return (
    <div className="data_val">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Button color="error" variant="contained"><DeleteIcon/></Button>
            <div key = {index} className="data_val">
                <h4>{name}</h4>
                <h4>{email}</h4>
                <Button color="error" onClick={()=>remove(index)} variant="contained">
                  <DeleteIcon />
                </Button>
              </div>
    </div>
     
   
)
}

export default Fields


