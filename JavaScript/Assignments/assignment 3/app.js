function addbalance(){
    var Credit = Number(document.getElementById('credit').value);
    var Wallet = Number(document.getElementById('wallet').value);
    Wallet = Wallet + Credit;
    Number(document.getElementById('wallet').value=Wallet);
    Number(document.getElementById('credit').value ="");
    Number(document.getElementById('creditvalue').value = Credit);
    Number(document.getElementById('walletvalue').value=Wallet);

}
function debitbalance(){
    var Debit = Number(document.getElementById('debit').value);
    var Wallet = Number(document.getElementById('wallet').value);
    Wallet = Wallet - Debit;
    Number(document.getElementById('wallet').value=Wallet);
    Number(document.getElementById('debit').value ="");
    Number(document.getElementById('debitvalue').value = Debit);
    Number(document.getElementById('walletvalue').value=Wallet);

}