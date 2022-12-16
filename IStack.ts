class IStack<T>{
   private Depot: T[] = [];
      constructor() {
      }
      push(data: T): number {
         return this.Depot.push(data);
      }
      pop(): T {
         return this.Depot.pop()
      }

      size(): number{
         return this.Depot.length
      }


}
