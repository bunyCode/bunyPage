/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    tabWidth: 4,
    bracketSameLine: true,
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    astroAllowShorthand: false,
};

// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
