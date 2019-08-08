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

    addFirst(value: T): void {
        const newHeadNode = new LinkedListNode<T>(value);

        if (this.headNode) {
            newHeadNode.next = this.headNode;
        } else {
            this.tailNode = newHeadNode;
            this.currentNode = newHeadNode;
        }

        this.headNode = newHeadNode;
    }

    addLast(value: T): void {
        const newTailNode = new LinkedListNode<T>(value);

        if (this.tailNode) {
            this.tailNode.next = newTailNode;
        } else {
            this.headNode = newTailNode;
            this.currentNode = newTailNode;
        }

        this.tailNode = newTailNode;
    }

    indexOf(value: T): number {
        let listElement = this.headNode,
            index = 0;

        while (listElement) {
            if (listElement.value === value) {
                return index;
            }

            listElement = listElement.next;
            index++;
        }

        return -1;
    }

    lastIndexOf(value: T): number {
        let listElement = this.headNode,
            index = 0,
            result = -1;

        while (listElement) {
            if (listElement.value === value) {
                result = index;
            }

            listElement = listElement.next;
            index++;
        }

        return result;
    }

    removeElementByIndex(index: number): boolean {
        let node = this.headNode,
            previousNode = null,
            nodeForRemove = null,
            nextNode = null;

        for (let i = 0; i <= index + 1; i++) {
            if (i === index - 1) {
                previousNode = node;
            }
            if (i === index) {
                nodeForRemove = node;
            }
            if (i === index + 1) {
                nextNode = node;
            }

            node = node ? node.next : null;
        }

        if (previousNode && nextNode) {
            previousNode.next = nextNode;
        } else if (!previousNode && nextNode) {
            this.headNode = nextNode;
        } else if (previousNode && !nextNode) {
            console.log('previousNode && !nextNode', previousNode);
            previousNode.next = null;
            this.tailNode = previousNode;
        } else if (!previousNode && !nextNode) {
            this.headNode = null;
            this.currentNode = null;
            this.tailNode = null;
        }

        nodeForRemove.next = null;
        return true;
    }
}
