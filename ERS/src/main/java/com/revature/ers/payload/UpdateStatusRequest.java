package com.revature.ers.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class UpdateStatusRequest {
	@NotNull
    private Long status;

	public Long getStatus() {
		return status;
	}

	public void setStatus(Long status) {
		this.status = status;
	}
	
}
