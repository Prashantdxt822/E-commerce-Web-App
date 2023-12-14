import "./FeaturedProducts.scss";
import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";

// dotenv.config();
const FeaturedProducts = ({ type }) => {
    // const data =[{img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022 /05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',title:"jeans", price:"$49",oldPrice:"$79",id:1},
    // {img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',
    // title:"jeans", price:"$49",oldPrice:"$79",id:2},
    // {img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',title:"jeans", price:"$49",oldPrice:"$79",id:3},
    // {img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',title:"jeans", price:"$49",oldPrice:"$79",id:4}];

    const {data,loading,error}= useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error? "Something Went Wrong!"
        :(loading
        ? "loading" 
        :data?.map(item=>(
            <Card item ={item} key={item.id}/>
        )))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
