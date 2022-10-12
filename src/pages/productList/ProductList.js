import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../../redux/actions/productActions"
import './ProductList.scss'

export default function ProductList() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector(store => store.products.productList)

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return <div className="product-list">
        {products
            ? products?.map(item => <div onClick={() => navigate(`product_Detail/${item.id}`)} key={item.id}>{item.title}</div>)
            : <h3>Loading...</h3>
        }
    </div>
}