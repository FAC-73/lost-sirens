// load document
$(document).ready(function () {

  // hide non-required elements
    $("#line_one").removeClass("hidden");
    $("#line_two").removeClass("hidden");
    $("#line_three").removeClass("hidden");
    $("#line_four").removeClass("hidden");
    $("#line_five").removeClass("hidden");
  });


  $(window).on('scroll', function() {
    var y = $(this).scrollTop();
        if (y > 10) {
          $("#projects-title").removeClass("hidden");
          $("#project-row1").removeClass("hidden");
          $("#project-row2").removeClass("hidden");
          $("#project-row3").removeClass("hidden");
          $("#project-row4").removeClass("hidden");
          $("#project-row5").removeClass("hidden");
          $("#project-row6").removeClass("hidden");
        }
});



function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.github.com/users/FAC-73';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

        $("#name").text(data.name);
        $("#location").text(data.location);
        $("#bio").text(data.bio);

        var img = $("<img>").addClass("avatar").attr("src", "" + data.avatar_url + ".png");
        $("#avatar").append(img);

        var profileLink = document.createElement('a');

        // Setting the text of link and the href of the link
        profileLink.textContent = data.html_url;
        profileLink.href = data.html_url;

        $("#profile-link").append(profileLink);


        var emailLink = document.createElement('a');
        emailLink.textContent = "kaydavis21@googlemail.com";
        emailLink.href = "mailto:kaydavis21@googlemail.com";
        $("#profile-email").append(emailLink);

    });
}
getApi();


function showProfile() {
  $("#profile-section").removeClass("hidden");
  $("#line_one").text("Get in touch");
  $("#line_two").addClass("hidden");
  $("#line_three").addClass("hidden");
  $("#line_four").addClass("hidden");
  $("#line_five").addClass("hidden");
  $("#projects-title").addClass("hidden");
  $("#project-row1").addClass("hidden");
  $("#project-row2").addClass("hidden");
  $("#project-row3").addClass("hidden");
  $("#project-row4").addClass("hidden");
  $("#project-row5").addClass("hidden");
  $("#project-row6").addClass("hidden");
  $("#contact-link").addClass(":active");
  window.scrollTo(0, 0);
}

function showWork() {
  $("#profile-section").addClass("hidden");
  $("#line_one").text("front end developer +");
  $("#line_two").removeClass("hidden");
  $("#line_three").removeClass("hidden");
  $("#line_four").removeClass("hidden");
  $("#line_five").removeClass("hidden");
  $("#projects-title").removeClass("hidden");
  $("#project-row1").removeClass("hidden");
  $("#project-row2").removeClass("hidden");
  $("#project-row3").removeClass("hidden");
  $("#project-row4").removeClass("hidden");
  $("#project-row5").removeClass("hidden");
  $("#project-row6").removeClass("hidden");
  $("#contact-link").addClass(":active");
  window.scrollTo(0, 0);
}






$("#contact-link").on('click', function () {
 showProfile();
});


$("#work-link").on('click', function () {
  showWork();
 });
 