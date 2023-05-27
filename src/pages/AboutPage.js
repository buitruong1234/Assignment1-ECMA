import Header from "../components/Header";

const AboutPage = () => {
    return`
        <div class="leading-normal tracking-normal text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% " style="font-family: 'Source Sans Pro', sans-serif;">
        ${Header()}
        ${Banner()}
            <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        ABOUT ME
        </h2>
        <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Ninh Bình chính là quê hương của tôi
            </h3>
            <p class="text-gray-600 mb-8">
            tôi sinh ra và lớn lên tại Thị trấn Phát Diệm, huyện Kim Sơn, Tỉnh Ninh Bình
        </div>
        <div class="w-full sm:w-1/2 p-6">
            <img src="https://www.google.com/maps/vt/data=kr5ouuztzKVIJbXFNzlAzMDGhRBAiESdIbukpnHPy6fb25ZbekO847G6tVJmpb-biIml0V79KDV8JwLxtG4jvL1PsYht9TzvwwKPTwqLj9BH3Qy7_bNB-L25RYEJzcifsgqI-Nuz9pPw_4dpAAc5kjveZYcqG6bLTERqBYcQq9cb665Svk4dOqndxwdOD73bKrEMjrgClMfPuFfquwqNFjpQtFb3U_PGDnPTVj4xy9IzR_ZQkJIKos3LG3Ox">
        </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
            <img src="https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/12/01/dx02nvba_1920x1080_bietdoisieuanhhung.jpg">
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                My Hobbies
            </h3>
            <p class="text-gray-600 mb-8">
                sở thích của tôi là xem phim, series mà tôi thích nhất là Avengers
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        My Achievements
        </h2>
        <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
            Academic level
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
            đã tốt nghiệp cấp 3, hiện tại đang học tại trường cao đẳng FPT Polytechnic
            </p>
            </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-start">
            <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Action
            </button>
            </div>
        </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
            Future Plans
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
                - tốt nghiệp đạt bằng khá
                </br>
                - được nhận vào một công ty của FPT
                </br>
                - Mua xe, mua nhà 
            </p>
            </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-center">
            <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Action
            </button>
            </div>
        </div>
        </div>
    </div>
    ${footer}
    </div>
    `;
};

export default AboutPage;