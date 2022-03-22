/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
export default async (selector, falseCase) => {
    /**
     * Elements found in the DOM
     * @type {Object}
     */
    const elements = await $$(selector);

    if (falseCase) {
        await expect(elements).toHaveLength(
            0,
            `Expected element "${selector}" not to exist`
        );
    } else {
        await expect(elements.length).toBeGreaterThan(
            0,
            `Expected element "${selector}" to exist`
        );
    }
};
