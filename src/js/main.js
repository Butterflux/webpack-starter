// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

var pjson = require('../../package.json');
var el = document.getElementById('version-badge').innerHTML = `v${pjson.version}`

