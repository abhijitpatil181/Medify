import { SearchPaper } from "./Search.styled";
import { AutoComplete } from "../../../../components";
import { useEffect, useState } from "react";
import { getAllCitiesInState, getAllStates } from "../../../../apis/medify";
import { Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const statesData = await getAllStates();

        setAllStates(statesData);
      } catch (error) {
        console.log("error while fetching states data");
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async (state) => {
      try {
        const citiesData = await getAllCitiesInState(state);

        setAllCities(citiesData);
      } catch (error) {
        console.log("error while fetching states data");
      }
    };

    if (state) {
      fetchCities(state);
    }
  }, [state]);

  const onChangeHandler = (label, event) => {
    switch (label) {
      case "state":
        setState(event.target.innerText);
        break;

      case "city":
        setCity(event.target.innerText);
        break;

      default:
        console.log("default");
    }
  };

  return (
    <>
      <SearchPaper>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          sx={{ margin: "4rem 0" }}
        >
          <AutoComplete
            options={allStates}
            value={state}
            type="search"
            placeholder="State"
            onChangeHandler={(e) => onChangeHandler("state", e)}
          />
          <AutoComplete
            options={allCities}
            value={city}
            type="search"
            placeholder="City"
            onChangeHandler={(e) => onChangeHandler("city", e)}
          />
          <Button
            startIcon={<SearchIcon />}
            variant="contained"
            sx={{ height: "3rem", margin: "1rem" }}
          >
            Search
          </Button>
        </Stack>
      </SearchPaper>
    </>
  );
};

export default Search;
