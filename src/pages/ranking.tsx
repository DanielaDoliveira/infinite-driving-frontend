
import { Container, ImageWallpaper } from '../MainStyle/style'
import  { MenuNav } from '../Components/MenuNav'
import '../app/globals.css'
import * as Style from '../Styles/RankingBoard/styles'
import { api } from '../services/api'
import { useEffect,useState } from 'react'

type RankingProps = {
  name: string,
  points:number
}

interface RankingDataProps{
  ranking:RankingProps;
}
export default function Ranking({ ranking }:RankingDataProps){

  const [rankData,setRankData] =useState(ranking || []);
  useEffect(()=>{
    async function handleSeeRank(){
      const response = await api.get('/ranking');
      setRankData(response.data);
      console.log(response.data);


    }
    handleSeeRank();
  },[]);
  return(
      <Container className='pb-[100%]'>
      
        <MenuNav/>
        <Style.Container>

          <Style.TitleContainer>
            <Style.Title>
             Best Players
            </Style.Title>
          </Style.TitleContainer>
         {rankData.map(item => (
           <section
            key = {item.id }
            className = "">
               <Style.BoardContainer>

                <Style.NameContainer><Style.NameTxt>{ item.name} </Style.NameTxt> </Style.NameContainer>
                <Style.ScoreContainer>  {item.points} </Style.ScoreContainer>

</Style.BoardContainer>
            </section>
         ))}

        
        
        </Style.Container>
      
      </Container>
  );
}