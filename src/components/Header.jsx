import '../style/components/Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (  
        <header className="header">
            <nav className="nav__header">
                <div className="container__logo__header">
                    <svg fill="#A9ABAF" width="35" height="35" viewBox="-4 -4 24 24" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsb1ejb _4t3i1ejb"><path d="M5.5 11a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm8 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm-8-8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm8 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zM7 13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm8 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM7 5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm8 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></path></svg>
                    <NavLink to="/" className="link">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#0866FF" viewBox="0 0 24 24"><path d="m20.2 4.02-10-2a.99.99 0 0 0-.83.21C9.14 2.42 9 2.7 9 3v1H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h5v1c0 .3.13.58.37.77.18.15.4.23.63.23.07 0 .13 0 .2-.02l10-2c.47-.09.8-.5.8-.98V5c0-.48-.34-.89-.8-.98M5 18V6h4v12zm14 .18-8 1.6V4.22l8 1.6z"></path><path d="M13 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2"></path></svg>
                        <p>TaskFlow</p>
                    </NavLink>
                </div>
                <div className="container__form__header">
                    <form action="#">
                        <div className="input__header">
                            <svg fill="#A9ABAF" width="19" height="19" viewBox="0 0 16 16" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path d="M7 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M1 7a6 6 0 1 1 10.74 3.68l3.29 3.29-1.06 1.06-3.29-3.29A6 6 0 0 1 1 7"></path></svg>
                            <input type="text" name='search' placeholder='Buscar' maxLength={58}/>
                        </div>
                        <button>Crear</button>
                    </form>
                </div>
                <div className="container__contacts__header">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccc" viewBox="0 0 24 24"><path d="M18 7V3c0-.35-.19-.68-.49-.86a1 1 0 0 0-.99-.01L7.74 7H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h3v6h2v-5.46l7.59 3.37c.13.06.27.09.41.09a1.01 1.01 0 0 0 1-1v-4c2.21 0 4-1.79 4-4s-1.79-4-4-4M4 14V9h3v5zm12 3.46-7-3.11V8.59l7-3.89zM18 13V9c1.1 0 2 .9 2 2s-.9 2-2 2"></path></svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccc" viewBox="0 0 24 24"><path d="M19 12.59V10c0-3.22-2.18-5.93-5.14-6.74C13.57 2.52 12.85 2 12 2s-1.56.52-1.86 1.26C7.18 4.08 5 6.79 5 10v2.59L3.29 14.3a1 1 0 0 0-.29.71v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.27-.11-.52-.29-.71zM19 16H5v-.59l1.71-1.71a1 1 0 0 0 .29-.71v-3c0-2.76 2.24-5 5-5s5 2.24 5 5v3c0 .27.11.52.29.71L19 15.41zm-4.18 4H9.18c.41 1.17 1.51 2 2.82 2s2.41-.83 2.82-2"></path></svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccc" viewBox="0 0 24 24" ><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="M11 16h2v2h-2zm2.27-9.75c-2.08-.75-4.47.35-5.21 2.41l1.88.68c.18-.5.56-.9 1.07-1.13s1.08-.26 1.58-.08a2.01 2.01 0 0 1 1.32 1.86c0 1.04-1.66 1.86-2.24 2.07-.4.14-.67.52-.67.94v1h2v-.34c1.04-.51 2.91-1.69 2.91-3.68a4.015 4.015 0 0 0-2.64-3.73"></path></svg>
                    </span>
                    <div className='contact'></div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;  