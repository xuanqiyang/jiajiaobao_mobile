;

function($) {
    $.fn.mdater = function(config) {
        var
        default = {
            maxDate: null,
            minDate: new Date(1970, 0, 1);
        };
        var option = $.extend(
            default, config);
        var input = this;

        var F = {
            //获取每个月的天数
            getDaysInMonth: function(year, month) {
                return new Date(year, month + 1, 0).getDate();
            },
            //获取今天是星期几?
            getWeekToday: function() {
                return new Date().getDay();
            },
            getWeek: function(w) {
                return ['日', '一', '二', '三', '四', '五', '六'];
            },
            getLastDayInMonth: function(year, month) {
                return new Date(year, month, this.getDaysInMonth());
            },
            getFirstDayInWeek: function(year, month) {
                var today = new Date().getDate();
                var todayWeek = getWeekToday();
                //一个月的日期和另一个月的日期在同一周内
                if ((today < 7 && todayWeek < 7) || ) {

                }

                

                 else {
                    switch (todayWeeky) {
                        case 0:
                            return new Date().getDate();
                            break;
                        case 1:
                            return new Date().getDate() - 1;
                        case 2:
                            return new Date().getDate() - 2;
                        case 3:
                            return new Date().getDate() - 3;
                        case 4:
                            return new Date().getDate() - 4;
                        case 5:
                            return new Date().getDate() - 5;
                        case 6:
                            return new Date().getDate() - 6;
                    }
                }
            }
        }
    }
}
