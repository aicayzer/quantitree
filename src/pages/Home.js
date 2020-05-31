import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
//Styles
import styled from "styled-components";
//Material-UI
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

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

const StyledFormControl = styled(FormControl)`
  width: 250px;
  margin: 15px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingAddress: null,
      startingLatitude: null,
      startingLongitude: null,
      destinationAddress: null,
      destinationLatitude: null,
      destinationLongitude: null,
      milesPerGalon: null,
    };
  }

  handleSubmit = () => {
    if (this.state.startingLatitude == true && this.state.startingLongitude == true && this.state.destinationLatitude == true && this.state.destinationLongitude == true)
  }
  handleChangeStartingAddress = (address) => {
    this.setState({ startingAddress: address });
  };
  handleChangeDestinationAddress = (address) => {
    this.setState({ destinationAddress: address });
  };
  handleChangeMilesPerGalon = (mpg) => {
    this.setState({ milesPerGalon: [mpg.target.value] });
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
          <StyledInputDiv>
            <StyledFormControl variant="outlined">
              <InputLabel>Miles Per Galon</InputLabel>
              <Select
                value={this.state.milesPerGalon}
                onChange={this.handleChangeMilesPerGalon}
                label="Miles Per Galon"
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
          </StyledInputDiv>
        </form>
        <h1>{this.state.startingAddress}</h1>
      </div>
    );
  }
}

export default Home;
