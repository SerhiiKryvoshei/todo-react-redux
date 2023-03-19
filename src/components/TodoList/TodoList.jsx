import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";

import { removeTodo, toggleTodo } from "../../store/todos/todos-actions";

import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import { selectActiveFilter } from "../../store/filters/filters-selectors";

import styles from "./TodoList.module.scss";

const TodoList = () => {
	const dispatch = useDispatch();
	const activeFilter = useSelector(selectActiveFilter);
	const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
	// const todos = useSelector((state) => state.todos);

	return (
		<ul className={classnames(styles["list"])}>
			{todos.map((todo) => (
				<li className={classnames(styles["item"])} key={todo.id}>
					<p className={classnames(styles["text"])}>{todo.title}</p>
					<div className={classnames(styles["box"])}>
						<input
							className={classnames(styles["custom-checkbox"])}
							type="checkbox"
							name={todo.id}
							id={todo.id}
							checked={todo.completed}
							onChange={() => dispatch(toggleTodo(todo.id))}
						/>
						<label for={todo.id}></label>
						<button
							className={classnames(styles["btn"])}
							onClick={() => dispatch(removeTodo(todo.id))}
						></button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
