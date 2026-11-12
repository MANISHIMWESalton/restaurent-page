import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource"
        }
    ]
},

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    devServer: {
    port: 8080,
    historyApiFallback: true
}
};