
import React from 'react'
import  Card from '../Card/Card'
import './List.scss'
import useFetch from '../../hooks/useFetch'

const List = ({subCats,maxPrice,sort,catId}) => {

  const {data,loading,error}= useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}
  &[filters][price][$lte]=${maxPrice}&sort=price:${sort }`);

    // const data =[{img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',title:"jeans", price:"$49",oldPrice:"$79",id:1},
    // {img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',
    // title:"jeans", price:"$49",oldPrice:"$79",id:2},
    // {img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',title:"jeans", price:"$49",oldPrice:"$79",id:3},
    // {img:'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1',img2:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg',title:"jeans", price:"$49",oldPrice:"$79",id:4}];

  return (
    <div className='list'>
    {loading? "loading"
    :data?.map((item)=><Card item ={item} key={item.id}/>
    )}
    </div>
  )
}

export default List