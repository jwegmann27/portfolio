//This is to connect to firebase you probably wont need this but I left it here in case :)

import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: "AIzaSyBF8EUx0l-ihRBwzP5RIflq3IjQXVDqwSw",
  authDomain: "catch-of-the-day-joseph-wegma.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-joseph-wegma.firebaseio.com",
});

export default base;
