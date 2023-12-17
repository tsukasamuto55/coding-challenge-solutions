class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }
    dequeue() {
        this.stack.splice(0, 1)
        console.log(this.stack)
    }
}

const s = new Stack()

s.push('food')
s.push('milk')
s.dequeue()