
import {Container, ImageWallpaper,Text } from '../MainStyle/style'
import { MenuNav } from '../Components/MenuNav'
import "bootstrap/dist/css/bootstrap.min.css";
import { Content } from '@/Components/Content';
import './globals.css'
export default function Home() {
  return (
    <Container>
     
     <ImageWallpaper>
     <MenuNav/>
     <Content></Content>
     </ImageWallpaper>

     
     
 
    </Container>    

  )
}
