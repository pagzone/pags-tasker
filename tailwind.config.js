/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                midnight: {
                    700: "#26262F",
                    800: "#202028",
                    850: "#1F1F27",
                    900: "#16161A",
                },
                primary: "#7F5AF0",
                secondary: "#94A1B2",
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

