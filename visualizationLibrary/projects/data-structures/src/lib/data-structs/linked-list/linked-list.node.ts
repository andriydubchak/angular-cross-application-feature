export class LinkedListNode<T> {
    value: any;
    next: LinkedListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}