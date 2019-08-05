import { LinkedList } from "./linked-list";


describe('LinkedList', () => {
    let linkedList: any;

    beforeEach(() => {
        linkedList = new LinkedList(1);
    });

    it('getCurrenValue', () => {
        const currentValue = linkedList.getCurrentValue();
        expect(currentValue).toBe(1);
    });

    it('addToBegining', () => {
        linkedList.addToBegining(2);
        expect(linkedList.getCurrentValue()).toBe(2);
    });
    
});