import React, { useState } from "react";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import fm from "front-matter";
import '../styles/workcard.css'
export default function WorkCard({work}){
    const [markdown,setMarkdown] = useState('') 
    useEffect(() => {
    fetch(`/work-intros/${work}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);
    const content = fm(markdown)

    return(
        <motion.section whileHover={{scale:1.05}}>
            <motion.div className="workcard-container" 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}>
                <motion.img id="workcard-thumb" src={content.attributes.path}></motion.img>
                <div className="workcard-text_container">
                    <div id="workcard-title">{content.attributes.title}</div>
                    <div id="workcard-text">
                        <Markdown>
                            {content.body}
                        </Markdown>
                    </div>
                </div>
            </motion.div>
        </motion.section>
        
        
    )
}