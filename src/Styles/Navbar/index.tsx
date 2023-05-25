import tw from 'tailwind-styled-components'


export const MainContainer = tw.div`
  flex
  flex-col
  
  
bg-gradient-to-b from-zinc-800

`

export const TopNav = tw.div`
flex
flex-row
mt-3 ml-3

items-end
justify-end


`

export const DownNav = tw.div`
flex
flex-row
items-between
m-2

`

export const Logo = tw.div`

flex
justify-center
items-center


`


export const LogoTxt = tw.div`
text-[#D07407]
text-center
text-sm
xl:text-xl
my-10
mx-3
pl-5
font-extrabold
font-mono
leading-loose

`




export const ButtonOptions = tw.button`
  
bg-[#D07407]
text-center
text-xs
rounded-md
hover:text-[#D07407]

mt-2

text-white
font-bold 
py-2 
px-4 
rounded
`
export const OptionsNetwork = tw.button`
mr-3
xl:mr-5



hover:text-[#D07407] 


`
export const TextOptions = tw.text`
  
text-xs
xl:text-sm
text-[#d9d9d9]
pr-5
hover:text-[#D07407]

`

export const OptionsNetworkMobile = tw.button`
mr-5

text-xs

text-[#d9d9d9]
hover:text-[#D07407]

`
export const OptionsMenuRanking = tw.button`

ml-10


text-sm
    
hover:scale-110         
transition-all
       




`
export const OptionsMenuAll = tw.button`

ml-10
text-sm
xl:text-base   
text-[#d9d9d9]
hover:text-[#D07407]

xl: hover:scale-110 transition-all
`


export const NavContainer = tw.nav`
  
`

