import Head from 'next/head';

import {Container, ImageWallpaper,Text } from '../MainStyle/style'
import { MenuNav } from '../Components/MenuNav'
import "bootstrap/dist/css/bootstrap.min.css";
import { Content } from '@/Components/Content';

import './globals.css'
//@ts-ignore
const Page = (props) => (
  <div>

    <>
     
     <Container>
  
  <ImageWallpaper>
  <MenuNav/>
  <Content></Content>
  </ImageWallpaper>
 
  
  
 
 </Container>    
     </>
  </div>
);

export default Page;