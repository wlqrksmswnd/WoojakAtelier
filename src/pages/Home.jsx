import '../styles/home.css'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import StackCard from '../conponents/stackCard'
function Home(){
    return(
        <div className='home-container'>
            <div className='home-intro_container'>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, y:-10}} viewport={{once:true,amount:0.2}} transition={{duration: 1,delay:0.4}}>
                    <img src="/imgs/woojak.jpg" id="home-woojak"></img>
                </motion.div>
                <div className='home-intro_text_container'>
                    <motion.div id='home-intro_text_title' initial={{opacity: 0}} whileInView={{opacity: 1, y:-15}} viewport={{once:true,amount:0.2}} transition={{duration: 1,delay:0.3}}>
                        우작이의 작업 공방
                    </motion.div>
                    <motion.div id='home-intro_text' initial={{opacity: 0}} whileInView={{opacity: 1, y:-20}} viewport={{once:true,amount:0.2}} transition={{duration: 1,delay:0.2}}>
                        선린인터넷고등학교 전공동아리 TAPIE의<br></br>프론트엔드 개발자 우작이라고 합니다.
                    </motion.div>
                </div>
            </div>
            <motion.div className='home-tech_stack_container' initial={{opacity: 0}} whileInView={{opacity: 1, y:-10}} viewport={{once:true,amount:0.2}} transition={{duration: 1}}>
                <div id='home-tech_stack_title' initial={{opacity: 0}} whileInView={{opacity: 1, y:-10}} viewport={{once:true,amount:0.2}} transition={{duration: 1}}>기술 스택</div>
                <div className='home-stack_container'>
                    <StackCard stackname = "HTML"/>
                    <StackCard stackname = "CSS"/>
                    <StackCard stackname = "JS"/>
                    <StackCard stackname = "REACT"/>
                    <StackCard stackname = "SOLID"/>
                    <StackCard stackname = "PYTHON"/>
                    <StackCard stackname = "C"/>
                </div>
            </motion.div>
        </div>
        
    )
}
export default Home