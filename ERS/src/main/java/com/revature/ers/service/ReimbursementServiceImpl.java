package com.revature.ers.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.revature.ers.exception.AppException;
import com.revature.ers.model.Reimbursement;
import com.revature.ers.model.ReimbursementStatus;
import com.revature.ers.model.ReimbursementType;
import com.revature.ers.model.Status;
import com.revature.ers.model.Type;
import com.revature.ers.payload.ReimbursementRequest;
import com.revature.ers.repository.ReimbursementRepository;
import com.revature.ers.repository.StatusRepository;
import com.revature.ers.repository.TypeRepository;

@Service
public class ReimbursementServiceImpl implements ReimbursementService {

	@Autowired
	ReimbursementRepository reimbursementRepository;
	@Autowired
	StatusRepository statusRepository;
	@Autowired
	TypeRepository typeRepository;
	
	@Override
	public Reimbursement createReimbursement(ReimbursementRequest reimbursement) {
		Reimbursement r = new Reimbursement();
		System.out.println("TYPE!!! " + reimbursement.getType());
		System.out.println("VALUE OF ENUM: " + ReimbursementType.valueOf(reimbursement.getType()));
		Status status = statusRepository.findByStatus(ReimbursementStatus.PENDING).get();
		ReimbursementType rType = ReimbursementType.valueOf(reimbursement.getType());
		Type type = typeRepository.findByType(ReimbursementType.valueOf(reimbursement.getType())).get();
		r.setAmount(Double.valueOf(reimbursement.getAmount()));
		r.setDescription(reimbursement.getDescription());
		r.setStatus(status);
		r.setType(type);
		
		return reimbursementRepository.save(r);
	}
	@Override
	public List<Reimbursement> findAll() {
		// TODO Auto-generated method stub
		return reimbursementRepository.findAll();
	}

	@Override
	public Reimbursement findById(long id) {
		// TODO Auto-generated method stub
		return reimbursementRepository.findById(id).get();
	}

	@Override
	public List<Reimbursement> findPending() {
		// TODO Auto-generated method stub
		return reimbursementRepository.findByStatus(ReimbursementStatus.PENDING);
	}

	@Override
	public List<Reimbursement> findApproved() {
		// TODO Auto-generated method stub
		return reimbursementRepository.findByStatus(ReimbursementStatus.APPROVED);
	}

	public Reimbursement updateReimbursementStatus(long id, long status) {
		Reimbursement reimbursement = null;
		Status stat = statusRepository.findById(status)
				.orElseThrow(() -> new AppException("Status does not exist."));
		
		reimbursement = findById(id);
		if (reimbursement != null && stat!=null) {
			reimbursement.setStatus(stat);
			reimbursementRepository.save(reimbursement);
		}
		return reimbursement;
	}

	@Override
	public List<Reimbursement> findByAuthor(int id) {
		// TODO Auto-generated method stub
		return reimbursementRepository.findByAuthor(id);
	}
}

