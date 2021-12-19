const { Model } = require('../classes/model/model');
const { Controller } = require('../classes/controller/controller');

describe('Testing controller classes', () => {
    test('testing getButtonsActions', () => {
        const controller = new Controller();
        expect(controller.getButtonsActions()).toBeDefined();
        expect(controller.getButtonsActions()).not.toBe(null);
        expect(controller.getButtonsActions()).not.toBe(undefined);
    });
});


