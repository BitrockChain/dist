var rockswap = "rockswap";
var bitrock = "bitrock";
var milestonemil = "milestone-millions";
var url = "https://pro-api.coingecko.com/api/v3/simple/price?ids=";
var vscurrency = "&vs_currencies=usd";
var apikey = "%REACT_APP_CG_X_API%";
var priceX = "Price";

btcsettings = {
    url: url + "bitcoin" + vscurrency,
    method: "GET",
    timeout: 0,
    headers: {
        "x-cg-pro-api-key": apikey
      }
  };
$.ajax(btcsettings).done((function(response) {
    let btcpricedecimal = (response["bitcoin"]["usd"].toLocaleString());
    console.log(btcpricedecimal);
    $("#BTC" + priceX).text(btcpricedecimal);
}));

var eth = {
url: url + "ethereum" + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(eth).done((function(e) {
let r = parseFloat(e.ethereum.usd);
e = r.toPrecision(4), $("#Ethereum" + priceX).text(r.toLocaleString())
}));
rockswap = {
url: url + rockswap + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(rockswap).done((function(e) {
e = parseFloat(e.rockswap.usd).toPrecision(4), $("#rockswap" + priceX).text(e.toLocaleString())
}));
bitrock = {
url: url + bitrock + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(bitrock).done((function(e) {
e = parseFloat(e.bitrock.usd).toPrecision(4), $("#bitrock" + priceX).text(e.toLocaleString())
}));
var milestonemillions = {
url: url + milestonemil + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(milestonemillions).done((function(e) {
e = parseFloat(e["milestone-millions"].usd).toPrecision(4), $("#milestone" + priceX).text(e.toLocaleString())
}));
var ape = {
url: url + "ape-2" + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(ape).done((function(e) {
e = parseFloat(e["ape-2"].usd).toFixed(10), $("#ape" + priceX).text(e.toLocaleString())
}));
var wrapped = {
url: url + "wrapped-platform" + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(wrapped).done((function(e) {
let r = parseFloat(e["wrapped-platform"].usd);
e = r.toPrecision(4), $("#wrap" + priceX).text(r.toLocaleString())
}));
var brw = {
url: url + "bitrock-wallet-token" + vscurrency,
method: "GET",
timeout: 0,
headers: {
  "x-cg-pro-api-key": apikey
}
};
$.ajax(brw).done((function(e) {
let r = parseFloat(e["bitrock-wallet-token"].usd);
e = r.toPrecision(4), $("#brw" + priceX).text(r.toLocaleString())
}));