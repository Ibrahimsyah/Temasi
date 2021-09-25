export const generateGreeting = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour > 6 && hour < 11) { return 'Selamat Pagi'; }
    else if (hour >= 11 && hour < 3) { return 'Selamat Siang'; }
    else if (hour >= 3 && hour < 6) { return 'Selamat Sore'; }
    else { return 'Selamat Malam'; }
};
