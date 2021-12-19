
const { Model } = require('../classes/model/model');

describe('Testing Model class', () => {
    test('change images when data === nextBtn should be true', () => {
        const data = 'nextBtn';
        const model = new Model();
        expect(model.changeImages(data)).toBeTruthly();
    });
    test('change images when data === prevBtn should be true', () => {
        const data = 'prevBtn';
        const model = new Model();
        expect(model.changeImages(data)).toBeTruthly();
    });
    test('change images when data === controllBtn should be true', () => {
        const data = 'controllBtn';
        const model = new Model();
        expect(model.changeImages(data)).toBeTruthly();
    });
});