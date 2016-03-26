describe('App/basic E2E Tests', function() {
    var baseUrl = 'http://localhost:1338';

    it('should have a title', function() {
        browser.get(baseUrl);
        expect(browser.getTitle()).toEqual('AngularJS Features');
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
});