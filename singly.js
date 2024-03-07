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
list.pushFront(1);
list.pushFront(2);
list.pushFront(3);

list.print();