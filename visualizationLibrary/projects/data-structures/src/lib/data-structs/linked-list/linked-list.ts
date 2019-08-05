import { LinkedListNode } from "./linked-list.node";

export class LinkedList<T> {

    protected headNode: LinkedListNode<T>;
    protected currentNode: LinkedListNode<T>;

    constructor(firstValue: T) {
        this.currentNode = new LinkedListNode<T>(firstValue);
        this.headNode = this.currentNode;
    }

    getCurrentValue(): T {
        return this.currentNode.value;
    }

    next(): T {
        const value = this.currentNode.value;
        this.currentNode = this.currentNode.next;

        return value;
    }

    addToBegining(value: T) {
        const previousHeadNode = this.headNode;
        const newHeadNode = new LinkedListNode<T>(value);
        
        previousHeadNode.next = newHeadNode;
        this.headNode = newHeadNode;

        this.currentNode = this.headNode;
    }
}