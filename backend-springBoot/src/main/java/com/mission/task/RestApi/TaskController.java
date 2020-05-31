package com.mission.task.RestApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mission.task.Business.ITaskService;
import com.mission.task.Entities.Task;

@RestController
@RequestMapping("/api")
public class TaskController {

	private ITaskService taskService;

	@Autowired
	public TaskController(ITaskService taskService) {
		this.taskService = taskService;
	}
	
	@GetMapping("/tasks")
	public List<Task> get(){
		return this.taskService.getAll();
	}
	
	@PostMapping("/add")
	public void add(@RequestBody Task task) {
		this.taskService.add(task);		
	}
	
	@PostMapping("/addChild/{id}")
	public void addChild(@RequestBody Task task, @PathVariable int id) {
		
		this.taskService.add(task);
		this.taskService.addChildren(task, id);
		
	}
	
	@PostMapping("/update")
	public void update(@RequestBody  Task task) {
		this.taskService.update(task);
	}
	@PostMapping("/delete")
	public void delete(@RequestBody Task task) {
		this.taskService.delete(task);
	}
	
	@GetMapping("/delete/{id}")
	public void deleteById(@PathVariable int id) {
		Task task = this.taskService.getById(id);
		this.taskService.delete(task);
	}
	
	@GetMapping("/task/{id}")
	public Task getById(@PathVariable int id){
		return this.taskService.getById(id);
	}
	
	
	
}
