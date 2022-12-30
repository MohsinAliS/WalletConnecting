import './App.css';
import { getDefaultProvider } from 'ethers'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Button } from "@web3modal/react";
import { Web3Modal } from "@web3modal/react";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";



function App() {


  const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "b2b5ed4e847635fcfe40171289de2931" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);


return (
   
      <><div class="vertical-center">      
      <WagmiConfig client={wagmiClient}>
      </WagmiConfig>
      <Web3Button />     
      <Web3Modal
        projectId="b2b5ed4e847635fcfe40171289de2931"
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
       </div>
    </>
   

      
  );
}

export default App;
