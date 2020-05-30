import { Component, OnInit } from "@angular/core";
import { RequestQueue } from "../../../webapp/orm/RequestQueue";
import { RequestQueueService } from "../../../webapp/service/RequestQueueService";

@Component({
  selector: "app-getstarted-form",
  templateUrl: "./getstarted-form.component.html",
  styleUrls: ["./getstarted-form.component.scss"],
})
export class GetstartedFormComponent implements OnInit {
  private requestQueue = new RequestQueue(
    "",
    "",
    "",
    "",
    new Date(),
    new Date(),
    "",
    ""
  );
  constructor(private requestQueueService: RequestQueueService) {}

  ngOnInit() {
    (function ($) {
      "use strict";

      /*==================================================================
  [ Focus Contact2 ]*/
      $(".input2").each(function () {
        $(this).on("blur", function () {
          if ((<string>$(this).val()).trim() != "") {
            $(this).addClass("has-val");
          } else {
            $(this).removeClass("has-val");
          }
        });
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

      $(".validate-form .input2").each(function () {
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

  saveRequestQueue() {
    this.requestQueueService
      .save(this.requestQueue)
      .subscribe((data) => alert(data));
  }
}
