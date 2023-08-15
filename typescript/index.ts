/* โปรเเกรม คำนวน flh เป็น celsius*/
function toCelsius(flh: number): string {
    let va : number = (flh - 32) * 5 / 9
    return va.toFixed(1) + " " + "celsius"
}
function dis(element: string, value: number): void {
    const elem = document.getElementById(element);
    if (elem) {
      elem.innerHTML = value.toString();
    } else {
      throw new Error(`Element with id '${element}' not found.`);
    }
  }
/* โปรเเกรม คำนวน celsius เป็น flh*/
function toFlh(): void {
    const c = prompt("°C :");
    if (c === null) {
      return; // Handle the case when the user cancels the prompt
    }
    const va = (parseFloat(c) * 9 / 5) + 32;
    document.getElementById("value-flh")!.innerHTML = va.toFixed(1) + " " + "°F";
  }
  alert(toCelsius(150));
  dis("toCelsius", toCelsius(150))