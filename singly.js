class LinkedList {
    constructor () {
    this.first = null;
    this.last = null;
    }



    pushBack(data) {

        const newNode = new Node(data);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            return;
        }
        
        this.last.next = newNode;
        this.last = newNode;
    }



    pushFront(data) {

        const newNode = new Node(data); 
        newNode.next = this.first;
        this.first = newNode;
    }

    
    
    // find node by data
    findNode(data) {

        let curr = this.first;
        while (curr) {

            if (curr.data == data) {
                return curr;
            }
            curr = curr.next;

        }
        return null;
    }



    // insert data after this node
    insertAfter(node, data) {

        let newNode = new Node(data); 

        if (this.first == this.last) {
            this.last.next = newNode;
            this.last = newNode;
            return;
        }

        if (this.first == null) {
            this.first = newNode;
            this.last = newNode;
            return;
        } 

        newNode.next = node.next;
        node.next = newNode;
    }



    print() {
        let curr = this.first;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next
        }
    }
}



class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    } 
}



let list = new LinkedList();

list.pushBack(1);
list.pushBack(4);
list.pushBack(2);

list.insertAfter(list.findNode(4), 6);

list.print();

// const find = list.findNode(1);
// console.log(find);

