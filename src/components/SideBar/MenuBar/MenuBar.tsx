import ExpendLessImage from "../../assets/images/sidebar/expand_less.svg";
import s from "./MenuBar.module.scss";
import { ItemMenu } from "../ItemMenu/ItemMenu";

interface ItemMenuI {
  key: string;
  image: string;
  name: string;
  onClick?: () => void;
}

interface PropsI {
  name: string;
  listMenu: ItemMenuI[];
  activeMenuKey?: string;
  children?: React.ReactNode;
}
export const MenuBar: React.FC<PropsI> = (props) => {
  const { name, listMenu, children } = props;
  return (
    <div className={s.menu}>
      <div className={s.menu_head}>
        <div className={s.menu_head_title}>{name}</div>
        <div className={s.button_expand}>
          <img src={ExpendLessImage} alt="expand" />
        </div>
      </div>
      <div className={s.menu_items}>
        {listMenu.map((item, index) => (
          <ItemMenu
            key={index}
            image={item.image}
            name={item.name}
            onClick={item.onClick}
            active={item.key === props.activeMenuKey}
          />
        ))}
        {children}
      </div>
    </div>
  );
};
