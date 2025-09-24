import People from '../components/people'
import Yeppi from '../components/Yeppi'
import '../styles/thanks.css'
import { motion } from 'framer-motion'

export default function Thanks(){
    return(
        <motion.section>
            <div className="thanks-container">
                <div className="thanks-intro_container">
                    <motion.img id="thanks-img" src="/imgs/walk_doodle.jpg"
                    initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.4}}></motion.img>
                    <div className='thanks-text_container'>
                        <motion.div id='thanks-intro_title'
                        initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.2}}>Thanks To</motion.div>
                        {/* <div id='thanks-intro_text'></div> */}
                    </div>
                </div>
                <div className='thanks-people_container'>
                    <Yeppi/>
                    <People name='babojunyoung'/>
                    <People name='cy'/>
                    <People name='pixel'/>
                    <People name='coNaN'/>
                    <People name='meat_male'/>
                    <People name='woojin'/>
                    <People name='eagen'/>
                    <People name='tak'/>
                </div>
            </div>
        </motion.section>
        
    )
}