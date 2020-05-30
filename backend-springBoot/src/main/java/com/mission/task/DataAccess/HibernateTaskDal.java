package com.mission.task.DataAccess;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mission.task.Entities.Task;

@Repository
public class HibernateTaskDal implements ITaskDal {
	
	private EntityManager entityManager;

	@Autowired
	public HibernateTaskDal(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Task> getAll() {
		Session session = entityManager.unwrap(Session.class);
		List<Task>  tasks = session.createQuery("from Task",Task.class).getResultList();
		return tasks;
	}

	@Override
	@Transactional
	public void add(Task task) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(task);

	}

	@Override
	@Transactional
	public void update(Task task) {
		Session session = entityManager.unwrap(Session.class);
		session.saveOrUpdate(task);

	}

	@Override
	@Transactional
	public void delete(Task task) {
		Session session = entityManager.unwrap(Session.class);
		session.delete(task);


	}

	@Override
	public Task getById(int id) {
		Session session = entityManager.unwrap(Session.class);
		Task task = session.get(Task.class, id);
		return task;
	}

}
