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
list.pushBack(2);
list.pushBack(3);

list.print();