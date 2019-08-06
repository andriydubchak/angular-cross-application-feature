import { LinkedListNode } from './linked-list.node';

export class LinkedList<T> {

    protected headNode: LinkedListNode<T>;
    protected currentNode: LinkedListNode<T>;
    protected tailNode: LinkedListNode<T>;

    constructor(firstValue?: T) {
        if (firstValue) {
            this.currentNode = new LinkedListNode<T>(firstValue);
            this.headNode = this.currentNode;
            this.tailNode = this.currentNode;
        }
    }

    getCurrentValue(): T {
        return this.currentNode.value;
    }

    moveCurrentNodeToHead(): T {
        this.currentNode = this.headNode;

        return this.currentNode.value;
    }

    moveCurrentNodeToTail(): T {
        this.currentNode = this.tailNode;

        return this.currentNode.value;
    }

    next(): T {
        if (this.currentNode.hasNext()) {
            this.currentNode = this.currentNode.next;
            return this.currentNode.value;
        }

        return null;
    }

    addFirst(value: T) {
        const newHeadNode = new LinkedListNode<T>(value);

        if (this.headNode) {
            newHeadNode.next = this.headNode;
        } else {
            this.tailNode = newHeadNode;
            this.currentNode = newHeadNode;
        }

        this.headNode = newHeadNode;
    }

    addLast(value: T) {
        const newTailNode = new LinkedListNode<T>(value);

        if (this.tailNode) {
            this.tailNode.next = newTailNode;
        } else {
            this.headNode = newTailNode;
            this.currentNode = newTailNode;
        }

        this.tailNode = newTailNode;
    }
}
