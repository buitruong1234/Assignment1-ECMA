import Banner from "../components/Banner";
import footer from "../components/Footer";
import Header from "../components/Header";
import { products } from "../dataFake";

const ProductPage = () => {
    return`
        <div class="leading-normal tracking-normal text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
            ${Header()}
            ${Banner()}
            ${products.map((product) =>
                `
                <section class="bg-white border-b py-8">
            <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                My Products
                </h2>
                <div class="w-full mb-4">
                    <div class="h-1 mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        < href="#" class="flex flex-wrap no-underline hover:no-underline">
                        <div class="w-full font-bold text-xl text-gray-800 px-6">
                            <img src="${product.img}" width="30%">
                        </div>
                            <p class="text-gray-800 text-base px-6 mb-5">
                                <a href="/product/${products.id}">${product.name}</a>
                            </p>
                    </div>
                    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div class="flex items-center justify-start">
                        <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Action
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            </section>
                `
                ).join("")}
            ${footer()}
        </div>
    `;
};

export default ProductPage;