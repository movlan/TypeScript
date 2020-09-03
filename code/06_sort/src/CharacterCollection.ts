export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArr = this.data.split("");

    const leftHand = charArr[leftIndex];
    charArr[leftIndex] = charArr[rightIndex];
    charArr[rightIndex] = leftHand;

    this.data = charArr.join("");
  }
}
