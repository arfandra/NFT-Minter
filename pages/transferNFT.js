import react, {useEffect} from "react";
import { useMoralis, useWeb3Transfer } from "react-moralis";
import Moralis from 'moralis'

export default function TransferNFT () {

    const {
        authenticate,
        isWeb3Enabled,
        isAuthenticated,
        isAuthenticating,
        user,
        enableWeb3,
        logout,
        authError,
        userError,
        web3,
      } = useMoralis();

      const metamaskAuth = async () =>{
        try {
          await Moralis.enableWeb3();
          fetch()
        } catch (error){
          console.log(error)
        }
      }

    const {fetch, error, isFetching} = useWeb3Transfer ({
        type: "erc1155",
        receiver: "0xd0e5DA2A25d1a946Eae22dDFDb2e557d8E445303",
        contractAddress : "0x1AF7A7555263F275433c6Bb0b8FdCD231F89B1D7",
        tokenId: "49170542403361639799423901281038668231879802196326778994159336206779608465409",
        amount: "1",
});

if(error){
    console.log(error);
    console.log(isAuthenticated);
    console.log(isWeb3Enabled);
}

return(
    <div>

    <button onClick={metamaskAuth} disabled={isFetching}>
        Transfer
    </button>
    </div>
)
// Use your custom error component to show errors

};