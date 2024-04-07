import React from "react";
import s from "./ItemMenu.module.scss";

interface PropsI {
  image: string;
  name: string;
  onClick?: () => void;
  active?: boolean;
}
export const ItemMenu: React.FC<PropsI> = (props) => {
  const { image, name, onClick, active } = props;
  return (
    <div className={s.menu_item} onClick={onClick}>
      <div className={s.item_image}>
        <img src={image} alt="item" />
      </div>
      <div className={`${s.item_name} ${active ? s.active : ""}`}>{name}</div>
    </div>
  );
};
