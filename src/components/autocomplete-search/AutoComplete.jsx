import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

const AutoComplete = ({
  options,
  type,
  onChangeHandler,
  placeholder,
  value,
}) => {
  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={options.map((text) => text)}
        onChange={onChangeHandler}
        sx={{
          borderRadius: "30px",
          height: "50px",
          margin: "1rem",
          width: "285px",
          "& MuiFormControl-root": {
            height: "50px",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            value={value}
            sx={{
              color: "#ABB6C7",
              "& .MuiInputBase-root": {
                padding: "6px 0 6px 1rem",
              },
              fontSize: "14px",
              fontWeight: 400,
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  {type === "search" && <SearchIcon />}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};

export default AutoComplete;
