package com.mission.task.Entities;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.*;





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
	
	@Transient
	private Long parentId;
	
	@ManyToOne(fetch = FetchType.LAZY, optional=true)
	@JoinColumn(name="parent_id")
	private Task parent;

	@OneToMany(mappedBy="parent", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval=true)
	private Set<Task> children = new HashSet<Task>();

	
	
	public Task(int id, String name, String description, Long parentId, Task parent, Set<Task> children) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.parentId = parentId;
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



	public Long getParentId() {
		return parentId;
	}



	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}



	public Task getParent() {
		return parent;
	}



	public void setParent(Task parent) {
		this.parent = parent;
	}



	public Set<Task> getChildren() {
		return children;
	}



	public void setChildren(Set<Task> children) {
		this.children = children;
	}

	
	

	
	
	
	

}
