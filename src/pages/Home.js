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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingAddress: "",
      startingLatitude: "",
      startingLongitude: "",
    };
  }

  handleChange = (startingAddress) => {
    this.setState({ startingAddress });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      // .then((latLng) => console.log("Success", latLng))
      .then((latLng) =>
        this.setState({
          startingLatitude: latLng.lat,
          startingLongitude: latLng.lng,
        }),
      )
      // .then((latLng) => this.setState({ longitude: latLng.lng }))
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.startingAddress}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
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
                // const className = suggestion.active
                //   ? "suggestion-item--active"
                //   : "suggestion-item";
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
    );
  }
}

export default Home;
