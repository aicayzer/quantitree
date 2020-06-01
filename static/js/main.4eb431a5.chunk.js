(this.webpackJsonpquantitree=this.webpackJsonpquantitree||[]).push([[0],{61:function(t,e,n){t.exports=n(78)},66:function(t,e,n){},67:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(66),n(67),n(45)),s=n(46),l=n(55),u=n(54),d=n(28),m=n.n(d),f=n(47),h=n(110),g=n(112),p=n(16),b=n(17),v=n(111),E=n(113);n(74);function w(){var t=Object(p.a)(["\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 1rem;\n  width: 95%;\n  max-width: 380px;\n  margin: 0 auto;\n  color: #3f51b5;\n"]);return w=function(){return t},t}function y(){var t=Object(p.a)(["\n  font-family: Roboto;\n  font-weight: 600;\n  font-size: 2rem;\n  width: 95%;\n  max-width: 380px;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  color: #3f51b5;\n"]);return y=function(){return t},t}function S(){var t=Object(p.a)(["\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 1.3rem;\n  width: 70%;\n  margin: 0 auto;\n  color: #3f51b5;\n  margin-top: 15px;\n"]);return S=function(){return t},t}function j(){var t=Object(p.a)(["\n  width: 250px;\n  margin: 15px;\n"]);return j=function(){return t},t}function O(){var t=Object(p.a)(["\n  margin: 15px;\n"]);return O=function(){return t},t}function A(){var t=Object(p.a)(["\n  width: 350px;\n  label.focused {\n    color: #3f51b5;\n  }\n  .MuiOutlinedInput-root {\n    fieldset {\n      border: 2px solid #3f51b5;\n    }\n    &:hover fieldset {\n      border-color: #3f51b5;\n    }\n    &.Mui-focused fieldset {\n      border-color: #3f51b5;\n      color: #3f51b5;\n    }\n  }\n"]);return A=function(){return t},t}function x(){var t=Object(p.a)([""]);return x=function(){return t},t}function L(){var t=Object(p.a)(["\n  margin: 0;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n"]);return L=function(){return t},t}function k(){var t=Object(p.a)(["\n  min-width: 350px;\n  max-width: 350px;\n  width: 50%;\n  margin: 0 auto;\n"]);return k=function(){return t},t}function C(){var t=Object(p.a)(["\n  background-color: #fff;\n  padding: 12px 16px;\n  color: #3f51b5;\n  &:hover {\n    background-color: #3f51b5;\n    cursor: pointer;\n    color: #fff;\n  }\n"]);return C=function(){return t},t}var I=b.a.div(C()),P=b.a.div(k()),B=b.a.div(L()),D=b.a.div(x()),M=Object(b.a)(v.a)(A()),z=b.a.div(O()),R=(Object(b.a)(E.a)(j()),b.a.h2(S())),T=b.a.h1(y()),W=b.a.h3(w()),F=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).handleSubmit=function(t){a.setState({treeTime:null});var e=a.state,n=e.startingLatitude,r=e.startingLongitude,o=e.destinationLatitude,i=e.destinationLongitude;t.preventDefault();var c="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=".concat(n,",").concat(r,"&destinations=").concat(o,",").concat(i,"&key=").concat("AIzaSyB9HeUXkPyrjpWLzy5c1RiWFdRHyPXGrro");fetch("https://cors-anywhere.herokuapp.com/"+c).then((function(t){return t.json()})).then((function(t){var e=t.rows[0].elements[0].distance.value,n=Math.round(98e-6*e*22);a.setState({distnaceInMeters:e,treeTime:n})})).catch((function(){console.log("Can\u2019t access "+c+" response. Blocked by browser?");a.setState({treeFailure:"I'm struggling to calculate that, try a different journey"})}))},a.handleChangeStartingAddress=function(t){console.log([t.target]),a.setState({startingAddress:t})},a.handleChangeDestinationAddress=function(t){a.setState({destinationAddress:t})},a.handleSelectStartingAddress=function(t){Object(d.geocodeByAddress)(t).then((function(t){return Object(d.getLatLng)(t[0])})).then((function(e){return a.setState({startingAddress:t,startingLatitude:e.lat,startingLongitude:e.lng})})).catch((function(t){return console.error("Error",t)}))},a.handleSelectDestinationAddress=function(t){Object(d.geocodeByAddress)(t).then((function(t){return Object(d.getLatLng)(t[0])})).then((function(e){return a.setState({destinationAddress:t,destinationLatitude:e.lat,destinationLongitude:e.lng})})).catch((function(t){return console.error("Error",t)}))},a.state={startingAddress:"",startingLatitude:"",startingLongitude:"",destinationAddress:"",destinationLatitude:"",destinationLongitude:"",distnaceInMeters:null,treeTime:"",treeFailure:" "},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(f.a,null,r.a.createElement("title",null,"Quantitree Calculator - Calculate your cars carbon footprint"),r.a.createElement("meta",{name:"description",content:"Calculate your cars carbon footprint using the quantitree calculator"})),r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:!0}),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(B,null,r.a.createElement(T,null,"Quantitree Calculator!"),r.a.createElement(W,null,"Ever wondered how much carbon you burn when you drive somewhere? Well Quantitree have and so we created this very basic calculator to help you gain some perspective. Enter you starting and ending location below and press submit to have a try!"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(m.a,{value:this.state.startingAddress,onChange:this.handleChangeStartingAddress,onSelect:this.handleSelectStartingAddress,name:"startingAddress"},(function(t){var e=t.getInputProps,n=t.suggestions,a=t.getSuggestionItemProps,o=t.loading;return r.a.createElement(z,null,r.a.createElement(M,Object.assign({id:"standard-basic",label:"Start",variant:"outlined"},e({placeholder:"Search Places ...",className:"location-search-input"}))),r.a.createElement(P,null,o&&r.a.createElement(I,null,"Loading..."),n.map((function(t){return r.a.createElement(I,a(t),t.description)}))))})),r.a.createElement(m.a,{value:this.state.destinationAddress,onChange:this.handleChangeDestinationAddress,onSelect:this.handleSelectDestinationAddress,name:"destinationAddress"},(function(t){var e=t.getInputProps,n=t.suggestions,a=t.getSuggestionItemProps,o=t.loading;return r.a.createElement(z,null,r.a.createElement(M,Object.assign({id:"standard-basic",label:"Destination",variant:"outlined"},e({placeholder:"Search Places ...",className:"location-search-input"}))),r.a.createElement(P,null,o&&r.a.createElement(I,null,"Loading..."),n.map((function(t){return r.a.createElement(I,a(t),t.description)}))))})),r.a.createElement(g.a,{variant:"contained",type:"submit",color:"primary"},"Submit")),r.a.createElement(R,null,this.state.treeTime?"that will take the average tree roughly ".concat(this.state.treeTime," days to offset!"):"".concat(this.state.treeFailure," ")))),r.a.createElement(h.a,{item:!0,xs:!0})))}}]),n}(r.a.Component),q=n(53),N=n(8);var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q.a,null,r.a.createElement(N.a,{path:"/",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.4eb431a5.chunk.js.map