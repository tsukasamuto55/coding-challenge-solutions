// Creating Queues using Arrays. This is easy to implement, but the problem is time complexity.
// time complexity of push() is O(1), but pop() is O(n). It is better to have O(1) for the pop method as well. 
// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(value) {
//         this.queue.shift(value);
//         return this;
//     }

//     dequeue() {
//         this.queue.unshift()
//         return this;
//     }
// }



// Creating Queues using Singly Linked List. This will solve the issue with the pop method's time complexity. 

// Create a new node first
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null; // Changed from `this.tail` to `this.last`
        this.size = 0;
    }

    enqueue(value) {
        // Create a new node
        let newNode = new Node(value);

        // If there is no node yet, set the first and last nodes to the new node
        if (!this.first) {
            this.first = newNode;
            this.last = newNode; // Ensured that this codeblock uses `this.last`
        } else {
            // Otherwise, set the `next` property of the last node and update `this.last`
            this.last.next = newNode;
            this.last = newNode;
        }

        // Increment the size and return it
        return ++this.size;
    }
}

const q = new Queue()

q.enqueue('First')
q.enqueue('Second')
q.enqueue('Third')
// q.pop() // it should return ['Second', 'Third']
console.log(q)