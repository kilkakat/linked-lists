function append (element) {
    const node = {
        element,
        next: null,
};

let head;
if (head === null) {
    head = node;
} else {
    let current = head;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = node;
}

    length++;
}

const linkedList = append();
linkedList.append(1);
linkedList.append(10);
linkedList.append(-1);
linkedList.append(40);
linkedList.append(-123);