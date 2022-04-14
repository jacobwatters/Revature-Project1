package com.revature.ers.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.ers.model.Reimbursement;
import com.revature.ers.model.ReimbursementStatus;

public interface ReimbursementRepository extends JpaRepository<Reimbursement, Long> {

	public List<Reimbursement> findByStatus(ReimbursementStatus status);
	
	public List<Reimbursement> findByAuthor(long authorId);

}
