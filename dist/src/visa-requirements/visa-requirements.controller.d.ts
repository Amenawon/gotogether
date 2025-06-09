import { VisaRequirementsService } from './visa-requirements.service';
import { VisaRequirementsRequest } from '../models/visa-requirements';
export declare class VisaRequirementsController {
    private readonly visaRequirementsService;
    constructor(visaRequirementsService: VisaRequirementsService);
    getVisaRequirements(visaRequirementsRequest: VisaRequirementsRequest): import("rxjs").Observable<any>;
}
