import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

export interface Config {
  backendUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config!: Config;

  constructor(private http: HttpClient) {}

  async loadConfig() {
    let confgPath: string = environment.production
      ? 'assets/config/config-prod.json'
      : 'assets/config/config.json';
    const getConfigObservable = this.http.get<Config>(confgPath);
    this.config = await lastValueFrom(getConfigObservable);
  }

  getConfig(): Config {
    return this.config;
  }
}
