import '../styles/notfound.css'

export default function NotFound() {
    return (
        <div className="notfound-container">
            <img id="notfound-img" src="/imgs/ah_shit.jpg"></img>
            <div id='notfound'>404 Not Found</div>
            <div className='notfound-text_container'>
                <div id="notfound-title">주인장이 뭔가 실수를 했나봐요.</div>
                <div id='notfound-text'>아마 곧 해결할 거에요</div>
            </div>
            
        </div>
    )
}