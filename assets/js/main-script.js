(function ($){
    "use strict";

    if ($(".mobile-menu").length) {
        var mobileMenuContent = $("#top-navigation .navigation").html();
    
        $(".mobile-menu .navigation").append(mobileMenuContent);
    
        $(".sticky-header .navigation").append(mobileMenuContent);
    
        $(".mobile-menu .close-btn").on("click", function () {
          $("body").removeClass("mobile-menu-visible");
        });

        // Menu Toggle button
    $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });
  
      // Menu Toggle button
      $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
        "click",
        function () {
          $("body").removeClass("mobile-menu-visible");
        }
      );
    }
})(jQuery);