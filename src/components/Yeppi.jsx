import '../styles/people.css'
import '../styles/yeppi.css'
import { motion, scale } from 'framer-motion'
import { useState, useEffect } from 'react';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown'
export default function Yeppi(){
    const [markdown,setMarkdown] = useState('') 
        useEffect(() => {
        fetch('/profile-mds/yeppi.md')
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }, []);
    const content = fm(markdown)
    return(
        <motion.section whileHover={{scale:1.05}}>
            <motion.div className='people-container'
             initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}    
                transition={{ duration: 0.6, delay:0.4 }}>
                <div className='people-intro_container'>
                    <div className='yeppi-img_container'>
                        <img id='thanks-profile_img' src='/profile-img/yeppi_profile.png'></img>
                        <img id='medal' src='imgs/cute_medal.png'></img>
                    </div>
                    <div id='people-name'>{content.attributes.name}</div>
                </div>
                <div id='people-gratitude'>
                    <ReactMarkdown>
                        {content.body}
                    </ReactMarkdown>
                    
                </div>
            </motion.div>
        </motion.section>
    )
}