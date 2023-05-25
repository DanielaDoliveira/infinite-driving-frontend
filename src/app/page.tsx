import Image from 'next/image'
import {Container, ImageWallpaper,Text } from '../MainStyle/style'
import car from '../images/Captura de Tela 2023-05-23 às 09.36.24.png'
import { MenuNav } from '../Components/MenuNav'
import "bootstrap/dist/css/bootstrap.min.css";
import { Content } from '@/Components/Content';

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
