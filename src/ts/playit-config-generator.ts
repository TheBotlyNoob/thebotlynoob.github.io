import j2t from "json2toml";

let json = { thing: "otherthing" };

document.getElementById("config-output").innerHTML = j2t(json) as string;
