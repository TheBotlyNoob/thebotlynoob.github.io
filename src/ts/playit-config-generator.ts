import j2t from "json2toml";

setTimeout(() => {
  let json = { thing: "otherthing" };

  document.getElementById("config-output").innerHTML = j2t(json);
}, 5000);
