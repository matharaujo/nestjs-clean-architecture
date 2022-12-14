import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ResponseFormat<T> {
    data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ResponseFormat<T>> {
    public intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseFormat<T>> {
        return next.handle().pipe(
            map((data: any) => (data)),
        );
    }
}
