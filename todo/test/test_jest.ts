export function addition(a: number, b: number): number {
    return a + b;
  }
  
  export function concatString(a: string, b: string): string {
    return a + b;
  }
  
  export function createArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  
  export function makeObject(title: string, iscompleted: boolean): object {
    return { title, iscompleted };
  }