import $ from "jquery";


$.when( $.ready ).then(function() {
    const body = $( "body" );
    $("body").append("<p>Holberton Dashboard</p>");
    body.append(`<p>Dashboard data for the students</p>`);
    body.append(`<p>Copyright - Holberton School</p>`);
  });