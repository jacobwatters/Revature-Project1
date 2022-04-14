package com.revature.ers.repository;

import com.revature.ers.model.Status;
import com.revature.ers.model.ReimbursementStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface StatusRepository extends JpaRepository<Status, Long> {
    Optional<Status> findByStatus(ReimbursementStatus status);
}