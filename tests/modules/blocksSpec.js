describe('Blocks/logger', function () {

    var logger,
        toastr,
        $log;

    beforeEach(module('app.core'));
    beforeEach(inject(function (_$log_, _logger_) {
        $log = _$log_;
        logger = _logger_;

        // TODO: Why isn't 100% coverage ?

        toastr = {
            error: function (message, data, title) {
                return true;
            },
            info: function (message, data, title) {
                return true;
            },
            success: function (message, data, title) {
                return true;
            },
            warning: function (message, data, title) {
                return true;
            }
        }
    }));


    it('should test error', function () {
        spyOn(logger, 'error').and.callFake(function (message, data, title) {
            toastr.error(message, data, title);
        });
        logger.error('This is message', '', 'error');

        expect(logger.error).toHaveBeenCalled();
    });

    it('should test info', function () {
        spyOn(logger, 'info').and.callFake(function (message, data, title) {
            toastr.info(message, data, title);
        });
        logger.info('This is message', '', 'info');

        expect(logger.info).toHaveBeenCalled();
    });

    it('should test success', function () {
        spyOn(logger, 'success').and.callFake(function (message, data, title) {
            toastr.success(message, data, title);
        });
        logger.success('This is message', '', 'success');

        expect(logger.success).toHaveBeenCalled();
    });

    it('should test warning', function () {
        spyOn(logger, 'warning').and.callFake(function (message, data, title) {
            toastr.warning(message, data, title);
        });
        logger.warning('This is message', '', 'warning');

        expect(logger.warning).toHaveBeenCalled();
    });
});

