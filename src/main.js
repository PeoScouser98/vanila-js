import './index.css';
import Navigo from 'navigo';
import homepage from '../pages/homepage';
import productPage from '../pages/products';

const router = new Navigo('/', { hash: true });
const $ = (selector) => {
    const elems = document.querySelector(selector);
    return elems.length === 1 ? elems[0] : elems;
};
document.addEventListener('DOMContentLoaded', () => {
    // DOMContentLoaded sẽ kích hoạt khi DOM đã được render
const renderPage = async(page) =>{
        const container = $('#container');
        if (container) container.innerHTML = await page.render(); // chờ page load xong => show ra
    }
    router.on({
        '/': () => renderPage(homepage),
        '/products': () => renderPage(productPage),
    });
    router.resolve();
});
