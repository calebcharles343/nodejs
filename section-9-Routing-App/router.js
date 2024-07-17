const express = require("express");
const route = express.Router();
let accounts = require("./database");

//GET request
route.get("/accounts", (req, res) => {
  res.json({ userdata: accounts });
});

//POST request
route.post("/accounts", (req, res) => {
  const incomingAccount = req.body;
  accounts.push(incomingAccount);
  res.json(accounts);
});

//GET request by ID
route.get("/accounts/:id", (req, res) => {
  const accountId = Number(req.params.id);
  const getAccount = accounts.find((acc) => acc.id === accountId);

  if (!getAccount) {
    res.status(500).send("Account not found");
  } else {
    res.json({ userdata: [getAccount] });
  }
});

// PUT http method
route.put("/accounts/:id", (req, res) => {
  const accountId = Number(req.params.id);
  const body = req.body;
  const account = accounts.find((acc) => acc.id === accountId);
  const index = accounts.indexOf(account);

  if (!account) {
    res.status(500).send("Account not found");
  } else {
    const updatedAccount = { ...account, ...body };
    // console.log({ ...account, ...body });
    accounts[index] = updatedAccount;
    res.send(updatedAccount);
  }
});

//delete request
route.delete("/accounts/:id", (req, res) => {
  const accountId = Number(req.params.id);
  const newAccounts = accounts.filter((acc) => acc.id !== accountId);

  if (!newAccounts) {
    res.status(500).send("Account not found");
  } else {
    accounts = newAccounts;
    res.send(accounts);
  }
});

module.exports = route;
