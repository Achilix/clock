document.addEventListener("DOMContentLoaded", function() {
    function updateRotation(hours, minutes, seconds) {
        const secRotation = seconds * 6;
        const minRotation = minutes * 6 + seconds / 10;
        const hourRotation = (hours % 12) * 30 + minutes / 2;

        document.querySelector('.line1').style.transform = `translate(-50%, -50%) rotate(${secRotation+180}deg)`;
        document.querySelector('.line2').style.transform = `translate(-50%, -50%) rotate(${minRotation+180}deg)`;
        document.querySelector('.line3').style.transform = `translate(-50%, -50%) rotate(${hourRotation+180}deg)`;
    }

    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        updateRotation(hours, minutes, seconds);
    }

    // Call updateTime initially to set the clock with current time
    updateTime();

    // Update the clock every second
    setInterval(updateTime, 1000);
});
