import { 
  MainContainer, 

  NavContainer,
  LogoTxt,
  ButtonOptions,
  OptionsNetwork,
  OptionsMenuRanking,
  OptionsNetworkMobile,
  TopNav,
  DownNav,
  OptionsMenuAll,
  TextOptions,

} from '../../Styles/Navbar/index'


import * as Icon from  'react-bootstrap-icons'
import './styles.css'

import Link from 'next/link'


export  const MenuNav = ()=>{


  return(

    <MainContainer>
    
   

    
  
      <TopNav>
        
     
        <OptionsNetwork >
        <Link href = 'https://www.linkedin.com/in/daniela-fialho-d-oliveira-479b53163/'>
        <Icon.Linkedin size = { 22 } color='#d9d9d9'/>  
        </Link>
     
         
          </OptionsNetwork>



          
            <OptionsNetwork >
            <Link href = 'https://github.com/DanielaDoliveira'
            
            
            
            > <Icon.Github size = { 22 } color='#d9d9d9'/></Link>
            </OptionsNetwork>

       
            <Link href = 'https://danieladoliveira.netlify.app/'>

            <OptionsNetwork>
              <TextOptions>About author</TextOptions>
              
            </OptionsNetwork>


  
            </Link>
            
      </TopNav>
   


        

          <DownNav>
                <LogoTxt>INFINITE DRIVING</LogoTxt>
             
                 <OptionsMenuRanking >
                 <Link href = '/'
            className='no-underline text-sm 
            text-[#d9d9d9] hover:text-[#D07407]
            '
            >
                  Home       </Link>
              </OptionsMenuRanking>
        
              <OptionsMenuRanking>
            <Link href = '/ranking'
            className='no-underline
            text-[#d9d9d9] hover:text-[#D07407]
            '
            >
           
                Ranking
            
            </Link>
            </OptionsMenuRanking>
           
         
             <OptionsMenuAll id= 'option'>
             <Link href = '/game'
              className='no-underline
              text-[#d9d9d9] hover:text-[#D07407] '
             >
              Game
              </Link>
             </OptionsMenuAll>
       
          
           
          </DownNav>    


    
    </MainContainer>

  )

} 