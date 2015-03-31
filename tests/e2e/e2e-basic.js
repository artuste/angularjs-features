describe('App/basic E2E Tests', function() {
    var baseUrl = 'http://localhost:1338';

    it('should have a title', function() {
        browser.get(baseUrl);
        expect(browser.getTitle()).toEqual('Bajsapp');
    });

    describe('home', function() {
        beforeEach(function() {
            browser.get('index.html#/home');
        });

        it('should render home when user navigates to /home', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/home");
        });
    });

    describe('forms', function() {
        beforeEach(function() {
            browser.get('index.html#/forms');
        });

        it('should render forms when user navigates to /forms', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/forms");
        });
    });

    describe('utils', function() {
        beforeEach(function() {
            browser.get('index.html#/utils');
        });

        it('should render forms when user navigates to /utils', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/utils");
        });
    });

    describe('widgets', function() {
        beforeEach(function() {
            browser.get('index.html#/widgets');
        });

        it('should render forms when user navigates to /widgets', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/widgets");
        });
    });

    describe('interpolation', function() {
        beforeEach(function() {
            browser.get('index.html#/interpolation');
        });

        it('should render forms when user navigates to /interpolation', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/interpolation");
        });
    });

    describe('patterns', function() {
        beforeEach(function() {
            browser.get('index.html#/patterns');
        });

        it('should render forms when user navigates to /patterns', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/patterns");
        });
    });

    describe('promises', function() {
        beforeEach(function() {
            browser.get('index.html#/promises');
        });

        it('should render forms when user navigates to /promises', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/promises");
        });
    });
});