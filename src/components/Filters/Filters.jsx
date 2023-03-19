import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import { dataFilters } from "../../data/data";
import styles from "./Filters.module.scss";

const Filters = () => {
	return (
		<div>
			<ul className={classnames(styles["list"], styles["container"])}>
				<li className={classnames(styles["item"])}>
					<button className={classnames(styles["btn"])}>
						{dataFilters.names.btnAll}
					</button>
				</li>
				<li className={classnames(styles["item"])}>
					<button className={classnames(styles["btn"])}>
						{dataFilters.names.btnActive}
					</button>
				</li>
				<li className={classnames(styles["item"])}>
					<button className={classnames(styles["btn"])}>
						{dataFilters.names.btnCompleted}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filters;
