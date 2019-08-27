const fs = require("fs");
//Creating Block
class Block{
	constructor(index, data, prevHash){
		this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
		this.data = data;
		this.prevHash = prevHash;
    }
    //getting hash for the transaction
    getHash(){
        constructor(index, data, prevHash)
            this.index = index;
            this.timestamp = Math.floor(Date.now() / 1000);
            this.data = data;
            this.prevHash = prevHash;
            this.hash = this.getHash();
        //return hash using sha256 
        return sha(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}
class BlockChain{
	constructor(){
		this.chain = [];
    }
    //add data to block data
    addBlock(data){
        let index = this.chain.length;
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
        let block = new Block(index, data, prevHash);
    
        this.chain.push(block);
    }
    //check for validation
    chainIsValid(){

        for(var i=0;i<this.chain.length;i++){
    
            if(this.chain[i].hash !== this.chain[i].getHash()) 
                return false;
    
            if(i > 0 && this.chain[i].prevHash !== this.chain[i-1].hash)
                return false;
        }
    
        return true;
    }
}
const transaction = new BlockChain();

transaction.addBlock({sender: "Bruce wayne", reciver: "Tony stark", amount: 100});
transaction.addBlock({sender: "Harrison wells", reciver: "Han solo", amount: 50});
transaction.addBlock({sender: "Tony stark", reciver: "Ned stark", amount: 75});

let logging = (JSON.stringify(transaction, null, 4));
fs.writeFile('block-log.txt', logging, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('transactions saved');
});