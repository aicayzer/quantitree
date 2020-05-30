import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
//Styles
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

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

const StyledLocationInputDiv = styled.div`
  margin: 15px;
`;

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
      milesPerGalon: "",
    };
  }

  handleChange = (address) => {
    this.setState({ startingAddress: address });
  };
  handleChangeTWO = (destinationAddress) => {
    this.setState({ destinationAddress });
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
        <form>
          <PlacesAutocomplete
            value={this.state.startingAddress}
            onChange={this.handleChange}
            onSelect={this.handleSelectStartingAddress}
            name="startingAddress"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <StyledLocationInputDiv>
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
              </StyledLocationInputDiv>
            )}
          </PlacesAutocomplete>
          <PlacesAutocomplete
            value={this.state.destinationAddress}
            onChange={this.handleChangeTWO}
            onSelect={this.handleSelectDestinationAddress}
            name="destinationAddress"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
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
              </div>
            )}
          </PlacesAutocomplete>
        </form>
      </div>
    );
  }
}

export default Home;
