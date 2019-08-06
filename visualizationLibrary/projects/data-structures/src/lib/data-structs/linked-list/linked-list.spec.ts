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

    it('next + addFirst', () => {
        linkedList.addFirst(1);
        linkedList.addFirst(2);
        linkedList.addFirst(3);
        linkedList.addFirst(4);

        expect(linkedList.next()).toBe(null);
        expect(linkedList.next()).toBe(null);
    });

    it('next + addLast', () => {
        linkedList.addFirst(1);
        linkedList.addFirst(2);
        linkedList.addFirst(3);
        linkedList.addFirst(4);

        expect(linkedList.next()).toBe(null);
        expect(linkedList.next()).toBe(null);
    });

    it('moveCurrentNodeToHead + addFirst', () => {
        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);
        linkedList.addLast(4);

        expect(linkedList.next()).toBe(2);
        expect(linkedList.next()).toBe(3);
        expect(linkedList.next()).toBe(4);
        expect(linkedList.next()).toBe(null);
        expect(linkedList.next()).toBe(null);
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

    it('indexOf', () => {
        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);
        linkedList.addLast(4);
        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);
        linkedList.addLast(4);

        expect(linkedList.indexOf(1)).toBe(0);
        expect(linkedList.indexOf(2)).toBe(1);
        expect(linkedList.indexOf(3)).toBe(2);
        expect(linkedList.indexOf(4)).toBe(3);
        expect(linkedList.indexOf(5)).toBe(-1);
    });

});
