module.exports = {
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        indent: ["error", 4],
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
