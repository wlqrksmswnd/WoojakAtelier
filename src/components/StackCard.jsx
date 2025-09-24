import { motion } from "motion/react"
import '../styles/stackcard.css'
export default function StackCard({stackname}){
    return(
        <motion.section>
            <motion.div className = "stackcard-container"
            initial={{opacity: 0}} animate={{opacity: 1, y:-10}} viewport={{once:true,amount:0.2}}
            whileHover={{scale:1.1}}>
                <img id="stackcard-stack_img" src={`/stack_imgs/${stackname}.png`}></img>
                <div id="stackcard-stackname">{stackname}</div>
            </motion.div>
        </motion.section>
    )
}