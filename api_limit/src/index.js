const express = require("express");
const app = express();

const network = {};

app.use("/limit", async (req, res) => {
  try {
    const currentIp = req.ip;
    if (network.ip == undefined) {
      network.ip = currentIp;
      network.count = 1;
      network.firstTime = new Date();
      return res.status(200).send("Connected to api fisrt time");
    } else if (network.ip == currentIp) {
      if (
        Math.round(
          (((new Date() - network.firstTime) % 86400000) % 3600000) / 60000
        ) <= 1 &&
        network.count < 10
      ) {
        network.count += 1;
        return res
          .status(200)
          .send(`Connected to api fisrt time ${network.count} times`);
      } else {
        if (
          Math.round(
            (((new Date() - network.firstTime) % 86400000) % 3600000) / 60000
          ) > 1
        ) {
          network.ip = undefined;
          return res.status(200).send(`Connected to api after 1 minutes`);
        } else {
          return res.status(404).send(`Exceeded api limit`);
        }
      }
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});
const port=process.env.PORT;
app.listen(port, async () => {
  try {
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
