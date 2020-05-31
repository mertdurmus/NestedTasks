package com.mission.task.Entities;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonIgnore;





@Entity
@Table(name="tasks")
public class Task {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	
	@OneToOne( cascade = { CascadeType.ALL } )
	@JoinColumn(name = "parent_id")
	@NotFound(action = NotFoundAction.IGNORE)
	private Task parent;

	
	@OneToMany(mappedBy = "parent")
	@JsonIgnore
	private Set<Task> children = new HashSet<Task>();

	



	public Task(int id, String name, String description, Task parent, Set<Task> children) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.parent = parent;
		this.children = children;
	}



	public Task() {
		super();
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}


	public Set<Task> getChildren() {
		return children;
	}



	public void setChildren(Set<Task> taskChild) {
		this.children =  taskChild;
	}



	public Task getParent() {
		return parent;
	}



	public void setParent(Task parent) {
		this.parent = parent;
	}


    public void addChild(Task children) {
        this.children.add(children);
    }
		

}
