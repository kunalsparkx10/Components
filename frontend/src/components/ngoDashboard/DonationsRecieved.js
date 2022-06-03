import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import donations from "../../data/donationsData";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
      // backgroundColor: "#FCD2D1",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      // backgroundColor: "#FCD2D1",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const DonationsRecieved = () => {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [textVal, setTextVal] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setData(donations);
    setfilteredData(donations);
    let sumTotal = 0;
    donations.map((each) => {
      sumTotal += each.amount;
    });
    setTotal(sumTotal);
  }, [donations]);

  const onChange = (value) => {
    const searchVal = value.toLowerCase();
    let regex = new RegExp(searchVal, "g");
    const name = data.filter((each) => {
      if (each.name) {
        return each.name.toLowerCase().match(regex);
      }
    });
    setfilteredData([...new Set([...name])]);
  };

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    // LinkIcon
    {
      name: "Phone",
      selector: "phoneNumber",
      sortable: true,
    },
    {
      name: "Amount",
      selector: "amount",
      sortable: true,
    },
    {
      name: "Location",
      selector: "place",
      sortable: true,
    },
  ];

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          style={{ backgroundColor: "white" }}
          id="outlined-search"
          placeholder="Search by name/e-mail"
          fullWidth
          size="small"
          type="search"
          variant="outlined"
          value={textVal}
          onChange={(e) => {
            setTextVal(e.target.value);
            onChange(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <DataTable
        title={`Donations Recived - र ${total}`}
        customStyles={customStyles}
        columns={columns}
        data={filteredData}
        highlightOnHover={true}
        pointerOnHover={true}
        pagination={true}
        paginationPerPage={8}
      />
    </div>
  );
};

export default DonationsRecieved;
