class LinkedList {
    constructor(headNode = null) {
        this.headNode = headNode
    }

    append(value) {
        let newNode = new Node(value)
        if(this.headNode === null) this.headNode = newNode
        else {
            let tailNode = this.headNode
            while(tailNode.next !== null) {
                tailNode = tailNode.next
            }
            tailNode.next = newNode
        }
    }

    prepend(value) {
        let newNode = new Node(value)
        if(this.headNode === null) return this.head = newNode
        newNode.next = this.headNode
        this.headNode = newNode
    }

    size() {
        let list = this.headNode
        let counter = 0
        while(list !== null) {
            counter++
            list = this.next
        }
        return counter
    }

    head() {
        return this.headNode
    }

    tail() {
        let node = this.headNode
        while(node.next !== null) {
            node = node.next
        }
        return node
    }

    at(index) {
        let node = this.headNode
        for(let i = 0; i < index; i++) {
            node = node.next
        }
        return node
    }

    pop() {
        let prevNode = null
        let node = this.headNode
        while(node.next !== null) {
            prevNode = node
            node = prevNode.next
        }
        prevNode.next = null

    }
    
    contains(value) {
        let node = this.headNode
        while(node.next !== null) {
            if(node.value === value) return node
            node = node.next
        }
        return false
    }

    find(value) {
        let node = this.headNode
        let i = 0
        while(node !== null) {
            if(node.value === value) return i
            node = node.next
            i++
        }
        return null
    }

    toString() {
        let node = this.headNode
        let list = ""
        while(node.next !== null) {
            list += `(${node.value}) ->`
            node = node.next
        }
        return (list += '-> null')
    }

    insertAt(value, index) {
        let prevNode = null
        let node = this.headNode
        let newNode = new Node(value)
        for(let i = 0; i < index; i++) {
            prevNode = node
            node = node.next
            if(node === null) break
        }
        prevNode.next = newNode
        newNode.next = node
    }

    removeAt(index) {
        let prevNode = null
        let node = this.headNode
        for(let i = 0; i < index; i++) {
            prevNode = node
            node = node.next
        }
        prevNode.next = node.next
    }

}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let list = new LinkedList()
list.append(4)
list.append(5)
list.prepend(3)
list.insertAt(2,3)
console.log(list.headNode)