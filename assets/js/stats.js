var settings={url:"https://explorer.bit-rock.io/api/v2/stats",method:"GET",timeout:0};$.ajax(settings).done(function(t){let e=parseInt(t.total_transactions);var a=e.toLocaleString();$("#totalTransaction").text(a);let o=parseInt(t.tvl);a=o.toLocaleString();$("#TVL").text(a);let i=parseInt(t.total_addresses);a=i.toLocaleString();$("#accountAddress").text(a);let n=parseFloat(t.coin_price);t=n.toPrecision(4);$("#coinPrice").text(t.toLocaleString())});var TVLsettings={url:"https://api.llama.fi/v2/historicalChainTvl/bitrock",method:"GET",timeout:0};$.ajax(TVLsettings).done(function(t){let e=parseInt(t.tvl);var a=e.toLocaleString();$("#TVLS").text(a);t=t.pop("tvl");let o=Math.trunc(t.tvl);$("#TVLS").text(o.toLocaleString())});
