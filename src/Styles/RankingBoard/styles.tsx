import tw from 'tailwind-styled-components'


/*CONTAINERS - DIV*/
export const Container = tw.div`
flex
flex-col
items-center
justify-center
m-10

  
`
export const TitleContainer = tw.div`
m-10

`


export const BoardContainer = tw.div`
flex
flex-row
mt-2
pt-2
md:pt-10

`


export const NumberContainer = tw.div`
mr-5
box-border h-10 w-10 pt-1 border-2 

text-center
`


export const NameContainer = tw.div`
box-border h-10 w-[20vh] pt-1  border-[#D07407]  border-2 pb-10

lg:w-[50vh]
text-center
text-sm
pt-5
mr-5
`

export const ScoreContainer = tw.div`
box-border h-10 w-40 pt-1 border-2  border-[#D07407]
pb-10
lg:w-[30vh]
text-sm
lg:text-lg
text-center
mr-5
text-sm
pt-5
`


//OTHER TAGS
export const Title = tw.text`
text-lg
lg:text-xl
text-[#D07407] 
uppercase

`

export const NameTxt = tw.text`
uppercase
text-sm
lg:text-lg

`
export const NumberTxt = tw.text`

text-xl
list-decimal



`

