export enum Environment {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
}

export const environment = import.meta.env.VITE_ENV as Environment;

export const isDevelopment = environment === Environment.Development;
export const isStaging = environment === Environment.Staging;
export const isProduction = environment === Environment.Production;
