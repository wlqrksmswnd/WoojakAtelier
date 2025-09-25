import { motion } from "motion/react"
import '../styles/stackcard.css'
import { delay } from "motion"
export default function StackCard({stackname}){
    return(
        <motion.section whileHover={{scale:1.1}}>
            <motion.div className = "stackcard-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            >
                <img id="stackcard-stack_img" src={`/stack_imgs/${stackname}.png`}></img>
                <div id="stackcard-stackname">{stackname}</div>
            </motion.div>
        </motion.section>
    )
}