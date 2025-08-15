document.addEventListener("DOMContentLoaded", function () {
    // Main buttons
    document.getElementById("subscribeBtn").addEventListener("click", function () {
        window.open("https://youtube.com/@anshikaverma-b2b?si=WS_xxK1bfhJ3LdaV", "_blank");
    });

    document.getElementById("messageBtn").addEventListener("click", function () {
        window.open("https://www.instagram.com/anshiikaverma?igsh=MTA0emhhempxc2JwMA==", "_blank");
    });

    document.getElementById("snapBtn").addEventListener("click", function () {
        window.open("https://www.snapchat.com/add/anshiikaverma?share_id=CQZqUQ52FHU&locale=en-US", "_blank");
    });

    // Social media icons
    document.getElementById("youtubeIcon").addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://youtube.com/@anshikaverma-b2b?si=WS_xxK1bfhJ3LdaV", "_blank");
    });

    document.getElementById("instagramIcon").addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://www.instagram.com/anshiikaverma?igsh=MTA0emhhempxc2JwMA==", "_blank");
    });

    document.getElementById("snapIcon").addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://www.snapchat.com/add/anshiikaverma?share_id=CQZqUQ52FHU&locale=en-US", "_blank");
    });
});
document.getElementById("shareBtn").addEventListener("click", async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Anshika Verma - Dreamer & Developer",
                text: "Check out my profile!",
                url: window.location.href // shares current page link
            });
            console.log("Shared successfully");
        } catch (error) {
            console.error("Error sharing:", error);
        }
    } else {
        alert("Sharing is not supported in this browser. Copy the link manually.");
    }
});

