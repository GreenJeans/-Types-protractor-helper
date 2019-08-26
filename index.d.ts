declare global {

    namespace protractor {
        interface ElementArrayFinder {
        }

        interface ElementFinder {
        }
    }
}

export function clickWhenClickable(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function click(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function tapWhenTappable(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function tap(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function fillFieldWithTextWhenVisible(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number): void;

export function fillFieldWithText(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number): void;

export function fillInputFieldWithFileWhenPresent(htmlElement: protractor.ElementFinder, absolutePath: string, timoutInMilliseconds?: number): void;

export function uploadFileIntoInputField(htmlElement: protractor.ElementFinder, absolutePath: string, timoutInMilliseconds?: number): void;

export function clearFieldWhenVisible(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function clear(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function clearFieldWhenVisibleAndFillItWithText(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number): void;

export function clearFieldAndFillItWithText(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number): void;

export function fillFieldWithTextWhenVisibleAndPressEnter(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number): void;

export function fillFieldWithTextAndPressEnter(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number): void;

// export function getBodyElementFromCurrentBrowserOrBrowserInstance(browserInstance) : protractor.ElementFinder;

// export function openNewBrowserInTheSamePage(browser) : ;

export function isCurrentUrlDifferentFromBaseUrl(): boolean;

export function scrollToElementWhenVisible(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function scrollToElement(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number): void;

export function setTimeout(timeoutInMilliseconds: number): void;

export function waitForElementPresence(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForElementNotToBePresent(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForElementVisibility(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForElementNotToBeVisible(htmlElement: protractor.ElementFinder, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForTextToBePresentInElement(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForTextNotToBePresentInElement(htmlElement: protractor.ElementFinder, text: string, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForUrlToBeEqualToExpectedUrl(expectedUrl: string, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForUrlNotToBeEqualToExpectedUrl(expectedUrl: string, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForUrlToContainString(string: string, timoutInMilliseconds?: number, errorMessage?: string): void;

export function waitForUrlNotToContainString(string: string, timoutInMilliseconds?: number, errorMessage?: string): void;
