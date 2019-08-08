import { LinkedList } from './linked-list';


describe('LinkedList', () => {
    let linkedList: LinkedList<any>;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    function fillArrayWithElements(array: Array<any>, addLast?: boolean) {
        if (addLast) {
            array.forEach((item) => {
                linkedList.addLast(item);
            });
        } else {
            array.forEach((item) => {
                linkedList.addFirst(item);
            });
        }
    }

    it('getCurrentValue', () => {
        fillArrayWithElements([1]);

        expect(linkedList.getCurrentValue()).toBe(1);
    });

    it('next + addFirst', () => {
        fillArrayWithElements([1, 2, 3, 4]);


        expect(linkedList.next()).toBe(null);
        expect(linkedList.next()).toBe(null);
    });

    it('next + addLast', () => {
        fillArrayWithElements([1, 2, 3, 4]);

        expect(linkedList.next()).toBe(null);
        expect(linkedList.next()).toBe(null);
    });

    it('moveCurrentNodeToHead + addFirst', () => {
        fillArrayWithElements([1, 2, 3, 4]);

        linkedList.moveCurrentNodeToHead();

        expect(linkedList.getCurrentValue()).toBe(4);
    });

    it('moveCurrentNodeToHead + addLast', () => {
        fillArrayWithElements([1, 2, 3, 4], true);

        expect(linkedList.moveCurrentNodeToTail()).toBe(4);
    });

    it('moveCurrentNodeToTail + addFirst', () => {
        fillArrayWithElements([1, 2, 3, 4]);

        expect(linkedList.moveCurrentNodeToTail()).toBe(1);
    });

    it('moveCurrentNodeToTail + addLast', () => {
        fillArrayWithElements([1, 2, 3, 4], true);

        expect(linkedList.moveCurrentNodeToTail()).toBe(4);
    });

    it('indexOf', () => {
        fillArrayWithElements([1, 2, 3, 4, 1, 2, 3, 4], true);

        expect(linkedList.indexOf(1)).toBe(0);
        expect(linkedList.indexOf(2)).toBe(1);
        expect(linkedList.indexOf(3)).toBe(2);
        expect(linkedList.indexOf(4)).toBe(3);
        expect(linkedList.indexOf(5)).toBe(-1);
    });

    it('lastIndexOf', () => {
        fillArrayWithElements([1, 2, 3, 4, 1, 2, 3, 4], true);

        expect(linkedList.lastIndexOf(1)).toBe(4);
        expect(linkedList.lastIndexOf(2)).toBe(5);
        expect(linkedList.lastIndexOf(3)).toBe(6);
        expect(linkedList.lastIndexOf(4)).toBe(7);
        expect(linkedList.lastIndexOf(5)).toBe(-1);
    });

    it('removeElementByIndex: normal case, element from middle', () => {
        fillArrayWithElements([1, 2, 3, 4, 1, 2, 3, 4], true);

        expect(linkedList.lastIndexOf(1)).toBe(4);
        expect(linkedList.lastIndexOf(2)).toBe(5);
        expect(linkedList.lastIndexOf(3)).toBe(6);
        expect(linkedList.lastIndexOf(4)).toBe(7);
        expect(linkedList.lastIndexOf(5)).toBe(-1);
    });

    it('removeElementByIndex: element from middle', () => {
        fillArrayWithElements([1, 2, 3, 4], true);

        expect(linkedList.removeElementByIndex(2)).toBe(true);

        linkedList.moveCurrentNodeToHead();

        expect(linkedList.getCurrentValue()).toBe(1);
        expect(linkedList.next()).toBe(2);
        expect(linkedList.next()).toBe(4);
    });

    it('removeElementByIndex: element from beginning', () => {
        fillArrayWithElements([1, 2, 3, 4], true);

        expect(linkedList.removeElementByIndex(0)).toBe(true);

        linkedList.moveCurrentNodeToHead();

        expect(linkedList.getCurrentValue()).toBe(2);
        expect(linkedList.next()).toBe(3);
        expect(linkedList.next()).toBe(4);
    });

    it('removeElementByIndex: element from ending', () => {
        fillArrayWithElements([1, 2, 3, 4], true);

        expect(linkedList.removeElementByIndex(3)).toBe(true);

        linkedList.moveCurrentNodeToHead();

        expect(linkedList.getCurrentValue()).toBe(1);
        expect(linkedList.next()).toBe(2);
        expect(linkedList.next()).toBe(3);
        expect(linkedList.next()).toBe(null);
    });
});
