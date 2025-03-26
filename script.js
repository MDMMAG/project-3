document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("fullscreen-video");

    // Restore video time if available
    if (sessionStorage.getItem("videoTime")) {
        video.currentTime = sessionStorage.getItem("videoTime");
    }

    // Save video time before leaving
    window.addEventListener("beforeunload", function () {
        sessionStorage.setItem("videoTime", video.currentTime);
    });
    window.addEventListener("popstate", function () {
        location.reload(); // Reload only when necessary
    });
    
});
