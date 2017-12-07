

$(document).ready(function() {
  $(window).scroll(function() {
  var navbar = $('.navbar');
  if($(window).scrollTop() >= 120){
  navbar.addClass('selected');
  }else {
  navbar.removeClass('selected');
  }
  });
  $(function() {
    // $("body").niceScroll({
    //    cursorcolor: "#bd2127",
    //    scrollspeed: 100
    // });
});
});
// var scroll = new SmoothScroll('a[href*="#"]');
// var scroll = new SmoothScroll('a[href*="#"]', {
// 	// Selectors
// 	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
// 	header: null, // Selector for fixed headers (must be a valid CSS selector)

// 	// Speed & Easing
// 	speed: 2000, // Integer. How fast to complete the scroll in milliseconds
// 	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
// 	easing: 'easeInOutCubic', // Easing pattern to use
// 	customEasing: function (time) {}, // Function. Custom easing pattern

// 	// Callback API
// 	before: function () {}, // Callback to run before scroll
// 	after: function () {} // Callback to run after scroll
// });

  function initMap() {
    var myLatlng = {
      lat: 31.4386386,
      lng: 34.3844428
      };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: myLatlng,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "Click to zoom"
    });
    map.addListener("center_changed", function() {
      window.setTimeout(function() {
      map.panTo(marker.getPosition())
      }, 3e3)
      });
      marker.addListener("click", function() {
      map.setZoom(19);
      map.setCenter(marker.getPosition())
      });
  }


  $(function() {  
    $("body").niceScroll({
      cursorcolor: "#bd2127",
      cursorborder: "1px solid #bd2127"
    });
});

$(window).on('load',function(){

$('.loading-screen').fadeOut(200);
});