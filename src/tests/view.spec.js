const { exportAllDeclaration } = require('@babel/types');
const { View } = require('../classes/view/view');

describe('testing View classes', () => {
    test('getNextImage should be true', () => {
        const view = new View();
        expect(view.getNextImage()).toBeTruthly();
    });
    test('getPreviousImage should be true', () => {
        const view = new View();
        expect(view.getPreviousImage()).toBeTruthly();
    });
    test('playShowImage should be true', () => {
        const view = new View();
        expect(view.playShowImage()).toBeTruthly();
    });
    test('showImageByInterval should be true', () => {
        const view = new View();
        expect(view.showImageByInterval()).toBeTruthly();
    });
    test('pauseShowImage should be true', () => {
        const view = new View();
        expect(view.pauseShowImage()).toBeTruthly();
    });
});