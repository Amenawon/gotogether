import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { VisaRequirementsRequest } from '../models/visa-requirements';
export declare class VisaRequirementsService {
    private readonly httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    getVisaRequirements(requestPayload: VisaRequirementsRequest): Observable<any>;
}
