class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) this.tail = null
        return currentHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let temp = this.head
        let counter = 0;
        while (counter !== index) {
            temp = temp.next
            counter++
        } return temp
    }

    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        else if (index === this.length) !!this.push(val)
        else if (index === 0) !!this.unshift(val)
        else {
            let prev = this.get(index - 1)
            let after = prev.next
            let newNode = new Node(val)

            prev.next = newNode
            newNode.next = after
            this.length++
            return true
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        let prevNode = this.get(index - 1)
        let removed = prevNode.next
        prevNode.next = removed.next
        this.length--
        return removed
    }

    // reverse() {
    //     let node = this.head;
    //     this.head = this.tail;
    //     this.tail = node;
    //     let next;
    //     let prev = null;
    //     for (let i = 0; i < this.length; i++) {
    //         // references old list
    //         next = node.next;
    //         // updating new list using variable pass by reference of old list 
    //         // same as this.head.next x i (counter)
    //         node.next = prev;
    //         // update variables for next run
    //         prev = node;
    //         node = next;
    //     }
    //     return this;
    // }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}


const list = new SinglyLinkedList()
// list.push(("Hello"))
// list.push(("World"))
// list.push(("!!!"))
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
list.unshift(10)
list.unshift(12)
list.unshift(15)
list.unshift(18)
list.unshift(20)

list.print()
list.reverse()
console.log(list.get(2))

