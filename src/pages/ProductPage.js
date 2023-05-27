import Banner from "../components/Banner";
import footer from "../components/Footer";
import Header from "../components/Header";
import { products } from "../dataFake";

const ProductPage = () => {
    return`
        <div class="container max-w-4xl mx-auto px4">
            ${Header()}
            ${Banner()}
            <h1>Product Page</h1>
            ${products.map((product) =>
                `
                <div>
                    <div><a href="/product/${product.id}">${product.img}</a></div>
                    <div><a href="/product/${product.id}">${product.name}</a></div>
                </div>
                `
                ).join("")}
            ${footer()}
        </div>
    `;
};

export default ProductPage;