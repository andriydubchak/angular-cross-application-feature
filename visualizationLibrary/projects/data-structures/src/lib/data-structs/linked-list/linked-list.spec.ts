import { LinkedList } from './linked-list';


describe('LinkedList', () => {
    let linkedList: LinkedList<any>;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('getCurrenValue', () => {
        linkedList.addFirst(1);

        expect(linkedList.getCurrentValue()).toBe(1);
    });

    it('moveCurrentNodeToHead + addFirst', () => {
        linkedList.addFirst(1);
        linkedList.addFirst(2);
        linkedList.addFirst(3);
        linkedList.addFirst(4);

        expect(linkedList.moveCurrentNodeToHead()).toBe(4);
    });

    it('moveCurrentNodeToHead + addLast', () => {
        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);
        linkedList.addLast(4);

        expect(linkedList.moveCurrentNodeToTail()).toBe(4);
    });

    it('moveCurrentNodeToTail + addFirst', () => {
        linkedList.addFirst(1);
        linkedList.addFirst(2);
        linkedList.addFirst(3);
        linkedList.addFirst(4);

        expect(linkedList.moveCurrentNodeToTail()).toBe(1);
    });

    it('moveCurrentNodeToTail + addLast', () => {
        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);
        linkedList.addLast(4);

        expect(linkedList.moveCurrentNodeToTail()).toBe(4);
    });

});
