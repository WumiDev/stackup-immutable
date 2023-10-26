import { getDefaultProvider, Wallet } from "ethers"; // ethers v5
import { Provider, TransactionResponse } from "@ethersproject/providers"; // ethers v5
import { ERC721Client } from "@imtbl/zkevm-contracts";

const CONTRACT_ADDRESS = "0x389D6E9eEB2E54e6a580cfc28187f6F59373dbC0";
const PRIVATE_KEY = "2ed7b996590cafc514b2d78686fa970692f72da0f442cdda1525fcf0de288bd9";
const provider = getDefaultProvider("https://rpc.testnet.immutable.com");

const grantMinterRole = async (
 provider: Provider
): Promise<TransactionResponse> => {
 // Bound contract instance
 const contract = new ERC721Client(CONTRACT_ADDRESS);
 // The wallet of the intended signer of the mint request
 const wallet = new Wallet(PRIVATE_KEY, provider);

 // Give the wallet minter role access
 const populatedTransaction = await contract.populateGrantMinterRole(
  wallet.address
 );
 const result = await wallet.sendTransaction(populatedTransaction);
 console.log("Minter Role Granted");
 return result;
};

grantMinterRole(provider);