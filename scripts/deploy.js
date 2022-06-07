
const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contract with account: ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString());

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("WavePortal Address: ", waveContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }catch (e) {
        console.log(e);
        process.exit(1);
    }
}

runMain();