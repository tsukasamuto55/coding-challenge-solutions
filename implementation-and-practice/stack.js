// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     push(item) {
//         this.stack.push(item)
//     }
//     dequeue() {
//         this.stack.splice(0, 1)
//         console.log(this.stack)
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // the name of method is push, but what it does is to add a new node to the beginning of the list, just like unshift(value)
    push(value) {
        let newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode
            this.first.next = current
        }
        return ++this.size;
    }
    // the name of the method is pop, but what it does is to remove a node from the beginning of the list, same as shift()
    pop() {
        if (!this.first) return null;
        let current = this.first

        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return current.value;
    }
}

const stack = new Stack()

stack.push('milk')
stack.push('tofu')
console.log(stack)

console.log(stack.pop())
stack.pop()
stack.pop()


console.log(stack)