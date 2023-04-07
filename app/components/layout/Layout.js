import Link from 'next/link';
import Style from './Layout.module.css';

const layout = ({ children }) => {
    return (
        <>
            <header className={Style.header}>
                <Link href="/">
                    <h2>BOTOCAR</h2>
                    <p>Choose an Buy your car</p>
                </Link>
            </header>
            <div className={Style.container}>{ children }</div>
            <footer className={Style.footer}>
                <a href='https://botostart.ir' target="_blank">
                    Botostart
                </a>
                Next.js courses | BOTOCAR Project &copy;
            </footer>
        </>
    );
};

export default layout;