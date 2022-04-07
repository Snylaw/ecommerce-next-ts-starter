import { FC } from 'react';
import s from './Usernav.module.css';
import Link from 'next/link';

const Usernav: FC = () => {

    return (
        <nav>
            <ul className={s.list}>
                <li className={s.item}>
                    Cart
                </li>
                <li className={s.item}>
                    <Link href='/'>
                        <a>
                            Whishlist
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Usernav;