import Logo from '../../assets/Logo.svg'
import SearchIcon from '../../assets/icon-search.svg'
import { HeaderContent, Search } from './style';

const Header = () => {
    return (
        <HeaderContent>
            <nav>
                <img src={Logo} alt="logo Image" />
                <ul>
                    <li ><a href="#" className='active'>Categories</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <Search>
                        <input type="search" name="search" id="#" />
                        <img src={SearchIcon} alt="icon search" />
                    </Search>
                </ul>
            </nav>
        </HeaderContent>
    );
}

export default Header;