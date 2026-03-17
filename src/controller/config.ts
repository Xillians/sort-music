import pino, { type Level, type Logger, type LoggerOptions } from 'pino';
import PinoPretty, { type PrettyStream } from 'pino-pretty';
import process from 'process';
import { Environment } from './types.js';

/**
 * The app config. Fetches environment with fallbacks and runs 
 * with a dry run if the npm script adds the --dry-run arg
 */
class Config {
  private environment: Environment;
  /**
   * Applied if you use --dry-run argument
   */
  private dryRun: boolean;
  /**
   * A pino logger for structured logging. In non-production, uses pino pretty for prettier logs in console.
   */
  public readonly logger: Logger;
  private logLevel: Level;

  constructor() {
  const env = process.env;

  this.environment = (env.NODE_ENV?.toLowerCase() as Environment) ?? 'development';
  this.logLevel = (env.LOG_LEVEL?.toLowerCase() as Level) ?? 'info';
  
  this.dryRun = process.argv.includes('--dry-run');
  this.logger = this.makeLogger();
  }
  public isProduction() {
    return this.environment == Environment.Production;
  }
  public isDev() {
    return this.environment == Environment.Development;
  }
  public isDryrun() {
    return this.dryRun;
  }
  private makeLogger(): Logger {
    const options: LoggerOptions = {
      level: this.logLevel,
    }

    if (this.isProduction()) {
      return pino(options);
    }

    const stream: PrettyStream = PinoPretty({
      ignore: 'pid, hostname',
      translateTime: "HH:MM:ss",
      colorize: true,
      
    });
    return pino(options, stream);
  }
}
export const config = new Config;
export const logger = config.logger;