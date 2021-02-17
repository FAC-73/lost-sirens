// load document
$(document).ready(function () {

  // hide non-required elements
    $("#line_one").removeClass("hidden");
    $("#work-link").css({ "color": "#ffffff", "font-weight": "500"});
    $("#projects-title").removeClass("hidden");
    $("#project-row1").removeClass("hidden");
    $("#project-row2").removeClass("hidden");
    $("#project-row3").removeClass("hidden");
    $("#project-row4").removeClass("hidden");
    $("#project-row5").removeClass("hidden");
    $("#project-row6").removeClass("hidden");
  });


// Function to fetch data from Github API
function getApi() {

  // Variable with Github username appended to the end of API call
  var requestUrl = 'https://api.github.com/users/FAC-73';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

        // Pulls information from github profile using API
        $("#name").text(data.name);
        $("#location").text(data.location);
        $("#bio").text(data.bio);
        $("#line_one").text(data.bio);

        // Create an avatar using api for avatar URL
        var img = $("<img>").addClass("avatar").attr("src", "" + data.avatar_url + ".png");
        $("#avatar").append(img);

        // Setting the text of link and the href of the link
        var profileLink = document.createElement('a');
        profileLink.textContent = data.html_url;
        profileLink.href = data.html_url;
        $("#profile-link").append(profileLink);

        // create email link
        var emailLink = document.createElement('a');
        emailLink.textContent = "kaydavis21@googlemail.com";
        emailLink.href = "mailto:kaydavis21@googlemail.com";
        $("#profile-email").append(emailLink);

    });
}
getApi();


function showResume(){
  $("#resume-section").removeClass("hidden");
  $("#line_one").text("Resume");
  $("#profile-section").addClass("hidden");
  $("#projects-title").hide();
  $("#project-row1").hide();
  $("#project-row2").hide();
  $("#project-row3").hide();
  $("#project-row4").hide();
  $("#project-row5").hide();
  $("#project-row6").hide();
  $("#resume-link").css({ "color": "#ffffff", "font-weight": "500"});
  $("#work-link").css({ "color": "rgba(255, 255, 255, 0.742)", "font-weight": "300"});
  $("#contact-link").css({ "color": "rgba(255, 255, 255, 0.742)", "font-weight": "300"});
  window.scrollTo(0, 0);
}

// hide project sections
function showProfile() {
  $("#profile-section").removeClass("hidden");
  $("#line_one").text("Get in touch");
  $("#resume-section").addClass("hidden");
  $("#projects-title").hide();
  $("#project-row1").hide();
  $("#project-row2").hide();
  $("#project-row3").hide();
  $("#project-row4").hide();
  $("#project-row5").hide();
  $("#project-row6").hide();
  $("#contact-link").css({ "color": "#ffffff", "font-weight": "500"});
  $("#work-link").css({ "color": "rgba(255, 255, 255, 0.742)", "font-weight": "300"});
  $("#resume-link").css({ "color": "rgba(255, 255, 255, 0.742)", "font-weight": "300"});
  window.scrollTo(0, 0);
}

// show project sections
function showWork() {
  $("#profile-section").addClass("hidden");
  $("#line_one").text("front-end developer + UI/UX designer based in seattle. currently working on design systems @Microsoft");
  $("#resume-section").addClass("hidden");
  $("#projects-title").show();
  $("#project-row1").show();
  $("#project-row2").show();
  $("#project-row3").show();
  $("#project-row4").show();
  $("#project-row5").show();
  $("#project-row6").show();
  $("#work-link").css({ "color": "#ffffff", "font-weight": "500"});
  $("#contact-link").css({ "color": "rgba(255, 255, 255, 0.742)", "font-weight": "300"});
  $("#resume-link").css({ "color": "rgba(255, 255, 255, 0.742)", "font-weight": "300"});
  window.scrollTo(0, 0);
}


// event listener for displaying contact content
$("#contact-link").on('click', function () {
 showProfile();
});

// event listener for displaying project content
$("#work-link").on('click', function () {
  showWork(); 
 });
 
 // event listener for displaying resume content
$("#resume-link").on('click', function () {
  showResume();
 });
 