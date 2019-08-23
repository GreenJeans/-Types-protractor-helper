// Type definitions for protractor-helpers v1.0.0
// Project: https://github.com/wix/protractor-helpers
// Definitions by: John Cant <https://github.com/johncant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
export {}
declare global {
    // ElementArrayFinder

    namespace protractor {
        interface ElementArrayFinder {
        }

        interface ElementFinder {
        }
    }

    // Matchers
    // TODO - Use `T` to improve types

    // Note: This augments a namespace from '@types/jasmine'.
    // Intentionally not referencing those types from this file as they introduce many globals,
    // and users may use protractor-helpers but not jasmine, and have different definitions of those globals (e.g. through `jest`)
    namespace jasmine {
        interface Matchers<T> {
            toBePresent(): boolean;

            toBeDisplayed(): boolean;

            toHaveCountOf(expectedCount: number): boolean;

            toHaveText(expectedText: string): boolean;

            toMatchRegex(regex: RegExp): boolean;

            toMatchMoney(expectedValue: number, currencySymbol?: string): boolean;

            toMatchMoneyWithFraction(expectedValue: number, currencySymbol?: string): boolean;

            toHaveValue(actual: string | number): boolean;

            toHaveClass(className: string): boolean;

            toHaveUrl(url: string): boolean;

            toBeDisabled(): boolean;

            toBeChecked(): boolean;

            toBeValid(): boolean;

            toBeInvalid(): boolean;

            toBeInvalidRequired(): boolean;

            toBeKendoSelected(): boolean;
        }
    }

    export function clickWhenClickable(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function click(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function tapWhenTappable(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function tap(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function fillFieldWithTextWhenVisible(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number): void;

    export function fillFieldWithText(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number): void;

    export function fillInputFieldWithFileWhenPresent(htmlElement: protractor.ElementFinder, absolutePath: string, timoutInMilliseconds: number): void;

    export function uploadFileIntoInputField(htmlElement: protractor.ElementFinder, absolutePath: string, timoutInMilliseconds: number): void;

    export function clearFieldWhenVisible(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function clear(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function clearFieldWhenVisibleAndFillItWithText(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number): void;

    export function clearFieldAndFillItWithText(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number): void;

    export function fillFieldWithTextWhenVisibleAndPressEnter(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number): void;

    export function fillFieldWithTextAndPressEnter(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number): void;

    // export function getBodyElementFromCurrentBrowserOrBrowserInstance(browserInstance) : protractor.ElementFinder;

    // export function openNewBrowserInTheSamePage(browser) : ;

    export function isCurrentUrlDifferentFromBaseUrl(): boolean;

    export function scrollToElementWhenVisible(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function scrollToElement(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number): void;

    export function setTimeout(timeoutInMilliseconds: number): void;

    export function waitForElementPresence(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForElementNotToBePresent(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForElementVisibility(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForElementNotToBeVisible(htmlElement: protractor.ElementFinder, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForTextToBePresentInElement(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForTextNotToBePresentInElement(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForUrlToBeEqualToExpectedUrl(expectedUrl: string, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForUrlNotToBeEqualToExpectedUrl(expectedUrl: string, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForUrlToContainString(string: string, timoutInMilliseconds: number, errorMessage: string): void;

    export function waitForUrlNotToContainString(string: string, timoutInMilliseconds: number, errorMessage: string): void;
}