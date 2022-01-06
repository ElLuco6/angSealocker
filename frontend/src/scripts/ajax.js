export function setup_ajax(partnerId) {

    $.ajaxSetup({

        url: "https://sea-locker-backend-dev.herokuapp.com/api/v1/" + partnerId,
        dataType: 'json', // added data type
    });

}
