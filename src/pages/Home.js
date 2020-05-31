import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { googleApiKey } from "../googleApiKey";
//Styles
import styled from "styled-components";
//Material-UI
import TextField from "@material-ui/core/TextField";
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const StyledLocationSuggestions = styled.div`
  background-color: #fff;
  padding: 12px 16px;
  &:hover {
    background-color: #3f51b5;
    cursor: pointer;
    color: #fff;
  }
`;

const StyledLocationList = styled.div`
  min-width: 250px;
  max-width: 250px;
  width: 50%;
  margin: 0 auto;
`;

const StyledLocationInputField = styled(TextField)`
  width: 250px;
`;

const StyledInputDiv = styled.div`
  margin: 15px;
`;

// const StyledFormControl = styled(FormControl)`
//   width: 250px;
//   margin: 15px;
// `;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingAddress: "",
      startingLatitude: "",
      startingLongitude: "",
      destinationAddress: "",
      destinationLatitude: "",
      destinationLongitude: "",
      // milesPergallon: "",
      distnaceInMeters: null,
      treeTime: "",
    };
  }

  //add errors
  handleSubmit = (e) => {
    const {
      startingLatitude,
      startingLongitude,
      destinationLatitude,
      destinationLongitude,
    } = this.state;
    e.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${startingLatitude},${startingLongitude}&destinations=${destinationLatitude},${destinationLongitude}&key=${googleApiKey}`;
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((contents) => {
        const distance = contents.rows[0]["elements"][0].distance.value;
        //carbon emissions per mile 0.000098
        //22kg offset of tree per year
        const trees = Math.round(0.000098 * distance * 22);
        this.setState({ distnaceInMeters: distance, treeTime: trees });
      })
      // console.log(this.state.responseContents);
      // destination.rows[0]["elements"][0].distance.value
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?"),
      );
  };
  handleChangeStartingAddress = (address) => {
    this.setState({ startingAddress: address });
  };
  handleChangeDestinationAddress = (address) => {
    this.setState({ destinationAddress: address });
  };
  handleChangeMilesPergallon = (mpg) => {
    this.setState({ milesPergallon: [mpg.target.value] });
  };

  handleSelectStartingAddress = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      // .then((latLng) => console.log("Success", latLng))
      .then((latLng) =>
        this.setState({
          startingAddress: address,
          startingLatitude: latLng.lat,
          startingLongitude: latLng.lng,
        }),
      )

      .catch((error) => console.error("Error", error));
  };

  handleSelectDestinationAddress = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) =>
        this.setState({
          destinationAddress: address,
          destinationLatitude: latLng.lat,
          destinationLongitude: latLng.lng,
        }),
      )
      // .then((latLng) => {
      //   if ([address.target.name] === "startingAddress") {
      //     this.setState({
      //       startingLatitude: latLng.lat,
      //       startingLongitude: latLng.lng,
      //     });
      //   } else if ([address.target.name] === "destinationAddress") {
      //     this.setState({
      //       destinationLatitude: latLng.lat,
      //       destinationLongitude: latLng.lng,
      //     });
      //   }
      // })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <PlacesAutocomplete
            value={this.state.startingAddress}
            onChange={this.handleChangeStartingAddress}
            onSelect={this.handleSelectStartingAddress}
            name="startingAddress"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <StyledInputDiv>
                <StyledLocationInputField
                  id="standard-basic"
                  label="Start Location"
                  variant="outlined"
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <StyledLocationList>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    return (
                      <StyledLocationSuggestions
                        {...getSuggestionItemProps(suggestion)}
                      >
                        <span>{suggestion.description}</span>
                      </StyledLocationSuggestions>
                    );
                  })}
                </StyledLocationList>
              </StyledInputDiv>
            )}
          </PlacesAutocomplete>
          <PlacesAutocomplete
            value={this.state.destinationAddress}
            onChange={this.handleChangeDestinationAddress}
            onSelect={this.handleSelectDestinationAddress}
            name="destinationAddress"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <StyledInputDiv>
                <StyledLocationInputField
                  id="standard-basic"
                  label="Destination"
                  variant="outlined"
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <StyledLocationList>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    return (
                      <StyledLocationSuggestions
                        {...getSuggestionItemProps(suggestion)}
                      >
                        <span>{suggestion.description}</span>
                      </StyledLocationSuggestions>
                    );
                  })}
                </StyledLocationList>
              </StyledInputDiv>
            )}
          </PlacesAutocomplete>
          {/* <StyledInputDiv>
            <StyledFormControl variant="outlined">
              <InputLabel>Miles Per gallon UK</InputLabel>
              <Select
                value={this.state.milesPergallon}
                onChange={this.handleChangeMilesPergallon}
                label="Miles Per gallon"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </StyledFormControl>
          </StyledInputDiv> */}
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </form>
        <h1>
          {this.state.treeTime
            ? `that will take the average tree roughly ${this.state.treeTime} days to offset!`
            : null}
        </h1>
      </div>
    );
  }
}

export default Home;
