const Header = () => {
    return`
        <header>
            <div class="flex justify-center py-2 bg-orange-500 "><img src="https://img.freepik.com/free-vector/green-blue-corporative-logo_1043-216.jpg?w=740&t=st=1684896015~exp=1684896615~hmac=ac3a587aaaf29f2a36321aedb01fd7871af0942236351a6cf28371d92b987b45" width="10%"></div>
            <div class="flex justify-between p-4 bg-green-300">
                <ul class="flex items-center space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/product">Product</a></li>
                </ul>
                <div>2</div>
            </div>
        </header>
    `;
};

export default Header;
