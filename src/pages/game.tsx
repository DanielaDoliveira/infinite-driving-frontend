
import { Container, ImageWallpaper } from '../MainStyle/style'
import  { MenuNav } from '../Components/MenuNav'
import '../app/globals.css'
import { Unity, useUnityContext } from 'react-unity-webgl'
import * as Icon from  'react-bootstrap-icons'
import { Description, Title, TitlesTxt } from '@/Styles/ContentStyle';
import { DownNav, LogoTxt, MainContainer, OptionsMenuAll, OptionsMenuRanking, OptionsNetwork, TextOptions, TopNav } from '@/Styles/Navbar'
import Link from 'next/link'
import intercept from 'intercept-stdout'
import { AnchorHTMLAttributes, useEffect } from 'react'


export default function Game(){


  const {unityProvider, isLoaded,unload, loadingProgression} = useUnityContext({
    loaderUrl:"build/infiniteweb.loader.js",
    dataUrl: "build/infiniteweb.data",
    frameworkUrl: "build/infiniteweb.framework.js",
    codeUrl: "build/infiniteweb.wasm",
    webglContextAttributes:{
      preserveDrawingBuffer:true,
    },
  });



  const loadingPercentage = Math.round(loadingProgression * 100);

  async function handleClick() {
   
    await unload();
  }
  async function handleClickR() {
   
    await unload();
  }
  return(
    <Container >

<MainContainer>   
    <TopNav>
      <OptionsNetwork >
        <Link href = 'https://www.linkedin.com/in/daniela-fialho-d-oliveira-479b53163/'
        >
          <Icon.Linkedin size = { 22 } color='#d9d9d9'/>  
        </Link>
      </OptionsNetwork>
      <OptionsNetwork >
        <Link href = 'https://github.com/DanielaDoliveira'>
           <Icon.Github size = { 22 } color='#d9d9d9'/>
        </Link>
      </OptionsNetwork>
          <Link href = 'https://danieladoliveira.netlify.app/'>
            <OptionsNetwork>
              <TextOptions>About author</TextOptions>
            </OptionsNetwork>
          </Link>       
    </TopNav>
 
    <DownNav>
      <LogoTxt>INFINITE DRIVING</LogoTxt>
      <OptionsMenuRanking onClick={handleClick} >
       <Link 
        href = {"/"} 
        className='no-underline text-sm text-[#d9d9d9] hover:text-[#D07407]'
       
       >
       Home
       </Link> 

      </OptionsMenuRanking>

      <OptionsMenuRanking  onClick={handleClickR}>
        <Link 
          href = {"/ranking"}
          className='no-underline text-[#d9d9d9] hover:text-[#D07407]'
        >
          Ranking
        </Link>
      </OptionsMenuRanking>
      <OptionsMenuAll id= 'option'  onClick={handleClick}>
        <Link 
          href = {"/game"}
          className='no-underline text-[#d9d9d9] hover:text-[#D07407] '
        >
            Game
        </Link>
      </OptionsMenuAll>
    </DownNav>    

  </MainContainer>



 
  <div className='flex-col m-10 items-center justify-center text-center text-base font-mono'>
  {isLoaded === false && (
       
        <div className="loading-overlay">
          <p>Loading Game... ({loadingPercentage}%)</p>
        </div>
      )}
  </div>
   <div className = "lg:w-full flex align-center justify-center">
 
    <Unity className=" m-10 lg:w-[800px] lg:h-[600px] sm:w-[70%] sm:h-[70%]"
      style = {{background: '#000'}}
      unityProvider={unityProvider}
    />
    </div>
    <Title className='flex flex-col'> <TitlesTxt  className='mt-10'> Commands </TitlesTxt> </Title>
   <div className='flex items-center justify-center'>
        <Icon.ArrowLeftSquare className=' m-3 mr-2 ' size={30}/>
        <Icon.ArrowRightSquare className='m-3' size={30}/>
        <Description className='mt-5 text-xl font-bold'> Move Car </Description>
   </div>
    



 
   </Container>
  );
}