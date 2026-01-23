$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

});

// Event Gallery Toggle Function
function toggleGallery(galleryId, btn) {
    const gallery = document.getElementById(galleryId);
    const btnText = btn.querySelector('.btn-text');
    const icon = btn.querySelector('.icon-toggle');

    if (gallery.classList.contains('d-none')) {
        // Show gallery
        gallery.classList.remove('d-none');
        gallery.classList.add('d-block');
        gallery.classList.add('animate__animated', 'animate__fadeIn'); // Optional animation class
        
        // Update button
        btnText.textContent = "Hide Gallery";
        icon.setAttribute('icon', 'lucide:chevron-up');
        
        // Update class to indicate active state (optional)
        btn.classList.add('active');
    } else {
        // Hide gallery
        gallery.classList.remove('d-block');
        gallery.classList.add('d-none');
        
        // Update button
        btnText.textContent = "Show Gallery";
        icon.setAttribute('icon', 'lucide:chevron-down');
        
        // Remove active state
        btn.classList.remove('active');
    }
}

