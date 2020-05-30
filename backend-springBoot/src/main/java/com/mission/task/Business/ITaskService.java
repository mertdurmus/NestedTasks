package com.mission.task.Business;

import java.util.List;
import com.mission.task.Entities.Task;

public interface ITaskService {

	List<Task> getAll();
	void add(Task task);
	void update(Task task);
	void delete(Task task);
	Task getById(int id);
}
