
const customObservable = new Rx.Observable(observer =>{

    observer.next('Foo');
});
 
customObservable.subscribe(val => console.log(val)); 

const numberObservable = new rxjs.Observable((observer) => {
    observer.next(5);
    observer.next(10);
});

numberObservable.subscribe(value => console.log(value));

