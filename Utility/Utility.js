const list = require('./LinkedList');
const fs = require('fs');
const userInput = require('readline-sync');

class Utility {

    readFile(){
        // Reading file from Assets directory.
        var read = fs.readFileSync('../Assets/read.txt', 'utf-8', 'r');
        console.log("File contents are: "+read);

        //splitting contents from text file
        let cont = read.split(' ');
        console.log("Contents after split are: "+cont);

        //Adding elements to list
        this.addElements(cont);

        do{
            console.log("-------------------------------------------------------------");
            console.log("0=> Add data in a file");
            console.log("1=> Delete data from file");
            console.log("2=> Print List data");
            console.log("3=> Print Size of List");
            console.log("4=> Exit...");
            var input = userInput.questionInt("Enter your choice: ");
            switch(input){
                case 0:
                    let addWord = userInput.question("Enter your word to add in a file: ");
                    list.add(addWord);
                    console.log("added successfully...");
                break;
                case 1:
                    let rem_data = userInput.question("Enter word you want to remove: ");
                    list.removeElement(rem_data);
                    console.log("After removing world list is: "+list.printList());
                break;
                case 2:
                    console.log("Data in the list is: "+list.printList());
                break;
                case 3:
                    console.log("Size of the List is: "+list.size_of_list());
                break;
                case 4:
                    console.log("Writing data in write file and exiting....");
                break;
                default:
                    console.log("Enter a valid choice!!!");
                break;
            }

        }while(input !== 4);
        let data = list.printList();
        try{
            fs.writeFileSync('../Assets/write.txt', data, {flag:'w'})
            console.log("File written successfully");
        }
        catch(err){
            console.error(err);
        }
        
    }
    //Adding elements to list
    addElements(cont){
        cont.map((element) => list.add(element));
        //printing elements of the list
        console.log("Elements of the list are: "+list.printList());
    }
}

module.exports = new Utility();