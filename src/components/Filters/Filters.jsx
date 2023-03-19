import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import { setFilter } from "../../store/filters/filters-actions";
import { selectActiveFilter } from "../../store/filters/filters-selectors";

import styles from "./Filters.module.scss";

const Filters = (props) => {
	const activeFilter = useSelector(selectActiveFilter);
	const dispatch = useDispatch();

	return (
		<div>
			<ul className={classnames(styles["list"], styles["container"])}>
				<li className={classnames(styles["item"])}>
					<button
						className={
							activeFilter === "all"
								? classnames(styles["btn"], styles["btn--active"])
								: classnames(styles["btn"])
						}
						onClick={() => dispatch(setFilter("all"))}
					>
						{props.data.btnAll}
					</button>
				</li>
				<li className={classnames(styles["item"])}>
					<button
						className={
							activeFilter === "active"
								? classnames(styles["btn"], styles["btn--active"])
								: classnames(styles["btn"])
						}
						onClick={() => dispatch(setFilter("active"))}
					>
						{props.data.btnActive}
					</button>
				</li>
				<li className={classnames(styles["item"])}>
					<button
						className={
							activeFilter === "completed"
								? classnames(styles["btn"], styles["btn--active"])
								: classnames(styles["btn"])
						}
						onClick={() => dispatch(setFilter("completed"))}
					>
						{props.data.btnCompleted}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filters;
