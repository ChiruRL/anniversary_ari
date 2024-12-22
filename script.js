document.addEventListener("DOMContentLoaded", () => {
    const showGalleryButton = document.getElementById("show-gallery");
    const gallery = document.getElementById("gallery");
    const nextAreaButton = document.getElementById("next-area");
    const finalMessage = document.getElementById("final-message");
    const imageDescription = document.getElementById("image-description");
    const images = document.querySelectorAll(".gallery-img");

    // Handle showing the gallery
    showGalleryButton.addEventListener("click", () => {
        gallery.classList.remove("hidden");
        showGalleryButton.classList.add("hidden");
    });

    images.forEach((img) => {
        img.addEventListener("click", () => {
            const description = img.getAttribute("data-description");
            imageDescription.textContent = description;
        });
    });

    // Handle moving to the next area
    nextAreaButton.addEventListener("click", () => {
        gallery.classList.add("hidden");
        finalMessage.classList.remove("hidden");
    });

    // Floating hearts animation
    const createHeart = () => {
        const heart = document.createElement("img");
        heart.src = "Images/heart.png"; // Replace with the path to your heart PNG
        heart.className = "heart";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    setInterval(createHeart, 300);
    
    // Kitty follows the mouse cursor
    const kitty = document.createElement("img");
    kitty.src = "Images/kitty.png"; // Replace with the path to your kitty PNG
    kitty.style.position = "absolute";
    kitty.style.width = "100px";
    kitty.style.height = "100px";
    kitty.style.pointerEvents = "none";
    kitty.style.zIndex = "1000";
    document.body.appendChild(kitty);

    document.addEventListener("mousemove", (e) => {
        kitty.style.left = `${e.pageX}px`;
        kitty.style.top = `${e.pageY}px`;
    });
});
