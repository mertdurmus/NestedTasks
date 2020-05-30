package com.mission.task.DataAccess;

import java.util.List;
import com.mission.task.Entities.Task;

public interface ITaskDal {
	
	List<Task> getAll();
	void add(Task task);
	void update(Task task);
	void delete(Task task);
	Task getById(int id);

}
