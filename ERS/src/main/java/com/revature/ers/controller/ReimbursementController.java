package com.revature.ers.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.ers.model.Reimbursement;
import com.revature.ers.payload.ReimbursementRequest;
import com.revature.ers.payload.UpdateStatusRequest;
import com.revature.ers.service.ReimbursementService;

@RestController
@RequestMapping("api/reimbursements")
public class ReimbursementController {
	@Autowired
    ReimbursementService reimbursementService;
	
	
	@PostMapping
	//@PreAuthorize("hasRole('EMPLOYEE')")
	public Reimbursement createReimbursement(@Valid @RequestBody ReimbursementRequest reimbursement){
		
		return reimbursementService.createReimbursement(reimbursement);
		
	}
	
	@GetMapping
	public List<Reimbursement> getAllReimbursements() {
		return reimbursementService.findAll();
	}
	
	
	@GetMapping("/{id}")
	public Reimbursement getReimbursementById(@PathVariable int id) {
		return reimbursementService.findById(id);
	}
	
	@PutMapping("/{id}")
	public Reimbursement updateReimbursement(@PathVariable int id, @Valid @RequestBody UpdateStatusRequest status) {
		return reimbursementService.updateReimbursementStatus(id, status.getStatus());// reimbursementService
	}
	
	@GetMapping("/users/{authorId}/reimbursement")
	public List<Reimbursement> getReimbursementByUser(@PathVariable int authorId) {
		return reimbursementService.findByAuthor(authorId);
	}
}
