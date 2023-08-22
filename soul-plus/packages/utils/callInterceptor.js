import { isPromise } from '.';

export function callInterceptor({ interceptor, args, done, canceled } = {}) {
  if (interceptor) {
    // interceptorVal ? done : cancel
    const interceptorVal = interceptor.apply(null, args || []);

    if (isPromise(interceptorVal)) {
      interceptorVal
        .then(value => {
          value ? done?.() : canceled?.();
        })
        .catch(err => {
          console.warn('error callInterceptor: ' + err);
        });
    } else if (interceptorVal) {
      done?.();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
