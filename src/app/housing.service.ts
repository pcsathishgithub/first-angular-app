import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { LogService } from './shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'api/locations';
  //url = 'http://localhost:8080/locations';

  logger: LogService = inject(LogService);

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    this.logger.log("URL to get data", this.url);
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    this.logger.debug("URL to get by data by id", `${this.url}/${id}`);
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    this.logger.log(firstName, lastName, email);
  }
}
