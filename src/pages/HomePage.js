import Header from "../components/Header";
import Banner from "../components/Banner";
import footer from "../components/Footer";
import { post } from "../dataFake";

const HomePage = () => {
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            ${Banner()}
            <div>
                <div class="basis-1/4 flex flex-row">
                <div class=" z-10 top-0 left-0 w-32 h-screen bg-gray-900 overflow-y-auto">
                    <div class="flex flex-col h-full">
                        <div class="flex justify-between items-center py-4">
                            <h2 class="text-xl font-semibold text-white">Danh muc</h2>
                        </div>
                        <div class="flex flex-col mt-4">
                            <ul class="list-reset">
                                <li class="py-2">
                                    <a href="#" class="text-gray-500 hover:text-white">Computer</a>
                                </li>
                                <li class="py-2">
                                    <a href="#" class="text-gray-500 hover:text-white">Phone</a>
                                </li>
                                    <li class="py-2">
                                        <a href="#" class="text-gray-500 hover:text-white">Ipad</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div class="" >
                    <h2>Bai viet</h2>
                    <div class="grid grid-cols-3 gap-8">
                        ${post.map(function (post) {
                        return `<div>
                            <h3>${post.title}</h3>
                            <p>${post.content}</p>
                            </div>
                            `;
                        }).join("")}
                    </div>
                </div>
            </div>
            ${footer()}
        </div>
        
    `;
};

export default HomePage;