package com.revature.ers.repository;

import com.revature.ers.model.Type;
import com.revature.ers.model.ReimbursementType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface TypeRepository extends JpaRepository<Type, Long> {
    Optional<Type> findByType(ReimbursementType type);
}