import '../style/components/Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (  
        <header className='header'>
            <nav>
                <div className="container__logo__header">
                    <svg fill="#ccc" width="30" height="30" viewBox="-4 -4 24 24" role="presentation" class="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsb1ejb _4t3i1ejb"><path d="M5.5 11a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm8 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm-8-8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm8 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zM7 13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm8 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM7 5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm8 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></path></svg>
                    <NavLink to="/" className="link">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#0866FF" viewBox="0 0 24 24"><path d="m20.2 4.02-10-2a.99.99 0 0 0-.83.21C9.14 2.42 9 2.7 9 3v1H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h5v1c0 .3.13.58.37.77.18.15.4.23.63.23.07 0 .13 0 .2-.02l10-2c.47-.09.8-.5.8-.98V5c0-.48-.34-.89-.8-.98M5 18V6h4v12zm14 .18-8 1.6V4.22l8 1.6z"></path><path d="M13 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2"></path></svg>
                        <p>TaskFlow</p>
                    </NavLink>
                </div>
                <div className="container__form__header">
                    <form action="#">
                        <div className="input__header">
                            <svg fill="#ccc" viewBox="0 0 16 16" role="presentation" class="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsbpxbi _4t3ipxbi"><path d="M7 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M1 7a6 6 0 1 1 10.74 3.68l3.29 3.29-1.06 1.06-3.29-3.29A6 6 0 0 1 1 7" clip-rule="evenodd"></path></svg>
                            <input type="text" name='search' placeholder='Buscar'/>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;  