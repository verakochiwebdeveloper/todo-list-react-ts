import classes from './Header.module.scss';
export const Header = () => {
    return (
        <header className={classes.header}>
          <div className={classes.header__container}>
            <a className={classes.header__link} href="/">ToDo</a>
          </div>
        </header>
    )
  
}