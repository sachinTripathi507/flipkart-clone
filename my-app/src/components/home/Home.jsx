import { useEffect } from 'react'
import Navbar from './Navbar'
import { Box } from "@mui/material"
import Banner from './Banner'
import styled from '@emotion/styled'
import { getProducts } from '../../Redux/Action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide';
import MidSection from './MidSection';
import MidSlide from './MidSlide';

const Component = styled(Box)`
padding: 10px;
background:#f2f2f2;`

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const { products } = useSelector(state => state.getProducts);
  // console.log(products)
  return (
    <Box >

      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
      </Component>
    </Box>
  )
}

export default Home