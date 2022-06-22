/* eslint-disable */
import '../src/index.css'
import header from '../components/header';
// import footer from '../components/footer';

const homepage = {
    render() {
        return /* html */ `<header>${header.render()}</header>
                            <main><h1 class="text-4xl my-5 text-red-500">Homepage</h1></main>`;
    },
};
export default homepage;
