document.addEventListener("DOMContentLoaded", function() {
    var loaderWrapper = document.querySelector(".loader-wrapper");

    setTimeout(function() {
        loaderWrapper.style.display = "none";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollDownText = document.getElementById("scroll-text");

    scrollDownText.addEventListener("click", function() {
        var targetSection = document.querySelector(".body");
        var targetSectionPosition = targetSection.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetSectionPosition - currentPosition;

        var duration = 1000;
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, currentPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    });
});

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("bak2top");

    scrollButton.addEventListener("click", function (e) {
        e.preventDefault();

        var scrollDuration = 300; 
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });
});

function toggleDropdown() {
    var dropdownContent = document.getElementById("lang-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".slider");
    var slides = document.querySelectorAll(".slider img");
    var slideWidth = slides[0].clientWidth;
    var currentSlide = 0;

    function updateSlideWidth() {
        slideWidth = slides[0].clientWidth;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        if (currentSlide === 7) {
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
            setTimeout(function() {
                slider.style.transition = "transform 0.5s ease-in-out";
                currentSlide = 1;
                slider.style.transform = "translateX(" + (-slideWidth * currentSlide) + "px)";
            }, 10);
        } else {
            slider.style.transform = "translateX(" + (-slideWidth * currentSlide) + "px)";
        }
    }

    setInterval(nextSlide, 2000);

    window.addEventListener("resize", function() {
        updateSlideWidth();
        slider.style.transform = "translateX(" + (-slideWidth * currentSlide) + "px)";
    });
});
