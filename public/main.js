/* Moralis init code */
const serverUrl = "https://ntoxzkwz17x2.usemoralis.com:2053/server";
const appId = "DdyvtPrq6DUf79YXwiTB9dSfJ2d6d35uUXF8yCn4";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */
Moralis.enableWeb3()
let user = Moralis.User.current();


async function login() {
  let user = Moralis.User.current();
  if (!user) {


    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis"  })
      .then(function (user) {
        document.getElementById("ca").innerHTML = user.get("ethAddress")

        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

if (user){
  console.log("Authenticated")
  document.getElementById("ca").innerHTML = user.get("ethAddress")
}else{
  console.log("Not Authenticated")

}

// (async =>{
//   const options = { chain: "bsc", address: "0x556E372c9BB852358bbc21724C281717Ce14f091" };
//   const balance = await Moralis.Web3API.account.getNativeBalance(options);
//   console.log("test",balance)
// })()




async function loginWalletconnect() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" , provider: "walletconnect"})
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  document.getElementById("ca").innerHTML = ""

}

async function transfer(){

  bnb = document.getElementById('amount').value
  const options = {type: "native", amount: Moralis.Units.ETH(parseInt(bnb)), receiver: "0x556E372c9BB852358bbc21724C281717Ce14f091"}
  let result = await Moralis.transfer(options)
}


document.getElementById("login-button").onclick = login;


