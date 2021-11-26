import { Container } from "../../../helpers"
import Products from "../../home-page/products-page"
import Filter from "../filter"

const ShowProducts = () => {
    return (
        <Container flex='enable'>
            <Filter/>
            <Products />
        </Container>
    )
}

export default ShowProducts;