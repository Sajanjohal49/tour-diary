import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tour Diary</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Places</Link>
          </li>
          <li>
            <Link href='/meetup'>Add New Place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
