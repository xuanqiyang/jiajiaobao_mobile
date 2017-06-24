;(function($){
    $.fn.mdater = function(config){
        var default = {
            maxDate: null,
            minDate: new Date(1970,0,1)
        };
        var option = $.extend(default ,config);
        var input = this;

        var F= {
            getDaysInMonth : function(year, month){
                return new Date(year, month+1, 0).getDate();
            },
            getWeekInMonth: function(year, month){
                return new Date(year, month, 1).getDay();
            },
            getMonth: function(m){
                return return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][m];
            },
            getLastDayInMonth:function(year, month){
                return new Date(year, month, this.getDaysInMonth(year, month));
            },
            getLastDayInWeak:function(year, month){

            }

        }
        var mdater = {
            value: {
                year: '',
                month: '',
                date: ''
            },
            lastCheckedDate: '',
            init:function(){
                this.initer
            }
        }
    }
})(jQuery);