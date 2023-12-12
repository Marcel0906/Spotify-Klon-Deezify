const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var accounts = JSON.parse(fs.readFileSync("./accounts.json"));

app.post("/", function (req, res) {
  username1 = req.body.userinput; //username is their email
  password1 = req.body.passinput;

  const account = accounts.find((account) => account.email === username1);

  if (account && account.password === password1) {
    console.log("Correct login");
    res.render("login", { layout: false });
  } else if (account && account.password !== password1) {
    var incorrectp = "Invalid Password";
    res.render("login", { layout: false, wrongp: incorrectp });
  } else {
    var incorrectu = "Not a registered username";
    res.render("login", { layout: false, wrongu: incorrectu });
  }
});

// username1 == accounts.email && password1 == accounts.password for the first if-statement
// username1 == accounts.email && password1 != accounts.password for the second if-statement
// (username1 != accounts.email) for the third if else statement
