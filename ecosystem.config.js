module.exports = {
  apps : [{
    name:"frontend",
    script:"./frontend/server.js",
    instance: 2,
    cron_restart: "0 2 * * *",
    exec_mode: "cluster",
    merge_logs: true
  }],
  deploy : {
    production : {
      "user" : "root",
      "host" : "172.252.236.248",
      "key"  : "./keys/id_rsa.pem",   
      "ref"  : "origin/main",
      "repo" : "git@github.com:Horus-Turboss-Finance/web-interface.git",
      "path" : "~/cashsight/frontend",
      "post-deploy": `npm run production`,
    }
  }
}