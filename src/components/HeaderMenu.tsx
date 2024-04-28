import "../styles/HeaderMenu.scss";


export const HeaderMenu = (): JSX.Element => {
    return (
        <div className="headerMenu__wrapper">
            <ul className="headerList">
                <li className="headerList__item"><a href="">обо мне</a></li>
                <li className="headerList__item"><a href="">услуги</a></li>
                <li className="headerList__item"><a href="">отзывы</a></li>
                <li className="headerList__item"><a href="">контакты</a></li>
            </ul>
        </div>
    )
}
