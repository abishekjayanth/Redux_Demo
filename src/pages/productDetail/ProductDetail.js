import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { removeSelectedProduct, setSelectedProduct } from "../../redux/actions/productActions"
import { get } from "../../services/http.svc"
import './ProductDetail.scss'

export default function ProductDetail() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    let productDetail = useSelector(store => store.products.selectedProduct)

    useEffect(() => {
        (
            async () => {
                const result = await get(`/products/${productId}`)
                dispatch(setSelectedProduct(result))
            }
        )()
        return () => {
            dispatch(removeSelectedProduct())
        };
    }, [])


    return <div className="product-detail">
        {productDetail
            ? <>
                <h3>{productDetail.title}</h3>
                <p>{productDetail.description}</p>
            </>
            : <h3>Loading...</h3>
        }
    </div>

}