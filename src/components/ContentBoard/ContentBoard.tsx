import s from "./ContentBoard.module.scss";
import AvatarImage from "../assets/images/content/Avatar.png"
import AddButtonImage from "../assets/images/content/add_button.svg"
import BoardViewImage from "../assets/images/content/board_view.svg"
import ListViewImage from "../assets/images/content/list_view.svg"
import SearchImage from "../assets/images/content/search_icon.svg"
import MoreImage from "../assets/images/content/more_horiz.svg"
import AddTaskImage from "../assets/images/content/add_task.svg"

export const ContentBoard = () => {
  return (
    <div className={s.container}>
      <div className={s.board_head}>
        <div className={s.board_head_title}>Tasks Boards</div>
        <div className={s.board_head_users}>
          <div className={s.user_circles}>
            <div className={s.user_circle}>
              <img src={AvatarImage} alt="avatar" />
            </div>
            <div className={s.user_circle}>
              <img src={AvatarImage} alt="avatar" />
            </div>
            <div className={s.user_circle}>
              <img src={AvatarImage} alt="avatar" />
            </div>
            <div className={s.user_circle}>
              <img src={AvatarImage} alt="avatar" />
            </div>
            <div className={s.user_circle}>
              <div className={s.count_users}>+5</div>
            </div>
          </div>
          <div className={s.add_user_button}>
            <img src={AddButtonImage} alt="add_image" />
          </div>
        </div>
      </div>
			<div className={s.board_action}>
				<div className={s.view_type}>
					<div className={s.view_board}>
						<div className={s.view_img}>
							<img src={BoardViewImage} alt="view_board" />
						</div>
						<div className={s.view_name}>Board View</div>
					</div>
					<div className={s.list_board}>
						<div className={s.view_img}>
							<img src={ListViewImage} alt="view_board" />
						</div>
						<div className={s.view_name}>List View</div>
					</div>
				</div>
				<div className={s.search}>
					<div className={s.search_icon}>
						<img src={SearchImage} alt="search" />
					</div>
					<input placeholder="Search Tasks" type="text" />
				</div>
			</div>
			<div className={s.board_content}>
				<div className={s.board_column}>
					<div className={s.board_column_head}>
						<div className={s.colunm_title}>
							<div className={s.column_name}>Backlog Tasks</div>
							<div className={s.column_count_1}>5</div>
						</div>
						<div className={s.column_menu}>
							<img src={MoreImage} alt="menu_icon" />
						</div>
					</div>
					<div className={s.board_column_tasks}>
						<div className={s.task}>
							<div className={s.header_task}>
								<div className={s.title_task}>Task 1</div>
							</div>
							<div className={s.tags_task}>
								<div className={s.task_tag_1}>#001</div>
								<div className={s.task_tag_2}>Design</div>
								<div className={s.task_tag_3}>backlog</div>
							</div>
							<div className={s.assignment_user}>
								<img src={AvatarImage} alt="avatar" />
							</div>
						</div>
						<div className={s.add_task}>
							<img src={AddTaskImage} alt="add_task" />
						</div>
					</div>
				</div>
			</div>
    </div>
  );
};
