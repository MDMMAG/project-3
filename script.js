document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("fullscreen-video");

    // Restore video playback time if available
    if (sessionStorage.getItem("videoTime")) {
        video.currentTime = sessionStorage.getItem("videoTime");
    }

    // Ensure video plays when page is loaded
    video.play().catch(error => {
        console.error("Autoplay prevented:", error);
    });

    // Save video time before leaving
    window.addEventListener("beforeunload", function () {
        sessionStorage.setItem("videoTime", video.currentTime);
    });

    // Keep video playing when returning
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            video.play();
        }
    });
});
