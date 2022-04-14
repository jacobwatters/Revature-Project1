package com.revature.ers.payload;

import javax.validation.constraints.NotBlank;

public class ReimbursementRequest {
    @NotBlank
    private String amount;

    @NotBlank
    private String description;

    @NotBlank
    private String type;

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

   
}
