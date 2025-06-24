import { BinanceAPI } from "./criptocurrency/BinanceAPI";
import { Bitcoin } from "./criptocurrency/Bitcoin";
import { BitcoinPriceLogger } from "./service/BitcoinPriceLogger";
import { InvestorNotifier } from "./service/InvestorNotifier";
import { NewsPlatform } from "./service/NewsPlatform";

const bitcoin = new Bitcoin();
const binanceAPI = new BinanceAPI();
const bitcoinPriceLogger = new BitcoinPriceLogger();
const investorNotifier = new InvestorNotifier();
const newsPlatform = new NewsPlatform();

bitcoin.addObserver(bitcoinPriceLogger);
bitcoin.addObserver(investorNotifier);
bitcoin.addObserver(newsPlatform);

await bitcoin.setPrice(binanceAPI.getLastPrice());
await bitcoin.setPrice(binanceAPI.getLastPrice());
console.log(`Bitcoin price: ${bitcoin.getPrice()}`);
