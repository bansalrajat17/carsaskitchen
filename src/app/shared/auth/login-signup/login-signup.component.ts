import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-signup",
  templateUrl: "./login-signup.component.html",
  styleUrls: ["./login-signup.component.scss"],
})
export class LoginSignupComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (function ($) {
      "use strict";

      /*==================================================================
  [ Focus Contact2 ]*/
      $(".input3").each(function () {
        $(this).on("blur", function () {
          if ((<string>$(this).val()).trim() != "") {
            $(this).addClass("has-val");
          } else {
            $(this).removeClass("has-val");
          }
        });
      });

      /*==================================================================
  [ Chose Radio ]*/

      $("#loginRadio").on("change", function () {
        if ($(this).is(":checked")) {
          $("#signup-title").toggleClass("d-none");
          $("#login-title").toggleClass("d-none");
          $(".input3-select").slideUp(300);
        }
      });

      $("#signUpRadio").on("change", function () {
        $("#signup-title").toggleClass("d-none");
        $("#login-title").toggleClass("d-none");
        if ($(this).is(":checked")) {
          $(".input3-select").slideDown(300);
        }
      });

      /*==================================================================
  [ Validate ]*/
      var name = $('.validate-input input[name="name"]');
      var email = $('.validate-input input[name="email"]');
      var message = $('.validate-input textarea[name="message"]');

      $(".validate-form").on("submit", function () {
        var check = true;

        if ((<string>$(name).val()).trim() == "") {
          showValidate(name);
          check = false;
        }

        if (
          (<string>$(email).val())
            .trim()
            .match(
              /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
            ) == null
        ) {
          showValidate(email);
          check = false;
        }

        if ((<string>$(message).val()).trim() == "") {
          showValidate(message);
          check = false;
        }
        return check;
      });

      $(".validate-form .input3").each(function () {
        $(this).focus(function () {
          hideValidate(this);
        });
      });

      function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass("alert-validate");
      }

      function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass("alert-validate");
      }
    })(jQuery);
  }
}
