package com.revature.ers.model.audit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.revature.ers.model.User;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@JsonIgnoreProperties(
        value = {"author", "resolver"},
        allowGetters = true
)
public abstract class ReimbursementDateAudit extends DateAudit {
    @CreatedBy
    @JoinColumn(name = "user_id", nullable = false)
    private Long author;

    @LastModifiedBy
    @JoinColumn(name = "user_id", nullable = false)
    private Long resolver;

    public Long getAuthor() {
		return author;
	}

	public void setAuthor(Long author) {
		this.author = author;
	}

	public Long getResolver() {
		return resolver;
	}

	public void setResolver(Long resolver) {
		this.resolver = resolver;
	}

}
