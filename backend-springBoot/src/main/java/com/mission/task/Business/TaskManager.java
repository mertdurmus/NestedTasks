package com.mission.task.Business;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mission.task.DataAccess.ITaskDal;
import com.mission.task.Entities.Task;

@Service
public class TaskManager implements ITaskService {
	
	private ITaskDal iTaskDal;

	@Autowired
	public TaskManager(ITaskDal iTaskDal) {
		this.iTaskDal = iTaskDal;
	}

	@Override
	public List<Task> getAll() {
		return this.iTaskDal.getAll();
	}

	@Override
	@Transactional
	public void add(Task task) {
		this.iTaskDal.add(task);

	}

	@Override
	@Transactional
	public void update(Task task) {
		this.iTaskDal.update(task);
	}

	@Override
	@Transactional
	public void delete(Task task) {
		this.iTaskDal.delete(task);
	}

	@Override
	public Task getById(int id) {
		return this.iTaskDal.getById(id);
	}

	@Override
	public void addChildren(Task task, int id) {
		this.iTaskDal.addChildren(task, id);
		
	}
	
	

}
