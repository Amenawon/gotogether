import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { env } from 'process';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VisaRequirements, VisaRequirementsRequest } from 'src/models/visa-requirements';

@Injectable()
export class VisaRequirementsService {
    private readonly apiUrl = 'https://visa-requirement.p.rapidapi.com/';

    constructor(private readonly httpService: HttpService) {}

    getVisaRequirements(requestPayload: VisaRequirementsRequest): Observable<any> {
        try {
            return this.httpService.post(`${this.apiUrl}/`, requestPayload, {
                headers: {
                    'X-Rapidapi-Key': env.RAPIDAPI_KEY,
                    'X-Rapidapi-Host': 'visa-list.p.rapidapi.com'
                }
            })
            .pipe(
                map((response: AxiosResponse) =>{
                     response.data
                    })
            );  
        } catch (error) {
            console.error(error);
        }
      
    }
}