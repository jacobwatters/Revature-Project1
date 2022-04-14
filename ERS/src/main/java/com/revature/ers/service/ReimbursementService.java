package com.revature.ers.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.revature.ers.model.Reimbursement;
import com.revature.ers.model.Status;
import com.revature.ers.payload.ReimbursementRequest;

public interface ReimbursementService {
	
	public Reimbursement createReimbursement(ReimbursementRequest reimbursement);
	public List<Reimbursement> findAll();

	public Reimbursement findById(long id);

	public List<Reimbursement> findPending();

	public List<Reimbursement> findApproved();

	public Reimbursement updateReimbursementStatus(long id, long status);
	
	public List<Reimbursement> findByAuthor(int id);

}
