import CustomPC from "../../components/home-page/custom-pc";
import Trending from "../../components/home-page/trending-page";
import Layout from "../../components/main/layout";
import Separator from "../../helpers/utils/Separator";
import Products from "../../components/home-page/products-page/index";
import ShowProducts from "../../components/general/show-products";

const Homepage = () => {
    return (
    <Layout>
        <CustomPC />
        <Trending />
        <Separator>Productos destacados</Separator>
        <ShowProducts />
    </Layout>)
}

export default Homepage;