// Perfect Scrollbar

import PerfectScrollbar from 'perfect-scrollbar';

$(document).ready(() => {

    setTimeout(function () {

        if ($(".scrollbar-container,.scrollbar-sidebar")[0]) {

            $('.scrollbar-container,.scrollbar-sidebar').each(function () {
                const ps = new PerfectScrollbar($(this)[0], {
                    wheelSpeed: 2,
                    wheelPropagation: false,
                    minScrollbarLength: 20
                });
            });

        }

    }, 1000);
});
