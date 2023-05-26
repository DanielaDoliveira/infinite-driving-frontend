
import { Container, ImageWallpaper } from '../MainStyle/style'
import  { MenuNav } from '../Components/MenuNav'
import '../app/globals.css'

import * as Icon from  'react-bootstrap-icons'
import { Description, Title, TitlesTxt } from '@/Styles/ContentStyle';
export default function Game(){
  return(
    <Container >
    <ImageWallpaper>
   <MenuNav/>
   <Title className='flex flex-col'> <TitlesTxt  className='mt-10'> Commands </TitlesTxt> </Title>

   <div className='flex items-center justify-center'>
        <Icon.ArrowLeftSquare className=' m-3 mr-2 ' size={30}/>
        <Icon.ArrowRightSquare className='m-3' size={30}/>
        <Description className='mt-5 text-xl font-bold'> Move Car </Description>
   </div>
    


   </ImageWallpaper>
 
   </Container>
  );
}