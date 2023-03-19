import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import styles from "./Filters.module.scss";

const Filters = (props) => {
	return (
		<div>
			<ul className={classnames(styles["list"], styles["container"])}>
				<li className={classnames(styles["item"])}>
					<button className={classnames(styles["btn"])}>
						{props.data.btnAll}
					</button>
				</li>
				<li className={classnames(styles["item"])}>
					<button className={classnames(styles["btn"])}>
						{props.data.btnActive}
					</button>
				</li>
				<li className={classnames(styles["item"])}>
					<button className={classnames(styles["btn"])}>
						{props.data.btnCompleted}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filters;
