import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <a className={styles.logo}>
                <Image src="/assets/logo-games.png" alt="Logo OneBitGames" width={220} height={40} />
            </a>
        </Link>
      )
}

export default Logo;