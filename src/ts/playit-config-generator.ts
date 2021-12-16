import j2t from "json2toml";

let agent_config = new Proxy<AgentConfig>(
  { secret_key: "", mappings: [] },
  {
    set: (obj, prop, value) => {
      obj[prop] = value;

      document.getElementById("config-output").innerHTML = (
        j2t(obj, {
          indent: 2,
          newlineAfterSection: true
        }) as string
      ).trim();

      return true;
    }
  }
);

document
  .getElementById("secret-key")
  .addEventListener(
    "change",
    (e) => (agent_config.secret_key = (e.target as HTMLInputElement).value)
  );

// document.getElementById("create-mapping").addEventListener("click", () => {
//   agent_config.mappings.push();
// });

interface AgentConfig {
  secret_key: string;
  mappings: Array<PortMapping>;
}

interface PortMapping {
  proto: "udp" | "tcp" | "both";
  tunnel_ip: string;
  tunnel_from_port: number;
  tunnel_to_port?: number;
  local_ip?: string;
  local_port?: number;
}
