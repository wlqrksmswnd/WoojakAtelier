import '../styles/home.css'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import StackCard from '../components/StackCard'
function Home(){
       return(
        <div className='home-container'>
            <motion.section className='home-intro_container'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.4}}>
                    <img src="/imgs/woojak.jpg" id="home-woojak"></img>
                </motion.div>
                <div className='home-intro_text_container'>
                    <motion.div id='home-intro_text_title' initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.3}}>
                        우작이의 작업 공방
                    </motion.div>
                    <motion.div id='home-intro_text' initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.2}}>
                        선린인터넷고등학교 전공동아리 TAPIE의<br/>프론트엔드 개발자 우작입니다.
                    </motion.div>
                </div>
            </motion.section>
            <motion.section>
            <motion.div className='home-tech_stack_container' initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1}}>
                <div id='home-tech_stack_title'>기술 스택</div>
                <div className='home-stack_container'>
                    <StackCard stackname = "HTML"/>
                    <StackCard stackname = "CSS"/>
                    <StackCard stackname = "JAVASCRIPT"/>
                    <StackCard stackname = "REACT"/>
                    <StackCard stackname = "PYTHON"/>
                    <StackCard stackname = "C"/>
                </div>
            </motion.div>
            </motion.section>
            <motion.section className='home-game_container'>
                <div id='home-game_record_title'></div>
                <div className='home-game_lists'>
                    <div className='home-game_list_1'></div>
                    <div className='home-game_list_2'></div>
                    <div className='home-game_list_3'></div>
                </div>
            </motion.section>
        </div>
        
    )
}
export default Home