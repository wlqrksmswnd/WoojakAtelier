import '../styles/footer.css'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className="footer-info_container">
                <div id="footer-copyright">ⓒ Woojak</div>
                <div className="footer-email_container">
                    <i class="bi bi-envelope-fill" style={{color: 'white'}}></i>
                    <div id='footer-email'>wlqrksmswnd@gmail.com</div>
                </div>
                <div className='footer-sns_container'>
                    <a className='footer-sns_insta_container' href='https://www.instagram.com/wlqrksmswnd/' target='_blank'>
                        <i class="bi bi-instagram"></i>
                        <div id='footer-sns_insta'>Instagram</div>
                    </a>
                    <a className='footer-sns_github_container' href='https://github.com/wlqrksmswnd' target='_blank'>
                        <i class="bi bi-github"></i>
                        <div id='footer-sns_insta'>Github</div>
                    </a>
                    <a className='footer-sns_discord_container' href='https://discord.com/users/1190557827241086976' target='_blank'>
                        <i class="bi bi-discord"></i>
                        <div id='footer-sns_discord'>Discord</div>
                    </a>
                </div>
            </div>
            <div id="footer-lang">
                한국어
            </div>
        </footer>
    )
}