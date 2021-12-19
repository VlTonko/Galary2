
const { domElements } = require('../config/domElements');

describe('Testing addEventListeners', () => {
    test('test domElements.buttonIdNextBtn should be click', () => {
        const mockCall = jest.fn();
        const element = domElements.buttonIdNextBtn;
        element.click(mockCall);
        expect(element).not.toBeFalsy();
        expect(element).toBeDefined();
    });
    test('test domElements.buttonIdPrevBtn should be click', () => {
        const mockCall = jest.fn();
        const element = domElements.buttonIdPrevBtn;
        element.click(mockCall);
        expect(element).not.toBeFalsy();
        expect(element).toBeDefined();
    });
    test('test domElements.buttonIdControllBtn should be click', () => {
        const mockCall = jest.fn();
        const element = domElements.buttonIdControllBtn;
        element.click(mockCall);
        expect(element).not.toBeFalsy();
        expect(element).toBeDefined();
    });
});