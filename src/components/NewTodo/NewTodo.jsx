import React from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames";

import { addTodo } from "../../store/todos/todos-actions";

import styles from "./NewTodo.module.scss";

const NewTodo = () => {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo(event.target.title.value));
		event.target.reset();
	};

	return (
		<form className={classnames(styles["box"])} onSubmit={handleSubmit}>
			<input
				className={classnames(styles["todo-input"])}
				type="text"
				name="title"
				placeholder="new todo"
			/>
			<input className={classnames(styles["btn"])} type="submit" value="" />
		</form>
	);
};

export default NewTodo;
