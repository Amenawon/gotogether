export interface VisaRequirementsRequest {
    passport: string;
    destination: string;
}

export class VisaRequirements { 
    passportOf: string;
    passportCode: string;
    destination: string;
    cid: string;
    continent: string;
    capital: string;
    currency: string;
    passValid: string;
    phoneCode: string;
    timezone: string;
    exceptText: string;
    visa: string;
    color: string;
    stayOf: string;
    link: string;
    error: string;
}