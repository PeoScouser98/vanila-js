/* eslint-disable */
import '../src/index.css'
import header from '../components/header';
import footer from '../components/footer';

const productPage = {
    async render() {
        const data = await (await fetch('http://localhost:3004/product')).json() // đợi lấy dữ liệu từ API
        console.table(data);
        return /* html */ `<header>${header.render()}</header>
                            <main>
                                <div id="product-list" class="grid grid-cols-4 gap-5 my-5 max-w-full mx-auto px-5">
                                ${Array.isArray(data) ? data.map((item) =>
                            /* html */ `<div class="card w-96 bg- shadow-xl">
                                        <figure><img src=${item.img} alt="product's image" class="max-w-full object-cover" style="height:12rem"/></figure>
                                        <div class="card-body">
                                            <h2 class="card-title">${item.name}</h2>
                                            <p>$${item.price}</p>
                                            <div class="card-actions justify-end">
                                            <button class="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>`).join("") : "Data is invalid!"}</div>
                            </main>
                            <footer>${footer.render()}</footer>
                            `;
    },
};
export default productPage;
