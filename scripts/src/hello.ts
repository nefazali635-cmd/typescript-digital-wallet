import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let walletBalance = 1000;
const correctPin = "1234";
let transactionHistory: string[] = [];

function showMenu() {
    console.log("\n===============================");
    console.log("          MAIN MENU            ");
    console.log("===============================");
    console.log("1. Transfer Money");
    console.log("2. Deposit Money");
    console.log("3. Mobile Recharge");
    console.log("4. Check Balance");
    console.log("5. Transaction History");
    console.log("6. Exit");
    
    rl.question("\nOption select karein (1-6): ", (choice) => {
        switch (choice.trim()) {
            case '1':
                handleTransfer();
                break;
            case '2':
                handleDeposit();
                break;
            case '3':
                handleRecharge();
                break;
            case '4':
                console.log(`\n💰 Current Balance: Rs ${walletBalance}`);
                showMenu();
                break;
            case '5':
                showHistory();
                break;
            case '6':
                console.log("\nThank you for using Digital Wallet. Goodbye! 👋");
                rl.close();
                break;
            default:
                console.log("\n❌ Invalid option! Dobara try karein.");
                showMenu();
                break;
        }
    });
}

function handleTransfer() {
    rl.question("\nReceiver Name enter karein: ", (receiverName) => {
        rl.question("Transfer Amount enter karein: ", (amountInput) => {
            let transferAmount = Number(amountInput);

            if (isNaN(transferAmount) || transferAmount <= 0) {
                console.log("❌ Invalid Amount!");
            } else if (transferAmount > walletBalance) {
                console.log("❌ Transaction Failed: Low Balance!");
            } else {
                walletBalance -= transferAmount;
                let record = `Transfer: -Rs ${transferAmount} sent to ${receiverName}`;
                transactionHistory.push(record);

                console.log("===============================");
                console.log(`✅ Rs ${transferAmount} sent to ${receiverName} successfully!`);
                console.log(`Updated Balance: Rs ${walletBalance}`);
                console.log("===============================");
            }
            showMenu();
        });
    });
}

function handleDeposit() {
    rl.question("\nDeposit Amount enter karein: ", (amountInput) => {
        let depositAmount = Number(amountInput);

        if (isNaN(depositAmount) || depositAmount <= 0) {
            console.log("❌ Invalid Amount!");
        } else {
            walletBalance += depositAmount;
            let record = `Deposit: +Rs ${depositAmount} added to wallet`;
            transactionHistory.push(record);

            console.log("===============================");
            console.log(`✅ Rs ${depositAmount} deposited successfully!`);
            console.log(`Updated Balance: Rs ${walletBalance}`);
            console.log("===============================");
        }
        showMenu();
    });
}

function handleRecharge() {
    rl.question("\nMobile Number enter karein: ", (mobileNo) => {
        console.log("Select Network:");
        console.log("1. du");
        console.log("2. Etisalat");
        
        rl.question("Network choose karein (1 or 2): ", (netChoice) => {
            let networkName = netChoice.trim() === '1' ? 'du' : 'Etisalat';

            rl.question("Recharge Amount enter karein: ", (amountInput) => {
                let rechargeAmount = Number(amountInput);

                if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
                    console.log("❌ Invalid Amount!");
                } else if (rechargeAmount > walletBalance) {
                    console.log("❌ Recharge Failed: Low Balance!");
                } else {
                    walletBalance -= rechargeAmount;
                    let record = `Recharge: -Rs ${rechargeAmount} on ${mobileNo} (${networkName})`;
                    transactionHistory.push(record);

                    console.log("===============================");
                    console.log(`✅ Rs ${rechargeAmount} mobile recharge successful for ${mobileNo} (${networkName})!`);
                    console.log(`Updated Balance: Rs ${walletBalance}`);
                    console.log("===============================");
                }
                showMenu();
            });
        });
    });
}

function showHistory() {
    console.log("\n===============================");
    console.log("      TRANSACTION HISTORY      ");
    console.log("===============================");
    if (transactionHistory.length === 0) {
        console.log("Abhi tak koi transaction nahi hui.");
    } else {
        transactionHistory.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("===============================");
    showMenu();
}

// App Entry Point
console.log("===============================");
console.log("      WELCOME TO MY WALLET     ");
console.log("===============================\n");

rl.question("Apna 4-digit PIN enter karein: ", (userPin) => {
    if (userPin !== correctPin) {
        console.log("\n❌ Incorrect PIN! Access Denied.");
        rl.close();
    } else {
        console.log("\n✅ PIN Verified Successfully!");
        showMenu();
    }
});


