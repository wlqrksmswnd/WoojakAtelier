import WorkCard from "../components/WorkCard";
import '../styles/works.css'
import { motion } from "framer-motion";
export default function Works(){
    return(
        <motion.section>
            <div className="works-container">
                <div className="works-intro_container">
                    <motion.img id="works-img" src="/imgs/wow_it_works.jpg"
                    initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.4}}></motion.img>
                    <div className="works-text_container">
                        <motion.div id="works-intro_title"
                        initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.3}}>
                            공방의 작품들
                        </motion.div>
                        <motion.div id="works-intro_text"
                        initial={{opacity: 0}} animate={{opacity: 1, y:-10}} transition={{duration: 1,delay:0.2}}>
                            주인장이 뻘짓하며 만들어진 작품들입니다
                        </motion.div>
                    </div>
                    
                </div>
                <div className="works-workcards">
                    <WorkCard work="atelier"/>
                </div>
            </div>
        </motion.section>
        
        
    )
} 