import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AmadeusService {
  private accessToken: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  // Authenticate with Amadeus
  private async authenticate() {
    const clientId = this.configService.get<string>('AMADEUS_API_KEY');
    const clientSecret = this.configService.get<string>('AMADEUS_API_SECRET');

    const response = await firstValueFrom(
      this.httpService.post(
        'https://test.api.amadeus.com/v1/security/oauth2/token',
        new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      ),
    );

    this.accessToken = response.data.access_token;
  }

  // Get Points of Interest (POIs)
  async getPOIs(latitude: number, longitude: number) {
    if (!this.accessToken) await this.authenticate();

    const response = await firstValueFrom(
      this.httpService.get(
        'https://test.api.amadeus.com/v1/reference-data/locations/pois',
        {
          params: { latitude, longitude, radius: 5 },
          headers: { Authorization: `Bearer ${this.accessToken}` },
        },
      ),
    );

    return response.data.data;
  }
}