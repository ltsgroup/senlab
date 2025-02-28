import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["src/**/*.test.ts", "src/frontend/generated/*", "*", "!src"],
}, ...compat.extends(
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next/typescript",
), {
    plugins: {
        prettier,
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            project: "./tsconfig.json",
        },
    },
    rules: {
        "no-use-before-define": ["error", {
            functions: true,
            classes: true,
            variables: true,
            allowNamedExports: false,
        }],
        "prettier/prettier": ["error"],
        "no-unused-vars": 1,
        quotes: ["error", "double"],
        "@typescript-eslint/no-unused-vars": 1,
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
    },
}];