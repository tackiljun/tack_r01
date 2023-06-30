import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = ({requestViewProduct}) => {

    const [obj, setObj] = useState([])

    // 빈 배열은 딱 한번만 작업을 하고 싶을 때 쓴다(처음에 랜더링이 끝났을 때만).
    useEffect(() => {
        axios.get('http://localhost/products').then(res => {
        console.log("useEffect inside" + res.data)
        setObj(res.data)
    })

    }, [])

    // useEffect가 실행되는 로딩 시간에 메세지 출력.
    if(obj.length === 0) {
        <div className="text-4xl">Loding.....</div>
    }

    console.log(obj)

    

    return ( 
        <ul>
            {obj.map(p=>
            <li key={p.id}
            onClick={() => requestViewProduct(p.id)}
            >
                    {p.id}-{p.pname}-{p.price}
            </li>)}
        </ul>
     );
}
 
export default ProductList;