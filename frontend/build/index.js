$(document).ready(function () {

    $('#vendorTable').DataTable();
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});