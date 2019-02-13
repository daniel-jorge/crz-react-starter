module.exports = {
  client: {
    includes: [__dirname + "/src/queries/**"],
    service: {
      name: "countries",
      url: "https://countries.trevorblades.com/"
    }
  }
};
