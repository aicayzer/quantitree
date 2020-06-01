import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { googleApiKey } from "../googleApiKey";
import { Helmet } from "react-helmet";
//Material-UI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
//Styled-Components
import {
  StyledLocationSuggestions,
  StyledLocationList,
  DisplayBox,
  Screen,
  StyledLocationInputField,
  StyledInputDiv,
  ResponseText,
  HeadingText,
  SmallerHeadingText,
  StyledFormControl,
} from "../styles";

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
      treeFailure: " ",
    };
  }

  //add errors
  handleSubmit = (e) => {
    this.setState({ treeTime: null });
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
        //https://www.wired.co.uk/article/trains-planes-emissions-co2-comparison
        this.setState({ distnaceInMeters: distance, treeTime: trees });
      })
      // console.log(this.state.responseContents);
      // destination.rows[0]["elements"][0].distance.value
      .catch(() => {
        console.log("Can’t access " + url + " response. Blocked by browser?");
        const responseFail =
          "I'm struggling to calculate that, try a different journey";
        this.setState({ treeFailure: responseFail });
      });
  };
  handleChangeStartingAddress = (address) => {
    console.log([address.target]);
    this.setState({ startingAddress: address });
  };
  handleChangeDestinationAddress = (address) => {
    this.setState({ destinationAddress: address });
  };
  // handleChangeMilesPergallon = (mpg) => {
  //   console.log([mpg.target]);
  //   this.setState({ milesPergallon: [mpg.target.value] });
  // };

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
      <Screen>
        <Helmet>
          <title>
            Quantitree Calculator - Calculate your cars carbon footprint
          </title>
          <meta
            name="description"
            content="Calculate your cars carbon footprint using the quantitree calculator"
          />
        </Helmet>
        <Grid container spacing={2}>
          <Grid item xs />
          <Grid item xs>
            <DisplayBox>
              <HeadingText>Quantitree Calculator!</HeadingText>
              <SmallerHeadingText>
                Ever wondered how much carbon you burn when you drive somewhere?
                Well Quantitree have and so we created this very basic
                calculator to help you gain some perspective. Enter you starting
                and ending location below and press submit to have a try!
              </SmallerHeadingText>
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
                        label="Start"
                        variant="outlined"
                        {...getInputProps({
                          placeholder: "Search Places ...",
                          className: "location-search-input",
                        })}
                      />
                      <StyledLocationList>
                        {loading && (
                          <StyledLocationSuggestions>
                            Loading...
                          </StyledLocationSuggestions>
                        )}
                        {suggestions.map((suggestion) => {
                          return (
                            <StyledLocationSuggestions
                              {...getSuggestionItemProps(suggestion)}
                            >
                              {suggestion.description}
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
                        {loading && (
                          <StyledLocationSuggestions>
                            Loading...
                          </StyledLocationSuggestions>
                        )}
                        {suggestions.map((suggestion) => {
                          return (
                            <StyledLocationSuggestions
                              {...getSuggestionItemProps(suggestion)}
                            >
                              {suggestion.description}
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
              <ResponseText>
                {this.state.treeTime
                  ? `that will take the average tree roughly ${this.state.treeTime} days to offset!`
                  : `${this.state.treeFailure} `}
              </ResponseText>
            </DisplayBox>
          </Grid>
          <Grid item xs />
        </Grid>
      </Screen>
    );
  }
}

export default Home;
