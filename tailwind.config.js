/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                midnight: {
                    800: "#202028",
                    900: "#16161A",
                },
                primary: "#7F5AF0",
                secondary: "#72757e",
                tertiary: "#2cb67d",
                foreground: "#FFFFFE",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};

