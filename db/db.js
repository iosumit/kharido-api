const productsdata = require('./raw/products.json');
const cartsdata = require('./raw/cart.json');
const ordersdata = require('./raw/orders.json');
const categorydata = require('./raw/category.json');
const subcategorydata = require('./raw/subcategory.json');
const bannerdata = require('./raw/banner.json');
const userdata = require('./raw/users.json');

const categories = [];
const subcategories = [];
const products = [];
const carts = [];
const orders = [];
const users = [];
const admins = [];
const reviews = [];
const banners = [];
const wishlists = [];
const queries = [];

function dbinit() {
    products.push(...productsdata);
    carts.push(...cartsdata);
    orders.push(...ordersdata);
    categories.push(...categorydata);
    subcategories.push(...subcategorydata);
    banners.push(...bannerdata);
    users.push(...userdata);
}

module.exports = {
    categories, subcategories, products, carts, orders, users, admins, reviews, banners, wishlists, queries, dbinit
};