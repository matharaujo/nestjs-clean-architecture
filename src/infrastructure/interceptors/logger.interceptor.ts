import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();

        const now = Date.now();
        
        return next.handle().pipe(
            tap(() => {
                Logger.debug(
                    'RESTful',
                    `Request ${request.method} ${request.path} ⏳ ${Date.now() - now}ms`,
                );
            }),
        );
    }
}
