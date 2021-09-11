const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme("colors.fuchsia.400"),
              fontWeight: "600",
              background: theme("colors.black"),
              padding: theme("spacing.1"),
              borderRadius: theme("spacing.1"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
