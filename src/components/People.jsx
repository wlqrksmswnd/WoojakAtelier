import '../styles/people.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import fm from 'front-matter';
import ReactMarkdown from 'react-markdown'
export default function People({name}){
    const [markdown,setMarkdown] = useState('') 
        useEffect(() => {
        fetch(`/profile-mds/${name}.md`)
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }, []);
    const content = fm(markdown)
    return(
        <motion.section whileHover={{scale:1.05}}>
            <motion.div className='people-container'
             initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}>
                <div className='people-intro_container'>
                    <img id='thanks-profile_img' src={content.attributes.path}></img>
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